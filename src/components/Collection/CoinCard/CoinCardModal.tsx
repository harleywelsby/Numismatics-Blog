import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { CollectionItem } from '../Collection.types';
import { getFullImagePath } from '../../../shared/utils/imageHelper';
import { Routes } from '../../../shared/utils/router';
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
import { useContext } from 'react';
import { NavigationContext } from '../../NavigationContext/NavigationContext';

interface CoinCardModalProps {
  coin: CollectionItem;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  closeRerouteOverride?: string;
}

const ENABLE_SEE_MORE_OVERRIDE = true;

export const CoinCardModal = ({ coin, showModal, setShowModal }: CoinCardModalProps) => {
  const { setSelectedRoute } = useContext(NavigationContext);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSeeMore = () => {
    setShowModal(false);
    setSelectedRoute(Routes.CollectionItemDetails);
    navigate(Routes.CollectionItemDetails.replace(':itemId', `${coin.id}`));
  };

  const enableSeeMore = ENABLE_SEE_MORE_OVERRIDE || coin.enableSeeMore;

  const rulerTitle = coin.ruler.alternateTitle ?? `Ruler`;

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
              <b>{`${rulerTitle}: `}</b>
              {`${coin.ruler.name} (${coin.ruler.alternateTitle ? '' : 'r. '}${coin.ruler.reign})`}
            </ModalText>
            <ModalText>
              <b>Authority: </b>
              {coin.authority}
            </ModalText>
            <ModalText>
              <b>Denomination: </b>
              {coin.denomination}
            </ModalText>
            <ModalText>
              <b>Minted: </b>
              {`${coin.mint.location} (${coin.mint.date})`}
            </ModalText>
            {!enableSeeMore && (
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
            {enableSeeMore && (
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
