import { useMediaQuery } from 'react-responsive';
import {
  CardText,
  CardWrapper,
  ModalBodyWrapper,
  ModalContent,
  ModalHeader,
  ModalText,
  ModalTextWrapper,
} from './Collection.styles';
import { useState } from 'react';
import { Modal } from '@mui/material';

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
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  const inspectDimensions = isBigScreen
    ? { width: 1000, height: 500 }
    : { width: 300, height: 150 };

  const [showModal, setShowModal] = useState(false);

  const inspectModal = (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <ModalContent>
        <img src={imagePath} width={inspectDimensions.width} height={inspectDimensions.height} />
        <ModalTextWrapper>
          <ModalHeader>{title}</ModalHeader>
          <ModalBodyWrapper>
            <ModalText>
              <b>Ruler: </b>
              {ruler}
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
      </ModalContent>
    </Modal>
  );

  // Include some more info when not in the inspect modal.
  const expandedTitle = `${authority} | ${title} (${mintDate})`;

  return (
    <>
      {showModal && inspectModal}
      <CardWrapper onClick={() => setShowModal(true)}>
        <img
          src={imagePath}
          alt={expandedTitle}
          width={thumbnailDimensions.width}
          height={thumbnailDimensions.height}
        />
        <CardText>{expandedTitle}</CardText>
      </CardWrapper>
    </>
  );
};
