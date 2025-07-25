import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { CollectionItemV2 } from '../../Collection.types';
import { getFullImagePath } from '../../../../shared/utils/imageHelper';
import { Routes } from '../../../../shared/utils/router';
import {
  CloseModalButton,
  ModalBodyWrapper,
  ModalContent,
  ModalHeader,
  ModalImage,
  ModalImageWrapper,
  ModalText,
  ModalTextWrapper,
  NewPill,
  SeeMoreButton,
  SeeMoreButtonWrapper,
} from './CoinCard.styles';

interface CoinCardModalProps {
  coin: CollectionItemV2;
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

  const handleSeeMore = () => {
    setShowModal(false);
    window.history.replaceState(null, '', Routes.Collection);
    navigate(Routes.CollectionItemDetails.replace(':itemId', `${coin.id}`));
  };

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <ModalContent data-test-id={`coin-card-${coin.id}-modal-content`}>
        <ModalImageWrapper>
          <ModalImage src={getFullImagePath(coin.obverse.imagePath)} loading="lazy" />
          <ModalImage src={getFullImagePath(coin.reverse.imagePath)} loading="lazy" />
        </ModalImageWrapper>
        <ModalTextWrapper>
          <ModalHeader>{coin.title}</ModalHeader>
          <ModalBodyWrapper>
            <ModalText>
              <b>Ruler: </b>
              {`${coin.ruler.name} (r. ${coin.ruler.reign})`}
            </ModalText>
            <ModalText>
              <b>Authority: </b>
              {coin.authority}
            </ModalText>
            <ModalText>
              <b>Minted: </b>
              {`${coin.mint.location} (${coin.mint.date})`}
            </ModalText>
            {!coin.enableSeeMore && (
              <>
                <ModalText>
                  <b>Obv: </b>
                  {coin.obverse.description}
                </ModalText>
                <ModalText>
                  <b>Obverse Legend: </b>
                  {`"${coin.obverse.legend}"`}
                </ModalText>
                <ModalText>
                  <b>Rev: </b>
                  {coin.reverse.description}
                </ModalText>
                <ModalText>
                  <b>Reverse Legend: </b>
                  {`"${coin.reverse.legend}"`}
                </ModalText>
              </>
            )}
            <ModalText>
              <b>Ref: </b>
              <a href={coin.reference.url} target="_blank" rel="noopener noreferrer">
                {coin.reference.catalogueNumber}
              </a>
            </ModalText>
            {coin.enableSeeMore && (
              <SeeMoreButtonWrapper>
                <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
                <NewPill>New!</NewPill>
              </SeeMoreButtonWrapper>
            )}
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
