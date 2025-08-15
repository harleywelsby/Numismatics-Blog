import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { CollectionData } from '../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { HeaderParagraph, MapWrapper, MarkerButton, SectionSeparator } from './MintMap.styles';
import { Mint } from './MintMap.types';
import { CoinCardGrid } from '../Collection/Collection.styles';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { getColumnOverride } from '../Collection/utils/GridHelpers';

const MintData: Mint[] = [
  {
    position: [41.891, 12.3047],
    name: 'Rome',
    description: 'The Mint of Rome',
  },
  {
    position: [36.293, 36.1615],
    name: 'Antioch',
    description: 'The Mint of Antioch',
  },
  {
    position: [38.18, 26.783],
    name: 'Teos',
    description: 'The Mint of Teos, Ionia',
  },
  {
    position: [50.9579, 6.9673],
    name: 'Colonia Agrippinensis',
    description: 'The Mint of Cologne',
  },
  {
    position: [33.172, 44.4328],
    name: 'Seleucia on the Tigris',
    description: 'The Mint of Seleucia, Babylon',
  },
  {
    position: [36.952, 28.581],
    name: 'Kaunos',
    description: 'The Mint of Kaunos, Karia',
  },
  {
    position: [40.6806, 29.9982],
    name: 'Nicomedia',
    description: 'The Mint of Nicomedia',
  },
  {
    position: [45.7624, 13.3445],
    name: 'Aquileia',
    description: 'The Mint of Aquileia',
  },
  {
    position: [40.6405, 22.9353],
    name: 'Thessalonika',
    description: 'The Mint of Thessalonika',
  },
  {
    position: [45.456, 16.5122],
    name: 'Siscia',
    description: 'The Mint of Siscia',
  },
  {
    position: [41.0066, 28.9759],
    name: 'Constantinople',
    description: 'The Mint of Constantinople',
  },
];

export const MintMap = () => {
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

  const collectionFilteredByMint = CollectionData.filter((coin) => {
    if (!selectedMint) {
      return false;
    }
    return (
      selectedMint.name.toLowerCase().includes(coin.mint.location.toLowerCase()) ||
      coin.mint.location.toLowerCase().includes(selectedMint.name.toLowerCase())
    );
  });

  return (
    <PageWrapper>
      <HeaderText>Mint Map</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>
        This page tracks the mint location of the coins in the Niho Collection. Select a pin to
        learn more about the mint, and the coins minted there.
      </HeaderParagraph>
      <MapWrapper center={[41.891, 12.3047]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}@2x.png"
        />

        {MintData.map((mint) => (
          <Marker position={mint.position} eventHandlers={{ click: () => handleSelectMint(mint) }}>
            <Popup>
              <b>{mint.name}</b> <br /> {mint.description}
            </Popup>
          </Marker>
        ))}
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
