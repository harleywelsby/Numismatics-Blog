import { CurrencySystemMetadata } from '../components/Collection/DenominationModal/DenominationModal.types';

// Note Obols have been excluded, as the collection likely won't feature any small bronze denominations.
export const AtticStandardMetadata: CurrencySystemMetadata = {
  name: 'Attic Standard Drachmae',
  description:
    "The Attic Standard was the primary currency system in Ancient Greece. When Rome conquered the Greeks, they allowed them to continue using their existing standards (as long as they featured the Emperor's image).",
  denominations: [
    { name: 'Decadrachm', value: '10 Drachmae' },
    {
      name: 'Tetradrachm',
      value: '4 Drachmae',
    },
    { name: 'Didrachm', value: '2 Drachmae' },
    { name: 'Drachm', value: '1 Drachma' },
    { name: 'Hemidrachm', value: '1/2 Drachma' },
  ],
};

export const RomanImperialStandardMetadata: CurrencySystemMetadata = {
  name: 'Roman Imperial Coinage',
  description:
    "Roman coinage varied over time. For most of Rome's history, the Denarius was the primary coin used for trade and commerce. This was gradually replaced by the Antoninianus due to rising inflation.",
  denominations: [
    { name: 'Aureus', value: '25 Denarii' },
    { name: 'Antoninianus', value: '2 Denarii' },
    { name: 'Denarius', value: '1 Denarius' },
    { name: 'Sestertius', value: '1/4 Denarius' },
    { name: 'Dupondius', value: '1/8 Denarius' },
    { name: 'As', value: '1/16 Denarius' },
  ],
};

export const LateRomanStandardMetadata: CurrencySystemMetadata = {
  name: 'Late Roman Coinage',
  description:
    'After the reforms of Diocletian and Constantine, the various smaller denominations were replaced by a single type of small bronze coin, dubbed the "Nummus" or "Follis".',
  denominations: [
    { name: 'Solidus', value: '180 Nummi' },
    { name: 'Siliqua', value: '15 Nummi' },
    { name: 'Nummus', value: '1 Nummus' },
  ],
};

export const hasDenominationData = (denomination: string) => {
  return (
    AtticStandardMetadata.denominations.some((d) => d.name === denomination) ||
    RomanImperialStandardMetadata.denominations.some((d) => d.name === denomination) ||
    LateRomanStandardMetadata.denominations.some((d) => d.name === denomination)
  );
};
