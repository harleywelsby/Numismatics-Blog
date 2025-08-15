import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { CollectionData } from '../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import {
  FilterButton,
  FilterSection,
  HeaderParagraph,
  MapWrapper,
  SectionSeparator,
} from './MintMap.styles';
import { Mint } from './MintMap.types';
import { CoinCardGrid } from '../Collection/Collection.styles';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { getColumnOverride } from '../Collection/utils/GridHelpers';
import { MintData, MintMapAuthorityGroups } from '../../assets/MintMapData';
import { CollectionItem } from '../Collection/Collection.types';

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
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedMint, setSelectedMint] = useState<Mint | null>(null);
  const isSmallScreen = useMediaQuery({ maxWidth: '65em' });
  const isMediumScreen = useMediaQuery({ minWidth: '65em', maxWidth: '100em' });

  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.MintMap);
  }, [setSelectedRoute]);

  const handleSelectMint = (mint: Mint) => {
    setSelectedMint(mint);
  };

  let filteredData = CollectionData;

  const currentAuthorityGroup = MintMapAuthorityGroups.find((x) => x.name === selectedFilter);
  if (selectedFilter !== 'All' && currentAuthorityGroup) {
    filteredData = filteredData.filter((x) =>
      currentAuthorityGroup.includedAuthorities.includes(x.authority),
    );
  }

  const collectionFilteredByAuthority = filteredData;
  const collectionFilteredByMint = filteredData.filter((coin) => {
    return coinMintMatches(selectedMint, coin);
  });

  return (
    <PageWrapper>
      <HeaderText>Mint Map</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>
        This page tracks the mint location of the coins in the Niho Collection. Select a pin to
        learn more about the mint, and the coins minted there.
      </HeaderParagraph>
      <FilterSection>
        <FilterButton $selected={selectedFilter === 'All'} onClick={() => setSelectedFilter('All')}>
          All
        </FilterButton>
        <FilterButton
          $selected={selectedFilter === 'Ancient Rome'}
          onClick={() => setSelectedFilter('Ancient Rome')}
        >
          Ancient Rome
        </FilterButton>
        <FilterButton
          $selected={selectedFilter === 'Ancient Greece'}
          onClick={() => setSelectedFilter('Ancient Greece')}
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
                  <b>{mint.name}</b> <br /> {mint.description}
                </Popup>
              </Marker>
            ),
        )}
      </MapWrapper>
      {selectedMint && (
        <>
          <SectionSeparator />
          <HeaderText $primaryColor>{selectedMint.name}</HeaderText>
          <HeaderSeparator $primaryColor />
          <CoinCardGrid
            $columnsOverride={getColumnOverride(
              isSmallScreen,
              isMediumScreen,
              collectionFilteredByMint.length,
            )}
          >
            {collectionFilteredByMint.map((x) => (
              <CoinCard key={x.id} coin={x} />
            ))}
          </CoinCardGrid>
        </>
      )}
    </PageWrapper>
  );
};
