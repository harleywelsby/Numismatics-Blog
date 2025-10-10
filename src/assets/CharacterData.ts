import { CharacterDetails } from '../components/Collection/Collection.types';

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
  {
    name: 'Julia Domna',
    imagePath: '/Images/Characters/JuliaDomna.webp',
    descriptionParagraphs: [
      'Julia Domna was the wife of Emperor Septimius Severus (r. 193-211 AD), and mother of the later Emperors Caracalla and Geta. Domna was born in modern-day Syria to a noble Arab family of priests of the deity Elagabalus (not to be confused with Emperor Elagabalus, who was named after the deity). She married Severus in 187, who was then a provincial governor.',
      'Unlike any previous imperial wives, Domna accompanied Severus on military campaigns and even lodged with the soldiers in the camps. She was popular and well respected among the troops, eventually receiving the honorary title “Mother of the Invincible Camps”.',
      'On her husband’s death, Domna assumed the title “Julia Pia Felix Augusta”, or “Julia, Dutiful and Fortunate Empress”. It’s believed this was a strategic move to show that Julia had “absorbed” Severus’ traits and was continuing his work. Shortly afterward, her son Caracalla killed his younger brother Geta and became sole Emperor of Rome. Under Caracalla, Domna took on more administrative duties and often fulfilled many tasks of the Emperor on his behalf.',
    ],
  },
];
