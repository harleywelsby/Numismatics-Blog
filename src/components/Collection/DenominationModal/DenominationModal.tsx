import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import {
  CurrencySystemMetadata,
  Denomination,
  DenominationModalProps,
} from './DenominationModal.types';
import {
  AtticStandardMetadata,
  LateRomanStandardMetadata,
  RomanImperialStandardMetadata,
} from '../../../assets/DenominationData';
import styled, { css } from 'styled-components';

const GetCurrencySystem = (selectedDenomination: string): CurrencySystemMetadata | null => {
  if (AtticStandardMetadata.denominations.some((denom) => denom.name === selectedDenomination)) {
    return AtticStandardMetadata;
  } else if (
    RomanImperialStandardMetadata.denominations.some((denom) => denom.name === selectedDenomination)
  ) {
    return RomanImperialStandardMetadata;
  } else if (
    LateRomanStandardMetadata.denominations.some((denom) => denom.name === selectedDenomination)
  ) {
    return LateRomanStandardMetadata;
  }
  return null;
};

const DenominationItem = ({
  denomination,
  isSelected,
  isSmallScreen,
}: {
  denomination: Denomination;
  isSelected: boolean;
  isSmallScreen: boolean;
}) => {
  return (
    <ItemWrapper isSelected={isSelected}>
      <CoinImage
        src={denomination.imageOverride || `/Images/Denominations/${denomination.name}.webp`}
        alt={denomination.name}
        width={isSmallScreen ? '70px' : '150px'}
      />
      <DenominationText>{denomination.name}</DenominationText>
      <Subtext>{denomination.value}</Subtext>
    </ItemWrapper>
  );
};

export const DenominationModal = ({
  selectedCoin,
  showModal,
  setShowModal,
}: DenominationModalProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });
  const handleModalClose = () => {
    setShowModal(false);
  };

  const selectedDenomination = selectedCoin.denomination;
  const currencySystem = GetCurrencySystem(selectedDenomination);

  // Don't continue if we couldn't find a matching system
  // TODO: Make this more robust
  if (!currencySystem) {
    handleModalClose();
    return null;
  }

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <ModalContent data-test-id={`denomination-modal-content`}>
        <SectionHeaderText>{currencySystem.name}</SectionHeaderText>
        <SectionHeaderSeparator />
        {!isSmallScreen && <Description>{currencySystem.description}</Description>}
        <DenominationSection>
          {currencySystem?.denominations.map((denomination) => (
            <DenominationItem
              key={denomination.name}
              denomination={denomination}
              isSelected={denomination.name === selectedDenomination}
              isSmallScreen={isSmallScreen}
            />
          ))}
        </DenominationSection>
        <CloseModalButton onClick={handleModalClose} data-test-id={`denomination-modal-close`}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </CloseModalButton>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 1rem;

  background-color: var(--deep-black);
  opacity: 0.95;
  border-radius: 20px;

  width: 80%;

  @media (min-width: 60em) {
    width: 60%;
  }
`;

const CloseModalButton = styled.button`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  position: fixed;
  top: 0;
  right: 0;

  padding: 0.5rem;

  @media (min-width: 35em) {
    &:hover {
      filter: brightness(50%);
      transition: 0.5s;
    }
  }
`;

const DenominationSection = styled.div`
  padding-top: 2rem;
  gap: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 35em) {
    gap: 1rem;
    padding: 1rem;
    max-width: 80%;
  }
`;

const ItemWrapper = styled.div<{ isSelected?: boolean }>`
  border: 1px solid var(--scroll-track-grey);
  border-radius: 10px;
  align-items: center;
  padding: 0.4rem;

  ${(props) =>
    props.isSelected &&
    css`
      border-color: var(--title-orange);
      background-color: rgba(255, 165, 0, 0.2);
    `}
`;

const CoinImage = styled.img`
  justify-self: center;
  align-self: center;
  padding: 0.5rem;
`;

const DenominationText = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0;

  font-size: clamp(0.875rem, 1vw + 0.5rem, 1.2rem);
`;

const Subtext = styled.p`
  text-align: center;
  margin: 0;

  font-size: clamp(0.75rem, 1vw + 0.25rem, 1rem);
`;

const Description = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 2vw + 0.25rem, 1rem);
  padding: 0 1rem;

  @media (max-width: 35em) {
    margin: 0;
    padding: 1rem 0 0 0;
  }

  @media (min-width: 60em) {
    width: 80%;
  }

  @media (min-width: 100em) {
    width: 50%;
  }
`;

const SectionHeaderText = styled.h2<{ $noSpacing?: boolean }>`
  color: var(--title-orange);
  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(1.3rem, 2vw + 0.5rem, 2rem);
  text-align: center;

  margin: 1rem;
  padding: 0;

  ${(props) =>
    props.$noSpacing &&
    css`
      margin: 0;
    `}
`;

const SectionHeaderSeparator = styled.div`
  color: var(--title-orange);
  border-bottom: solid;
  min-width: 60%;
  justify-self: center;

  margin: 0;
  padding: 0;

  @media (min-width: 35em) {
    min-width: 40%;
    margin-bottom: 1rem;
  }
`;
