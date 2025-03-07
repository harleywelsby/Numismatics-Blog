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
  // TODO #8: These media queries are hacky and bad. Clean this up
  const isBigScreen = useMediaQuery({ query: '(min-width: 86em)' });
  const isMedScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });

  const thumbnailDimensions = isBigScreen
    ? { width: 450, height: 225 }
    : { width: 300, height: 150 };

  let inspectDimensions = { width: 300, height: 150 };
  if (isMedScreenOrLarger) {
    inspectDimensions = isBigScreen ? { width: 1000, height: 500 } : { width: 500, height: 250 };
  }

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
