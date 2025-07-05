import { useMediaQuery } from 'react-responsive';
import {
  CardText,
  CardWrapper,
  CloseModalButton,
  ModalBodyWrapper,
  ModalContent,
  ModalHeader,
  ModalImage,
  ModalText,
  ModalTextWrapper,
} from './Collection.styles';
import { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import { CoinCardProps } from './Collection.types';
import { ScreenSize } from '../../shared/types';
import { useNavigate, useParams } from 'react-router-dom';
import { Routes } from '../../shared/utils/router';

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
  const navigate = useNavigate();
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

  const handleModalClose = () => {
    setShowModal(false);
    navigate(Routes.Collection);
  };

  const thumbnailDimensions = sizeOverride || getThumbnailDimensions(screenSize);

  const [showModal, setShowModal] = useState(false);

  const inspectModal = (
    <Modal open={showModal} onClose={handleModalClose}>
      <ModalContent data-test-id={`coin-card-${coin.id}-modal-content`}>
        <ModalImage src={getFullImagePath(coin.imgPath)} loading="lazy" />
        <ModalTextWrapper>
          <ModalHeader>{coin.title}</ModalHeader>
          <ModalBodyWrapper>
            <ModalText>
              <b>Ruler: </b>
              {coin.ruler}
            </ModalText>
            <ModalText>
              <b>Authority: </b>
              {coin.authority}
            </ModalText>
            <ModalText>
              <b>Minted: </b>
              {`${coin.mintLocation} (${coin.mintDate})`}
            </ModalText>
            <ModalText>
              <b>Obv: </b>
              {coin.obverseDescription}
            </ModalText>
            <ModalText>
              <b>Rev: </b>
              {coin.reverseDescription}
            </ModalText>
            <ModalText>
              <b>Ref: </b>
              {coin.catalogueNumber}
            </ModalText>
          </ModalBodyWrapper>
        </ModalTextWrapper>
        <CloseModalButton
          onClick={handleModalClose}
          data-test-id={`coin-card-${coin.id}-modal-close`}
        >
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </CloseModalButton>
      </ModalContent>
    </Modal>
  );

  // Include some more info when not in the inspect modal.
  const expandedTitle = `${coin.title} (${coin.mintDate})`;

  return (
    <>
      {showModal && inspectModal}
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
