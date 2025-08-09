import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';

import { CollectionItem } from '../Collection.types';
import {
  CloseModalButton,
  DenominationImage,
  DenominationSection,
  DenominationText,
  Description,
  ItemWrapper,
  ModalContent,
  SectionHeaderText,
  Subtext,
} from './DenominationModal.styles';
import { HeaderSeparator, HeaderText } from '../../../shared/styles/sharedStyles';
import { useMediaQuery } from 'react-responsive';
import { SectionHeaderSeparator, SectionSeparator } from '../CoinDetails/CoinDetails.styles';

interface DenominationModalProps {
  selectedCoin: CollectionItem;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

type Denomination = {
  name: string;
  value: string;
  imageOverride?: string;
};

type CurrencySystemMetadata = {
  name: string;
  description: string;
  denominations: Denomination[];
};

// Note Obols have been excluded, as the collection likely won't feature any small bronze denominations.
const AtticStandardMetadata: CurrencySystemMetadata = {
  name: 'Attic Standard',
  description:
    "The Attic Standard was the primary currency system in Ancient Greece. When Rome conquered the Greeks, they allowed them to continue using their existing standards (as long as they featured the Emperor's image).",
  denominations: [
    { name: 'Decadrachm', value: '10 Drachmae' },
    {
      name: 'Tetradrachm',
      value: '4 Drachmae',
      imageOverride: '/Images/Collection/A018-Obverse.webp',
    },
    { name: 'Didrachm', value: '2 Drachmae' },
    { name: 'Drachm', value: '1 Drachma', imageOverride: '/Images/Collection/A026-Obverse.webp' },
    { name: 'Hemidrachm', value: '1/2 Drachma' },
  ],
};

const RomanImperialStandardMetadata: CurrencySystemMetadata = {
  name: 'Roman Imperial Standard',
  description:
    "The Imperial Standard varied over time. For most of Rome's history, the Denarius was the primary coin used for trade and commerce. This was gradually replaced by the Antoninianus due to rising inflation.",
  denominations: [
    { name: 'Aureus', value: '25 Denarii' },
    { name: 'Antoninianus', value: '2 Denarii' },
    { name: 'Denarius', value: '1 Denarius' },
    { name: 'Sestertius', value: '1/4 Denarius' },
    { name: 'Dupondius', value: '1/8 Denarius' },
    { name: 'As', value: '1/16 Denarius' },
  ],
};

const LateRomanStandardMetadata: CurrencySystemMetadata = {
  name: 'Late Roman Standard',
  description:
    'After the reforms of Diocletian and Constantine, the various smaller denominations were replaced by a single type of small bronze coin, dubbed the "Nummus" or "Follis".',
  denominations: [
    { name: 'Solidus', value: '180 Nummi' },
    { name: 'Siliqua', value: '15 Nummi' },
    { name: 'Nummus', value: '1 Nummus' },
  ],
};

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
  isSmallScreen,
}: {
  denomination: Denomination;
  isSelected: boolean;
  isSmallScreen: boolean;
}) => {
  return (
    <ItemWrapper>
      <DenominationImage
        src={denomination.imageOverride || `/Images/Denominations/${denomination.name}.webp`}
        alt={denomination.name}
        width={isSmallScreen ? '100px' : '150px'}
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
        {!isSmallScreen && (
          <>
            <HeaderText>Ancient Coin Denominations</HeaderText>
            <HeaderSeparator $noSpacing={!isSmallScreen} />
            <Description>
              Ancient Greece and Rome used a variety of coin denominations throughout Antiquity.
              This guide <b>significantly</b> generalizes the complex, ever-changing monetary
              systems of these civilizations for the sake of simplicity.
            </Description>
            <Description>{currencySystem.description}</Description>
            <SectionSeparator />
          </>
        )}

        <SectionHeaderText>{currencySystem.name}</SectionHeaderText>
        <SectionHeaderSeparator />
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
