import { useMediaQuery } from 'react-responsive';
import {
  CardText,
  CardWrapper,
  CloseModalButton,
  ModalBodyWrapper,
  ModalContent,
  ModalHeader,
  ModalText,
  ModalTextWrapper,
} from './Collection.styles';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import { CollectionItem } from './Collection.types';
import { ScreenSize } from '../../shared/types';

const getThumbnailDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 300, height: 150 };
    case ScreenSize.Medium:
    case ScreenSize.Large:
      return { width: 450, height: 225 };
  }
};

const getInspectDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 300, height: 150 };
    case ScreenSize.Medium:
      return { width: 700, height: 350 };
    case ScreenSize.Large:
      return { width: 1000, height: 500 };
  }
};

export const CoinCard = ({
  id,
  title,
  imgPath,
  ruler,
  authority,
  mintLocation,
  mintDate,
  obverseDescription,
  reverseDescription,
  catalogueNumber,
}: CollectionItem) => {
  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const thumbnailDimensions = getThumbnailDimensions(screenSize);
  const inspectDimensions = getInspectDimensions(screenSize);

  const [showModal, setShowModal] = useState(false);

  const inspectModal = (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <ModalContent data-test-id={`coin-card-${id}-modal-content`}>
        <img
          src={getFullImagePath(imgPath)}
          width={inspectDimensions.width}
          height={inspectDimensions.height}
          loading="lazy"
        />
        <ModalTextWrapper>
          <ModalHeader>{title}</ModalHeader>
          <ModalBodyWrapper>
            <ModalText>
              <b>Ruler: </b>
              {ruler}
            </ModalText>
            <ModalText>
              <b>Authority: </b>
              {authority}
            </ModalText>
            <ModalText>
              <b>Minted: </b>
              {`${mintLocation} (${mintDate})`}
            </ModalText>
            <ModalText>
              <b>Obv: </b>
              {obverseDescription}
            </ModalText>
            <ModalText>
              <b>Rev: </b>
              {reverseDescription}
            </ModalText>
            <ModalText>
              <b>Ref: </b>
              {catalogueNumber}
            </ModalText>
          </ModalBodyWrapper>
        </ModalTextWrapper>
        <CloseModalButton
          onClick={() => setShowModal(false)}
          data-test-id={`coin-card-${id}-modal-close`}
        >
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </CloseModalButton>
      </ModalContent>
    </Modal>
  );

  // Include some more info when not in the inspect modal.
  const expandedTitle = `${title} (${mintDate})`;

  return (
    <>
      {showModal && inspectModal}
      <CardWrapper onClick={() => setShowModal(true)} data-test-id={`coin-card-${id}`}>
        <img
          src={imgPath}
          alt={expandedTitle}
          width={thumbnailDimensions.width}
          height={thumbnailDimensions.height}
          loading="lazy"
        />
        <CardText>{expandedTitle}</CardText>
      </CardWrapper>
    </>
  );
};
