import { CoinSet } from '../components/Sets/Sets.Types';

export const SetData: CoinSet[] = [
  {
    name: 'Severan Silver',
    description:
      'This set aims to collect a silver denomination portrait of every member of the Severan Dynasty, who ruled Rome from 193 to 235 AD.',
    items: [
      {
        name: 'Septimius Severus',
        secondLine: '193-211 AD',
        completed: true,
        collectionId: 8,
        imageUrl: '/Images/Sets/SeveranSilver/A008-SeptimiusSeverusV2.webp',
      },
      {
        name: 'Julia Domna',
        completed: true,
        collectionId: 13,
        imageUrl: '/Images/Sets/SeveranSilver/A013-JuliaDomnaV2.webp',
      },
      {
        name: 'Geta',
        secondLine: '209-211 AD',
        completed: true,
        collectionId: 11,
        imageUrl: '/Images/Sets/SeveranSilver/A011-GetaV2.webp',
      },
      {
        name: 'Caracalla',
        secondLine: '198-217 AD',
        completed: true,
        collectionId: 7,
        imageUrl: '/Images/Sets/SeveranSilver/A007-CaracallaV2.webp',
      },
      {
        name: 'Julia Maesa',
        completed: false,
        imageUrl: '/Images/Sets/SeveranSilver/JuliaMaesa.webp',
      },
      {
        name: 'Julia Soaemias',
        completed: false,
        imageUrl: '/Images/Sets/SeveranSilver/JuliaSoaemias.webp',
      },
      {
        name: 'Elagabalus',
        secondLine: '218-222 AD',
        completed: true,
        collectionId: 17,
        imageUrl: '/Images/Sets/SeveranSilver/A017-ElagabalusV2.webp',
      },
      {
        name: 'Julia Mamaea',
        completed: false,
        imageUrl: '/Images/Sets/SeveranSilver/JuliaMamaea.webp',
      },
      {
        name: 'Severus Alexander',
        secondLine: '222-235 AD',
        completed: true,
        collectionId: 19,
        imageUrl: '/Images/Sets/SeveranSilver/A019-SevAlexander.webp',
      },
    ],
  },
  {
    name: 'The 5 Good Emperors',
    description:
      'This set aims to collect one coin of each of the "5 Good Emperors", who reigned from 96 to 180 AD.  These emperor\'s reigns are often considered to be the Golden Age of Rome. Each coin in this set will feature a portrait of one of the emperors, and the personification of a different Roman virtue on the reverse.',
    items: [
      {
        name: 'Nerva',
        secondLine: '96-98 AD',
        completed: false,
        imageUrl: '/Images/Sets/5GoodEmperors/Nerva.webp',
      },
      {
        name: 'Trajan',
        secondLine: '98-117 AD',
        completed: true,
        collectionId: 19,
        imageUrl: '/Images/Sets/5GoodEmperors/TrajanDenarius.webp',
      },
      {
        name: 'Hadrian',
        secondLine: '117-138 AD',
        completed: false,
        imageUrl: '/Images/Sets/5GoodEmperors/Hadrian.webp',
      },
      {
        name: 'Antoninus Pius',
        secondLine: '138-161 AD',
        completed: false,
        imageUrl: '/Images/Sets/5GoodEmperors/AntoninusPius.webp',
      },
      {
        name: 'Marcus Aurelius',
        secondLine: '161-180 AD',
        completed: true,
        collectionId: 25,
        imageUrl: '/Images/Sets/5GoodEmperors/A025-MarcusAurelius.webp',
      },
    ],
  },
  //   {
  //     name: 'The Constantinian Dynasty',
  //     description: '',
  //     items: [],
  //   },
  //   {
  //     name: 'The Successors of Alexander',
  //     description: '',
  //     items: [],
  //   },
  //   {
  //     name: 'The Crisis of the Third Century',
  //     description: '',
  //     items: [],
  //   },
];
