import { SetItem } from './Sets.Types';
import { SetItemImage, SetItemName, SetItemWrapper } from './Sets.styles';
import { ScreenSize } from '../../shared/types';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { CollectionDataV1 } from '../../assets/CollectionData';
import { Routes } from '../../shared/utils/router';
import { CoinCardModal } from '../Collection/V1/CoinCardModal';

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 120, height: 120 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 200, height: 200 };
  }
};

export const SingleSetItem = ({ name, secondLine, imageUrl, completed, collectionId }: SetItem) => {
  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  const collectionItem = collectionId
    ? CollectionDataV1.find((item) => item.id === collectionId)
    : null;

  const [showModal, setShowModal] = useState(false);

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const imageDimensions = getImageDimensions(screenSize);

  const handleClick = () => {
    if (!completed || !collectionId) {
      return;
    }

    setShowModal(true);
  };

  return (
    <SetItemWrapper>
      <SetItemImage
        onClick={handleClick}
        src={imageUrl}
        alt={name}
        width={imageDimensions.width}
        height={imageDimensions.height}
        isComplete={completed}
        loading="lazy"
      />
      <SetItemName>{name}</SetItemName>
      {secondLine && <SetItemName>{secondLine}</SetItemName>}
      {showModal && collectionItem && (
        <CoinCardModal
          coin={collectionItem}
          showModal={showModal}
          setShowModal={setShowModal}
          closeRerouteOverride={Routes.Sets}
        />
      )}
    </SetItemWrapper>
  );
};
