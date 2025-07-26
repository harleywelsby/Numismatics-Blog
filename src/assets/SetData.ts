import { CoinSet } from '../components/Sets/Sets.Types';

export const SetData: CoinSet[] = [
  {
    name: 'The Julio-Claudian Dynasty',
    category: 'Rome',
    description:
      'This set aims to collect a portrait coin of each emperor from the first Roman dynasty and descendants of Caesar, the Julio-Claudians, who ruled Rome from 27 BC to 68 AD.',
    items: [
      {
        name: 'Augustus',
        secondLine: '27 BC - 14 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Augustus.webp',
      },
      {
        name: 'Tiberius',
        secondLine: '14-37 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Tiberius.webp',
      },
      {
        name: 'Caligula',
        secondLine: '37-41 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Caligula.webp',
      },
      {
        name: 'Claudius',
        secondLine: '41-54 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Claudius.webp',
      },
      {
        name: 'Nero',
        secondLine: '54-68 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Nero.webp',
      },
    ],
  },
  {
    name: 'The 5 Good Emperors',
    category: 'Rome',
    description:
      'This set aims to collect one coin of each of the "5 Good Emperors", who reigned from 96 to 180 AD.  These emperor\'s reigns are often considered to be the Golden Age of Rome. Each coin in this set will feature a portrait of one of the emperors, and the personification of a different Roman virtue on the reverse.',
    items: [
      {
        name: 'Nerva',
        secondLine: '96-98 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Nerva.webp',
      },
      {
        name: 'Trajan',
        secondLine: '98-117 AD',
        completed: true,
        linkedCollectionItem: {
          id: 20,
          face: 'obverse',
        },
      },
      {
        name: 'Hadrian',
        secondLine: '117-138 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Hadrian.webp',
      },
      {
        name: 'Antoninus Pius',
        secondLine: '138-161 AD',
        completed: true,
        linkedCollectionItem: {
          id: 27,
          face: 'obverse',
        },
      },
      {
        name: 'Marcus Aurelius',
        secondLine: '161-180 AD',
        completed: true,
        linkedCollectionItem: {
          id: 25,
          face: 'obverse',
        },
      },
    ],
  },
  {
    name: 'Severan Silver',
    category: 'Rome',
    description:
      'This set aims to collect a silver denomination portrait of every member of the Severan Dynasty, who ruled Rome from 193 to 235 AD. The Severans are known not only for their scandalous behaviour (Caracalla murdering his brother Geta, Elagabalus marrying a Vestal Virgin), but also for their extremely powerful women, such as Julia Domna and her sister Julia Maesa. Julia Domna was revered as the "Mother of the Invincible Camps", travelling with the soldiers on campain. When Caracalla was assassinated, Julia Maesa led a coup to bring her grandson Elagabalus to the throne.',
    items: [
      {
        name: 'Septimius Severus',
        secondLine: '193-211 AD',
        completed: true,
        linkedCollectionItem: {
          id: 8,
          face: 'obverse',
        },
      },
      {
        name: 'Julia Domna',
        completed: true,
        linkedCollectionItem: {
          id: 13,
          face: 'obverse',
        },
      },
      {
        name: 'Geta',
        secondLine: '209-211 AD',
        completed: true,
        linkedCollectionItem: {
          id: 11,
          face: 'obverse',
        },
      },
      {
        name: 'Caracalla',
        secondLine: '198-217 AD',
        completed: true,
        linkedCollectionItem: {
          id: 7,
          face: 'obverse',
        },
      },
      {
        name: 'Julia Maesa',
        completed: false,
        imageUrl: '/Images/Drawings/JuliaMaesa.webp',
      },
      {
        name: 'Julia Soaemias',
        completed: false,
        imageUrl: '/Images/Drawings/JuliaSoaemias.webp',
      },
      {
        name: 'Elagabalus',
        secondLine: '218-222 AD',
        completed: true,
        linkedCollectionItem: {
          id: 17,
          face: 'obverse',
        },
      },
      {
        name: 'Julia Mamaea',
        completed: false,
        imageUrl: '/Images/Drawings/JuliaMamaea.webp',
      },
      {
        name: 'Severus Alexander',
        secondLine: '222-235 AD',
        completed: true,
        linkedCollectionItem: {
          id: 19,
          face: 'obverse',
        },
      },
    ],
  },
  {
    name: 'The Crisis of the Third Century',
    category: 'Rome',
    description:
      'After the death of Severus Alexander in 235 AD, Rome nearly collapsed in what is known as the "Crisis of the Third Century". This time was a brutal span of civil wars, barbarian invasions, peasant rebellions, and political instability. This set aims to collect a portrait coin of every major figure in the Crisis.',
    items: [
      {
        name: 'Gallienus',
        completed: true,
        linkedCollectionItem: {
          id: 24,
          face: 'obverse',
        },
      },
      {
        name: 'Postumus',
        completed: true,
        linkedCollectionItem: {
          id: 21,
          face: 'obverse',
        },
      },
      {
        name: 'Claudius II',
        completed: false,
        imageUrl: '/Images/Drawings/ClaudiusII.webp',
      },
      {
        name: 'Aurelian',
        completed: true,
        linkedCollectionItem: {
          id: 16,
          face: 'obverse',
        },
      },
      {
        name: 'Diocletian',
        completed: false,
        imageUrl: '/Images/Drawings/Diocletian.webp',
      },
    ],
  },
  {
    name: 'The Constantinian Dynasty',
    category: 'Rome',
    description:
      'The Constantinian Dynasty ruled Rome from 305 to 363 AD, beginning with Constantine I "The Great" instilling Christianity as the official religion of Rome, and ending with his descendant Julian "The Apostate", who made efforts to revert the Empire to Paganism. This set aims to collect a portrait of each of the major figures of the dynasty.',
    items: [
      {
        name: 'Constantius I',
        secondLine: '305-306 AD',
        completed: false,
        imageUrl: '/Images/Drawings/ConstantiusChlorus.webp',
      },
      {
        name: 'Constantine I',
        secondLine: '306-337 AD',
        completed: true,
        linkedCollectionItem: {
          id: 4,
          face: 'obverse',
        },
      },
      {
        name: 'Crispus',
        completed: false,
        imageUrl: '/Images/Drawings/Crispus.webp',
      },
      {
        name: 'Constantine II',
        secondLine: '337-340 AD',
        completed: false,
        imageUrl: '/Images/Drawings/ConstantineII.webp',
      },
      {
        name: 'Constantius II',
        secondLine: '337-361 AD',
        completed: true,
        linkedCollectionItem: {
          id: 1,
          face: 'obverse',
        },
      },
      {
        name: 'Constans',
        secondLine: '337-350 AD',
        completed: true,
        linkedCollectionItem: {
          id: 23,
          face: 'obverse',
        },
      },
      {
        name: 'Julian',
        secondLine: '361-363 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Julian.webp',
      },
    ],
  },
  {
    name: 'Alexander and his Generals',
    category: 'Greek',
    description:
      "Alexander the Great was one of the greatest military leaders of all time. After his untimely death, his empire split between his generals, known as the Diadochi. These successors continued to strike coins in Alexander's name, in the famous Heracles/Zeus type. This set aims to collect a lifetime coin of Alexander the Great, and each of his successors.",
    items: [
      {
        name: 'Alexander III "The Great"',
        secondLine: 'Macedon, 336-323 BC',
        completed: false,
        imageUrl: '/Images/Drawings/AlexanderZeus.webp',
      },
      {
        name: 'Ptolemy I',
        secondLine: 'Egypt, 325-285 BC',
        completed: false,
        imageUrl: '/Images/Drawings/PtolemyI.webp',
      },
      {
        name: 'Antigonus I',
        secondLine: 'Antigonid, 306-301 BC',
        completed: true,
        linkedCollectionItem: {
          id: 26,
          face: 'obverse',
        },
      },
      {
        name: 'Seleucus I',
        secondLine: 'Seleucid, 305-281 BC',
        completed: true,
        linkedCollectionItem: {
          id: 18,
          face: 'obverse',
        },
      },
      {
        name: 'Cassander',
        secondLine: 'Macedonia, 305-297 BC',
        completed: false,
        imageUrl: '/Images/Drawings/Heracles.webp',
      },
      {
        name: 'Lysimachus',
        secondLine: 'Thrace, 306-281 BC',
        completed: false,
        imageUrl: '/Images/Drawings/Lysimachos.webp',
      },
    ],
  },
  {
    name: 'The Twelve Olympians',
    category: 'Greek',
    description:
      'This set aims to collect a depiction of each of the Twelve Olympian Gods. This includes both busts and full figures, on any form of ancient coinage.',
    items: [
      {
        name: 'Zeus',
        completed: true,
        linkedCollectionItem: {
          id: 26,
          face: 'reverse',
        },
      },
      {
        name: 'Poseidon',
        completed: false,
        imageUrl: '/Images/Drawings/Poseidon.webp',
      },
      {
        name: 'Hera',
        completed: false,
        imageUrl: '/Images/Drawings/Hera.webp',
      },
      {
        name: 'Demeter',
        completed: false,
        imageUrl: '/Images/Drawings/Demeter.webp',
      },
      {
        name: 'Aphrodite',
        completed: false,
        imageUrl: '/Images/Drawings/Aphrodite.webp',
      },
      {
        name: 'Athena',
        completed: false,
        imageUrl: '/Images/Drawings/Athena.webp',
      },
      {
        name: 'Artemis',
        completed: false,
        imageUrl: '/Images/Drawings/Artemis.webp',
      },
      {
        name: 'Apollo',
        completed: true,
        linkedCollectionItem: {
          id: 7,
          face: 'reverse',
        },
      },
      {
        name: 'Ares',
        completed: false,
        imageUrl: '/Images/Drawings/Ares.webp',
      },
      {
        name: 'Hephaestus',
        completed: false,
        imageUrl: '/Images/Drawings/Hephaestus.webp',
      },
      {
        name: 'Hermes',
        completed: false,
        imageUrl: '/Images/Drawings/Hermes.webp',
      },
      {
        name: 'Dionysus',
        completed: false,
        imageUrl: '/Images/Drawings/Dionysus.webp',
      },
    ],
  },
  {
    name: 'Kings of Persia',
    category: 'Near East',
    description:
      "During Rome's height, the many dynasties of Persia were an ever-present neighbour, and often rival. During this time, the region developed its own unique coinage standards and artistic styles. This set aims to collect a coin from each of the dynasties of Ancient Persia, from the Achaemenids to the Sassanids.",
    items: [
      {
        name: 'Achaemenid Empire',
        secondLine: '550-330 BC',
        completed: false,
        imageUrl: '/Images/Drawings/Achaemenid.webp',
      },
      {
        name: 'Seleucid Empire',
        secondLine: '312-63 BC',
        completed: true,
        linkedCollectionItem: {
          id: 18,
          face: 'obverse',
        },
      },
      {
        name: 'Parthian Empire',
        secondLine: '247 BC - 224 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Parthia.webp',
      },

      {
        name: 'Sasanian Empire',
        secondLine: '224-651 AD',
        completed: false,
        imageUrl: '/Images/Drawings/Sassania.webp',
      },
    ],
  },
];
