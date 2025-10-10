import { SectionHeader } from '../CoinDetails';
import { useMediaQuery } from 'react-responsive';
import { CollectionItem } from '../../../../shared/types/CollectionItem.types';
import { CoinVideo, SectionSeparator } from '../CoinDetails.styles';

interface VideoSectionProps {
  coin: CollectionItem;
}

const VideoSection = ({ coin }: VideoSectionProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });

  if (!coin.moreDetails?.videoUrl) {
    return null;
  }

  return (
    <>
      <SectionSeparator />
      <SectionHeader title="In-Hand Video" />
      {isSmallScreen && <br />}
      <CoinVideo
        src={coin.moreDetails.videoUrl}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </>
  );
};

export default VideoSection;
