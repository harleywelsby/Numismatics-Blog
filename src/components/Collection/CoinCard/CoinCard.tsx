import { useMediaQuery } from 'react-responsive';
import { ScreenSize } from '../../../shared/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinCardModal } from './CoinCardModal';
import { CardWrapper, CardText, CoinImageWrapper } from './CoinCard.styles';
import { CoinCardOptions, CollectionItemV2 } from '../Collection.types';
import { Routes } from '../../../shared/utils/router';

const getThumbnailDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 150, height: 150 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 225, height: 225 };
  }
};

interface CoinCardProps {
  coin: CollectionItemV2;
  options?: CoinCardOptions;
}

export const CoinCard = ({ coin, options }: CoinCardProps) => {
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

  const thumbnailDimensions = options?.sizeOverride || getThumbnailDimensions(screenSize);

  const [showModal, setShowModal] = useState(false);

  // Include some more info when not in the inspect modal.
  const expandedTitle = `${coin.title} (${coin.mint.date})`;

  return (
    <>
      {showModal && (
        <CoinCardModal
          coin={coin}
          showModal={showModal}
          setShowModal={setShowModal}
          closeRerouteOverride={options?.modalRerouteOverride}
        />
      )}
      <CardWrapper
        to={
          options?.disableRedirect
            ? window.location.href
            : Routes.CollectionItem.replace(':itemId', `${coin.id}`)
        }
        onClick={() => setShowModal(true)}
        data-test-id={`coin-card-${coin.id}`}
        $noPadding={options?.noPadding ?? false}
      >
        <CoinImageWrapper>
          <img
            src={coin.obverse.imagePath}
            alt={expandedTitle}
            width={thumbnailDimensions.width}
            height={thumbnailDimensions.height}
            loading="lazy"
          />
          <img
            src={coin.reverse.imagePath}
            alt={expandedTitle}
            width={thumbnailDimensions.width}
            height={thumbnailDimensions.height}
            loading="lazy"
          />
        </CoinImageWrapper>
        {!options?.hideTitle && <CardText>{expandedTitle}</CardText>}
      </CardWrapper>
    </>
  );
};
