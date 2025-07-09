import { useMediaQuery } from 'react-responsive';
import { CardText, CardWrapper } from './Collection.styles';
import { useEffect, useState } from 'react';
import { CoinCardProps } from './Collection.types';
import { ScreenSize } from '../../shared/types';
import { useParams } from 'react-router-dom';
import { Routes } from '../../shared/utils/router';
import { CoinCardModal } from './CoinCardModal';

const getThumbnailDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 300, height: 150 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 450, height: 225 };
  }
};

export const CoinCard = ({ coin, hideTitle, sizeOverride, noPadding }: CoinCardProps) => {
  const { itemId } = useParams();

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  useEffect(() => {
    // Automatically show the modal if the itemId matches this coin's ID.
    if (itemId && parseInt(itemId, 10) === coin.id) {
      setShowModal(true);
    }
  }, [itemId, coin.id]);

  const thumbnailDimensions = sizeOverride || getThumbnailDimensions(screenSize);

  const [showModal, setShowModal] = useState(false);

  // Include some more info when not in the inspect modal.
  const expandedTitle = `${coin.title} (${coin.mintDate})`;

  return (
    <>
      {showModal && <CoinCardModal coin={coin} showModal={showModal} setShowModal={setShowModal} />}
      <CardWrapper
        to={Routes.CollectionItem.replace(':itemId', `${coin.id}`)}
        onClick={() => setShowModal(true)}
        data-test-id={`coin-card-${coin.id}`}
        $noPadding={noPadding ?? false}
      >
        <img
          src={coin.imgPath}
          alt={expandedTitle}
          width={thumbnailDimensions.width}
          height={thumbnailDimensions.height}
          loading="lazy"
        />
        {!hideTitle && <CardText>{expandedTitle}</CardText>}
      </CardWrapper>
    </>
  );
};
