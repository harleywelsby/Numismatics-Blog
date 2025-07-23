import { CharacterDetails, RulerDetails } from '../components/Collection/Collection.types';

export const Rulers: RulerDetails[] = [
  {
    ruler: {
      name: 'Marcus Aurelius',
      reign: '161-180 AD',
    },
    imagePath: '/Images/Rulers/MarcusAurelius.webp',
    descriptionParagraphs: [
      'TODO: Description of Marcus Aurelius.',
      'He was a Roman Emperor from 161 to 180 AD. Known for his philosophical writings and leadership during the Antonine Plague.',
    ],
  },
];

export const Characters: CharacterDetails[] = [
  {
    name: 'Felicitas',
    descriptionParagraphs: [
      'Felicitas is the personification of good fortune and happiness in Roman mythology. She has four epithets, depending on the message the coin is trying to convey:',
    ],
    variants: [
      {
        name: 'Felicitas Augusta',
        description:
          '"Emperor\'s Happiness/Fortune", a personification of the happiness or good fortune of the emperor.',
      },
      {
        name: 'Felicitas Fausta',
        description: '"Favoured" or "Fortunate"',
      },
      {
        name: 'Felicitas Publica',
        description:
          '"Public Happiness", a personification of prosperity and happiness among the Roman people.',
      },
      {
        name: 'Felicitas Temporum',
        description:
          '"Happiness of the Times", a personification of the happiness experienced during prosperous periods.',
      },
    ],
  },
];
