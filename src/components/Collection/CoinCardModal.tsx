import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import {
  ModalContent,
  ModalImage,
  ModalTextWrapper,
  ModalHeader,
  ModalBodyWrapper,
  ModalText,
  CloseModalButton,
} from './Collection.styles';
import { Routes } from '../../shared/utils/router';
import { CollectionItem } from './Collection.types';
import { useNavigate } from 'react-router-dom';

export interface CoinCardModalProps {
  coin: CollectionItem;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  closeRerouteOverride?: string;
}

export const CoinCardModal = ({
  coin,
  showModal,
  setShowModal,
  closeRerouteOverride,
}: CoinCardModalProps) => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
    navigate(closeRerouteOverride || Routes.Collection);
  };

  return (
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
};
