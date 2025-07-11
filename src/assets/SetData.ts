import { CoinSet } from '../components/Sets/Sets.Types';

export const SetData: CoinSet[] = [
  {
    name: 'The Julio-Claudian Dynasty',
    category: 'Rome',
    description:
      'This set aims to collect a portrait coin of each emperor from the first Roman dynasty, the Julio-Claudians, who ruled Rome from 27 BC to 68 AD.',
    items: [
      {
        name: 'Augustus',
        secondLine: '27 BC - 14 AD',
        completed: false,
        imageUrl: '/Images/Sets/JulioClaudians/Augustus.webp',
      },
      {
        name: 'Tiberius',
        secondLine: '14-37 AD',
        completed: false,
        imageUrl: '/Images/Sets/JulioClaudians/Tiberius.webp',
      },
      {
        name: 'Caligula',
        secondLine: '37-41 AD',
        completed: false,
        imageUrl: '/Images/Sets/JulioClaudians/Caligula.webp',
      },
      {
        name: 'Claudius',
        secondLine: '41-54 AD',
        completed: false,
        imageUrl: '/Images/Sets/JulioClaudians/Claudius.webp',
      },
      {
        name: 'Nero',
        secondLine: '54-68 AD',
        completed: false,
        imageUrl: '/Images/Sets/JulioClaudians/Nero.webp',
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
        imageUrl: '/Images/Sets/5GoodEmperors/Nerva.webp',
      },
      {
        name: 'Trajan',
        secondLine: '98-117 AD',
        completed: true,
        collectionId: 20,
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
        completed: true,
        collectionId: 27,
        imageUrl: '/Images/Sets/5GoodEmperors/A027-Antoninus.webp',
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
  {
    name: 'Severan Silver',
    category: 'Rome',
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
    name: 'The Crisis of the Third Century',
    category: 'Rome',
    description:
      'After the death of Severus Alexander in 235 AD, Rome nearly collapsed in what is known as the "Crisis of the Third Century". This time was a brutal span of civil wars, barbarian invasions, peasant rebellions, and political instability. This set aims to collect a portrait coin of every major figure in the Crisis.',
    items: [
      {
        name: 'Gallienus',
        completed: true,
        collectionId: 24,
        imageUrl: '/Images/Sets/ThirdCenturyCrisis/A024-Gallienus.webp',
      },
      {
        name: 'Postumus',
        completed: true,
        collectionId: 21,
        imageUrl: '/Images/Sets/ThirdCenturyCrisis/PostumusAnt.webp',
      },
      {
        name: 'Claudius II',
        completed: false,
        imageUrl: '/Images/Sets/ThirdCenturyCrisis/ClaudiusII.webp',
      },
      {
        name: 'Aurelian',
        completed: true,
        collectionId: 16,
        imageUrl: '/Images/Sets/ThirdCenturyCrisis/AurelianAntoninianus.webp',
      },
      {
        name: 'Diocletian',
        completed: false,
        imageUrl: '/Images/Sets/ThirdCenturyCrisis/Diocletian.webp',
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
        imageUrl: '/Images/Sets/Constantinians/ConstantiusChlorus.webp',
      },
      {
        name: 'Constantine I',
        secondLine: '306-337 AD',
        completed: true,
        collectionId: 4,
        imageUrl: '/Images/Sets/Constantinians/A004-ConstantineTheGreat.webp',
      },
      {
        name: 'Crispus',
        completed: false,
        imageUrl: '/Images/Sets/Constantinians/Crispus.webp',
      },
      {
        name: 'Constantine II',
        secondLine: '337-340 AD',
        completed: false,
        imageUrl: '/Images/Sets/Constantinians/ConstantineII.webp',
      },
      {
        name: 'Constantius II',
        secondLine: '337-361 AD',
        completed: true,
        collectionId: 1,
        imageUrl: '/Images/Sets/Constantinians/A001-ConstantiusNummus.webp',
      },
      {
        name: 'Constans',
        secondLine: '337-350 AD',
        completed: true,
        collectionId: 23,
        imageUrl: '/Images/Sets/Constantinians/A023-Constans.webp',
      },
      {
        name: 'Julian',
        secondLine: '361-363 AD',
        completed: false,
        imageUrl: '/Images/Sets/Constantinians/Julian.webp',
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
        imageUrl: '/Images/Sets/SuccessorsOfAlexander/AlexanderZeus.webp',
      },
      {
        name: 'Ptolemy I',
        secondLine: 'Egypt, 325-285 BC',
        completed: false,
        imageUrl: '/Images/Sets/SuccessorsOfAlexander/PtolemyI.webp',
      },
      {
        name: 'Antigonus I',
        secondLine: 'Antigonid, 306-301 BC',
        completed: true,
        collectionId: 26,
        imageUrl: '/Images/Sets/SuccessorsOfAlexander/A026-Antigonus.webp',
      },
      {
        name: 'Seleucus I',
        secondLine: 'Seleucid, 305-281 BC',
        completed: true,
        collectionId: 18,
        imageUrl: '/Images/Sets/SuccessorsOfAlexander/SeleucusI.webp',
      },
      {
        name: 'Cassander',
        secondLine: 'Macedonia, 305-297 BC',
        completed: false,
        imageUrl: '/Images/Sets/SuccessorsOfAlexander/Heracles.webp',
      },
      {
        name: 'Lysimachus',
        secondLine: 'Thrace, 306-281 BC',
        completed: false,
        imageUrl: '/Images/Sets/SuccessorsOfAlexander/Lysimachos.webp',
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
        collectionId: 26,
        imageUrl: '/Images/Sets/TwelveOlympians/A026-Antigonus.webp',
      },
      {
        name: 'Poseidon',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Poseidon.webp',
      },
      {
        name: 'Hera',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Hera.webp',
      },
      {
        name: 'Demeter',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Demeter.webp',
      },
      {
        name: 'Aphrodite',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Aphrodite.webp',
      },
      {
        name: 'Athena',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Athena.webp',
      },
      {
        name: 'Artemis',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Artemis.webp',
      },
      {
        name: 'Apollo',
        completed: true,
        collectionId: 7,
        imageUrl: '/Images/Sets/TwelveOlympians/A007-CaracallaV2.webp',
      },
      {
        name: 'Ares',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Ares.webp',
      },
      {
        name: 'Hephaestus',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Hephaestus.webp',
      },
      {
        name: 'Hermes',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Hermes.webp',
      },
      {
        name: 'Dionysus',
        completed: false,
        imageUrl: '/Images/Sets/TwelveOlympians/Dionysus.webp',
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
        imageUrl: '/Images/Sets/AncientPersia/Achaemenid.webp',
      },
      {
        name: 'Seleucid Empire',
        secondLine: '312-63 BC',
        completed: true,
        collectionId: 18,
        imageUrl: '/Images/Sets/AncientPersia/SeleucusI.webp',
      },
      {
        name: 'Parthian Empire',
        secondLine: '247 BC - 224 AD',
        completed: false,
        imageUrl: '/Images/Sets/AncientPersia/Parthia.webp',
      },

      {
        name: 'Sasanian Empire',
        secondLine: '224-651 AD',
        completed: false,
        imageUrl: '/Images/Sets/AncientPersia/Sassania.webp',
      },
    ],
  },
];
