import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { CollectionData } from '../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
import { useContext, useEffect, useRef } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { Mint } from './MintMap.types';
import {
  CoinCardGrid,
  FilterItem,
  FilterLabel,
  FilterSelectBox,
} from '../Collection/Collection.styles';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { getColumnOverride } from '../Collection/utils/GridHelpers';
import { MintData, MintMapAuthorityGroups } from '../../assets/MintMapData';
import { SortType } from '../Collection/Collection.types';
import { ActiveSortTypes, SortCollectionData } from '../Collection/utils/FilterHelpers';
import { MintMapStateContext } from './MintMapState/MintMapStateContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CollectionItem } from '../../shared/types/CollectionItem.types';
import { MapContainer } from 'react-leaflet';
import styled, { css } from 'styled-components';

const coinMintMatches = (selectedMint: Mint | null, coin: CollectionItem) => {
  if (!selectedMint) {
    return CollectionData;
  }
  return (
    selectedMint.name.toLowerCase().includes(coin.mint.location.toLowerCase()) ||
    coin.mint.location.toLowerCase().includes(selectedMint.name.toLowerCase())
  );
};

export const MintMap = () => {
  const [searchParams] = useSearchParams();
  const selected = searchParams.get('selected');

  const isSmallScreen = useMediaQuery({ maxWidth: '65em' });
  const isMediumScreen = useMediaQuery({ minWidth: '65em', maxWidth: '100em' });
  const coinSection = useRef<HTMLHeadingElement | null>(null);
  const {
    selectedMint,
    setSelectedMint,
    sortType,
    setSortType,
    authorityFilter,
    setAuthorityFilter,
  } = useContext(MintMapStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      setSelectedMint(MintData.find((x) => x.name === selected) ?? null);
      window.scrollTo({
        top: coinSection.current?.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [selected, setSelectedMint]);

  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.MintMap);
  }, [setSelectedRoute]);

  const handleSelectMint = (mint: Mint) => {
    setSelectedMint(mint);
    navigate(`${Routes.MintMap}?selected=${mint.name}`);

    // Ensure the section has been rendered first
    setTimeout(() => {
      if (isSmallScreen) {
        console.log(`coinSection: ${coinSection.current?.offsetTop}`);
        window.scrollTo({
          top: coinSection.current?.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 10);
  };

  let filteredData = CollectionData.sort((a, b) => b.id - a.id);

  const currentAuthorityGroup = MintMapAuthorityGroups.find((x) => x.name === authorityFilter);
  if (authorityFilter !== 'All' && currentAuthorityGroup) {
    filteredData = filteredData.filter((x) =>
      currentAuthorityGroup.includedAuthorities.includes(x.authority),
    );
  }

  const collectionFilteredByAuthority = filteredData;
  const collectionFilteredByMint = filteredData.filter((coin) => {
    return coinMintMatches(selectedMint, coin);
  });

  const sortedCollectionData = SortCollectionData(collectionFilteredByMint, sortType);

  return (
    <PageWrapper>
      <HeaderText>Mint Map</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>
        This page tracks the mint location of the coins in the Niho Collection. Select a pin to
        learn more about the mint, and the coins minted there.
      </HeaderParagraph>
      <FilterSection>
        <FilterButton
          $selected={authorityFilter === 'All'}
          onClick={() => setAuthorityFilter('All')}
        >
          All
        </FilterButton>
        <FilterButton
          $selected={authorityFilter === 'Ancient Rome'}
          onClick={() => setAuthorityFilter('Ancient Rome')}
        >
          Ancient Rome
        </FilterButton>
        <FilterButton
          $selected={authorityFilter === 'Ancient Greece'}
          onClick={() => setAuthorityFilter('Ancient Greece')}
        >
          Ancient Greece
        </FilterButton>
      </FilterSection>
      <MapWrapper center={[41.891, 12.3047]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}@2x.png"
        />
        {MintData.map(
          (mint) =>
            collectionFilteredByAuthority.some((coin) => coinMintMatches(mint, coin)) && (
              <Marker
                position={mint.position}
                eventHandlers={{ click: () => handleSelectMint(mint) }}
              >
                <Popup>
                  <b>{mint.name}</b>
                </Popup>
              </Marker>
            ),
        )}
      </MapWrapper>
      {selectedMint ? (
        <>
          <SectionSeparator />
          <HeaderText ref={coinSection} $primaryColor>
            {selectedMint.name}
          </HeaderText>
          <HeaderSeparator $primaryColor />
          <HeaderParagraph $leftAlign>{selectedMint.description}</HeaderParagraph>
          {sortedCollectionData.length > 3 && (
            <FilterSection>
              <FilterItem>
                <FilterLabel>Sort by:</FilterLabel>
                <FilterSelectBox
                  name="sortType"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value as SortType)}
                >
                  {ActiveSortTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </FilterSelectBox>
              </FilterItem>
            </FilterSection>
          )}
          <CoinCardGrid
            $columnsOverride={getColumnOverride(
              isSmallScreen,
              isMediumScreen,
              collectionFilteredByMint.length,
            )}
          >
            {sortedCollectionData.map((x) => (
              <CoinCard key={x.id} coin={x} />
            ))}
          </CoinCardGrid>
        </>
      ) : (
        <Spacer />
      )}
    </PageWrapper>
  );
};

const MapWrapper = styled(MapContainer)`
  height: 600px;
  width: 90vw;
  border-radius: 10px;
  justify-self: center;

  @media (max-width: 35em) {
    height: 400px;
  }

  @media (min-width: 100em) {
    width: 60vw;
  }
`;

const HeaderParagraph = styled.p<{ $leftAlign?: boolean }>`
  text-align: center;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  justify-self: center;
  max-width: 50%;

  ${(props) =>
    props.$leftAlign &&
    css`
      text-align: left;
    `}

  @media (max-width: 100em) {
    max-width: 80%;
  }
`;

const SectionSeparator = styled.div`
  margin: 2rem 0 0 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 90%;
  justify-self: center;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;

  @media (min-width: 35em) {
    margin-top: 0;
  }
`;

const FilterButton = styled.button<{ $selected?: boolean }>`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  border-bottom: solid transparent;
  display: block;
  text-align: center;
  text-decoration: none;
  color: var(--soft-white);
  font-weight: 500;
  padding: 0.5rem;

  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);

  ${(props) =>
    props.$selected &&
    css`
      color: var(--title-orange);
      border-bottom: solid;
    `}

  &:hover {
    color: var(--title-orange);
    border-bottom: solid;
  }
`;

const Spacer = styled.div`
  height: 100px;
`;
