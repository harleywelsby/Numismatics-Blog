import { useMediaQuery } from 'react-responsive';
import {
  CardInspectModal,
  CardText,
  CardThumbnail,
  CardWrapper,
  ModalContent,
} from './Collection.styles';
import { useState } from 'react';

export type CardProps = {
  title: string;
  imagePath: string;
};

export const CoinCard = ({ title, imagePath }: CardProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  const inspectDimensions = isBigScreen
    ? { width: 1000, height: 500 }
    : { width: 300, height: 150 };

  const [showModal, setShowModal] = useState(false);

  const inspectModal = (
    <CardInspectModal open={showModal} onClose={() => setShowModal(false)}>
      <ModalContent>
        <img src={imagePath} width={inspectDimensions.width} height={inspectDimensions.height} />
        <CardText>Hello world</CardText>
      </ModalContent>
    </CardInspectModal>
  );

  return (
    <>
      {showModal && inspectModal}
      <CardWrapper onClick={() => setShowModal(true)}>
        <CardThumbnail
          src={imagePath}
          width={thumbnailDimensions.width}
          height={thumbnailDimensions.height}
        />
        <CardText>{title}</CardText>
      </CardWrapper>
    </>
  );
};
