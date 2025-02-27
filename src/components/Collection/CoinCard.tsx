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

export type CardProps = {
  title: string;
  imagePath: string;
  ruler: string;
  authority: string;
  mintLocation: string;
  mintDate: string;
  obverseDescription: string;
  reverseDescription: string;
  catalogueNumber: string;
};

export const CoinCard = ({
  title,
  imagePath,
  ruler,
  authority,
  mintLocation,
  mintDate,
  obverseDescription,
  reverseDescription,
  catalogueNumber,
}: CardProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 450, height: 225 }
    : { width: 300, height: 150 };

  const inspectDimensions = isBigScreen
    ? { width: 1000, height: 500 }
    : { width: 300, height: 150 };

  const [showModal, setShowModal] = useState(false);

  const inspectModal = (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <ModalContent>
        <img
          src={getFullImagePath(imagePath)}
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
        <CloseModalButton onClick={() => setShowModal(false)}>
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
      <CardWrapper onClick={() => setShowModal(true)}>
        <img
          src={imagePath}
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
