import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
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
import { useMediaQuery } from 'react-responsive';
import { CollectionItem } from '../../../shared/types/CollectionItem.types';
import { LeaderData } from '../../../assets/LeaderData';
import { LeaderType } from '../Collection.types';

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
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSeeMore = () => {
    setShowModal(false);
    setSelectedRoute(Routes.CollectionItemDetails);
    navigate(Routes.CollectionItemDetails.replace(':itemId', `${coin.id}`));
  };

  const leader = LeaderData.find((l) => l.name === coin.leader)!;
  const leaderTitle = leader.type === LeaderType.Moneyer ? 'Moneyer' : 'Ruler';

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <ModalContent data-test-id={`coin-card-${coin.id}-modal-content`}>
        {isSmallScreen && <ModalHeader>{coin.title}</ModalHeader>}
        <ModalImageWrapper>
          <ModalImage src={getFullImagePath(coin.obverse.imagePath)} loading="lazy" />
          <ModalImage src={getFullImagePath(coin.reverse.imagePath)} loading="lazy" />
        </ModalImageWrapper>
        {!isSmallScreen && (
          <ModalTextWrapper>
            <ModalHeader>{coin.title}</ModalHeader>
            <ModalBodyWrapper>
              <ModalText>
                <b>{`${leaderTitle}: `}</b>
                {leader.url ? (
                  <a href={leader.url} target="_blank" rel="noopener noreferrer">
                    {leader.name}
                  </a>
                ) : (
                  leader.name
                )}
                {` ${leader.reign ? `(${leader.type === LeaderType.Ruler ? 'r. ' : ''}${leader.reign})` : ''}`}
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
                <Link to={Routes.MintMap + `?selected=${coin.mint.location}`}>
                  {coin.mint.location}
                </Link>
                {` (${coin.mint.date})`}
              </ModalText>
              {!ENABLE_SEE_MORE_OVERRIDE && (
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
              {ENABLE_SEE_MORE_OVERRIDE && (
                <SeeMoreButtonWrapper>
                  <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
                  <NewPill>New!</NewPill>
                </SeeMoreButtonWrapper>
              )}
            </ModalBodyWrapper>
          </ModalTextWrapper>
        )}
        {isSmallScreen && (
          <SeeMoreButtonWrapper>
            <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
            <NewPill>New!</NewPill>
          </SeeMoreButtonWrapper>
        )}
        <CloseModalButton
          onClick={handleModalClose}
          data-test-id={`coin-card-${coin.id}-modal-close`}
        >
          {/* @ts-expect-error Icon types are busted, but it works */}
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </CloseModalButton>
      </ModalContent>
    </Modal>
  );
};
