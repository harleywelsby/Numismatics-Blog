import { Marker, Popup, TileLayer } from 'react-leaflet';
import { MintData } from '../../../../assets/MintMapData';
import { Mint } from '../../../../shared/types/Mint.types';
import { Map } from '../CoinDetails.styles';
import { SectionHeader } from '../CoinDetails';
import { DescriptionText } from '../CoinDetails.styles';
import { useMediaQuery } from 'react-responsive';

interface MintSectionProps {
  mint: Mint;
}

const MintSection = ({ mint }: MintSectionProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });
  const mintDetails = MintData.find((m) => m.name === mint.location);

  if (!mintDetails) {
    return null;
  }

  return (
    <>
      <SectionHeader title="Mint Location" subTitle={mint.date} />
      {isSmallScreen && <br />}
      <DescriptionText>{mintDetails.description}</DescriptionText>
      <Map center={mintDetails.position} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}@2x.png"
        />
        <Marker position={mintDetails.position}>
          <Popup>
            <b>{mintDetails.name}</b>
          </Popup>
        </Marker>
      </Map>
    </>
  );
};

export default MintSection;
