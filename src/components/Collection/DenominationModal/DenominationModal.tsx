import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';

import {
  CloseModalButton,
  DenominationSection,
  DenominationText,
  Description,
  ItemWrapper,
  ModalContent,
  SectionHeaderText,
  Subtext,
  SectionHeaderSeparator,
  CoinImage,
} from './DenominationModal.styles';
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
