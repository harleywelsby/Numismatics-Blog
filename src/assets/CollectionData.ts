import { CollectionItem, Grade } from '../components/Collection/Collection.types';

export const CollectionData: CollectionItem[] = [
  // 1
  {
    id: 1,
    grade: Grade.Fine,
    title: 'Constantius II Nummus',
    ruler: {
      name: 'Constantius II',
      reign: '337-361 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Nicomedia',
      date: '348-350 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A001-Obverse.webp',
      description: 'Diademed bust of Constantius II facing right.',
      legend: 'DN CONSTANTIVS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Dominus Noster Constantinus Pius Felix Augustus',
        english: 'Our Lord Constantine, the Pious, the Happy, the Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A001-Reverse.webp',
      description: 'Soldier with spear lunging over barbarian on horseback.',
      legend: 'FEL TEMP REPARATIO',
      legendDetails: {
        language: 'latin',
        original: 'Felicium Temporum Reparatio',
        english: 'Restoration of Happy Times',
      },
    },
    reference: {
      catalogueNumber: 'RIC VIII #189',
    },
    characters: ['Fel Temp Reparatio'],
  },
  // 2
  {
    id: 2,
    grade: Grade.Good,
    title: 'Constans Nummus',
    ruler: {
      name: 'Constans',
      reign: '337-350 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Constantinople',
      date: '336-337 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A002-Obverse.webp',
      description: 'Diademed bust of Constans facing left.',
      legend: 'FL CONSTANS NOB CAES',
      legendDetails: {
        language: 'latin',
        original: 'Flavius Constans Nobilis Caesar',
        english: 'Flavius Constans, Noble Heir to the Throne',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A002-Reverse.webp',
      description:
        'Military standard flanked by two cuirassed soldiers with spears. "CONS" mint mark in exergue."',
      legend: 'GLORIA EXERCITVS',
      legendDetails: {
        language: 'latin',
        original: 'Gloria Exercitus',
        english: 'The Glory of the Army',
      },
    },
    reference: {
      catalogueNumber: 'RIC VII #140',
    },
    characters: ['Gloria Exercitus'],
  },
  // 3
  {
    id: 3,
    grade: Grade.VeryGood,
    title: 'Valentinian II Nummus',
    ruler: {
      name: 'Valentinian II',
      reign: '375-392 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Aquileia',
      date: '378-388 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A003-Obverse.webp',
      description: 'Diademed bust of Valentinian facing right.',
      legend: 'DN VALENTINIANVS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Dominus Noster Valentinianus Pius Felix Augustus',
        english: 'Our Lord Valentinian, the Pious, the Happy, the Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A003-Reverse.webp',
      description: 'Wreath containing text. "SMAQ" mint mark in exergue.',
      legend: 'VOT X MVLT XX',
      legendDetails: {
        language: 'latin',
        original: 'Votis Decennalibus Multis que Vicennalibus',
        english:
          "Vows to the Gods on the Tenth Anniversary of the Emperor's rule, that he will reach his twentieth anniversary.",
      },
    },
    reference: {
      catalogueNumber: 'RIC IX #19',
    },
    characters: ['VOT MVLT'],
  },
  // 4
  {
    id: 4,
    grade: Grade.ExtremelyFine,
    title: 'Constantine I Nummus',
    ruler: {
      name: 'Constantine I "The Great"',
      reign: '306-337 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Rome',
      date: '307-337 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A004-Obverse.webp',
      description: 'Diademed and cuirassed bust of Constantine facing right.',
      legend: 'CONSTANTINVS MAX AVG',
      legendDetails: {
        language: 'latin',
        original: 'Constantinus Maximus Augustus',
        english: 'Constantine, the Greatest Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A004-Reverse.webp',
      description:
        'Two military standards, flanked by a soldier on each side. Mint mark "RBP" in exergue.',
      legend: 'GLORIA EXERCITVS',
      legendDetails: {
        language: 'latin',
        original: 'Gloria Exercitus',
        english: 'The glory of the army',
      },
    },
    reference: {
      catalogueNumber: 'RIC VII #335',
    },
    characters: ['Gloria Exercitus'],
  },
  // 5
  {
    id: 5,
    grade: Grade.VeryFine,
    title: 'Alexander III Portrait Coin',
    ruler: {
      name: 'Alexander III "The Great"',
      reign: '336-323 BC',
    },
    authority: 'Kingdom of Macedon',
    denomination: 'Diobol',
    mint: {
      location: 'Kaunos, Karia',
      date: '300-201 BC',
    },
    obverse: {
      imagePath: '/Images/Collection/A005-Obverse.webp',
      description: 'Diademed bust of Alexander III "The Great"',
    },
    reverse: {
      imagePath: '/Images/Collection/A005-Reverse.webp',
      description:
        'Two cornucopiae bound together with fillet. Mint mark "K A" in fields, representing the city of Kaunos.',
    },
    reference: {
      catalogueNumber: 'SNG Helsinki I #76',
    },
    characters: ['Alexander III', 'Cornucopia'],
  },
  // 6
  {
    id: 6,
    grade: Grade.VeryFine,
    title: 'Septimius Severus Denarius',
    ruler: {
      name: 'Septimius Severus',
      reign: '193-211 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '197-198 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A006-Obverse.webp',
      description: 'Laureate bust of Septimius Severus facing right.',
      legend: 'L SEPT SEV PERT AVG IMP X',
      legendDetails: {
        language: 'latin',
        original: 'Lucius Septimius Severus Pertinax Augustus Imperator X',
        english: 'Emperor Lucius Septimius Severus Pertinax, Leader of the Army for the Tenth Year',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A006-Reverse.webp',
      description: 'Salus, seated left, feeding serpent on an altar from a patera.',
      legend: 'SALVTI AVGG',
      legendDetails: {
        language: 'latin',
        original: 'Salus Augustorum',
        english: 'To the Safety of the Two Emperors (Severus and his son, Caracalla)',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV #119A',
      url: 'https://numismatics.org/ocre/id/ric.4.ss.119A',
    },
    characters: ['Salus'],
  },
  // 7
  {
    id: 7,
    grade: Grade.VeryFine,
    title: 'Caracalla Denarius',
    ruler: {
      name: 'Caracalla',
      reign: '198-217 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '214 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A007-Obverse.webp',
      description: 'Laureate bust of Caracalla facing right.',
      legend: 'ANTONINVS PIVS AVG GERM',
      legendDetails: {
        language: 'latin',
        original: 'Antoninus Pius Augustus Germanicus',
        english:
          'Emperor Antoninus (Caracalla was a nickname, after the type of cloak he wore), the dutiful, conqueror of the Germans.',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A007-Reverse.webp',
      description: 'Apollo, shirtless, seated left, holding olive branch and leaning on lyre.',
      legend: 'PM TRP XVII COS IIII PP',
      legendDetails: {
        language: 'latin',
        original: 'Pontifex Maximus Tribunicia Potestas XVII Consul IIII Pater Patriae',
        english:
          'High Priest, holding the Tribunician Power for the 17th year, Consul for the 4th year, Father of the Fatherland',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV #238A',
      url: 'http://numismatics.org/ocre/id/ric.4.crl.238A',
    },
    characters: ['Apollo'],
  },
  // 8
  {
    id: 8,
    grade: Grade.VeryFine,
    title: 'Septimius Severus Denarius',
    ruler: {
      name: 'Septimius Severus',
      reign: '193-211 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '210 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A008-Obverse.webp',
      description: 'Laureate bust of Severus facing right.',
      legend: 'SEVERVS PIVS AVG',
      legendDetails: {
        language: 'latin',
        original: 'Severus Pius Augustus',
        english: 'Severus, the Pious Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A008-Reverse.webp',
      description:
        "Jupiter, naked, holding thunderbolt and sceptre. Two children flanking representing Severus' sons Caracalla and Geta. ",
      legend: 'PM TRP XVIII COS III PP',
      legendDetails: {
        language: 'latin',
        original: 'Pontifex Maximus Tribunicia Potestas XVIII Consul III Pater Patriae',
        english:
          'High Priest, holding the Tribunician Power for the 18th year, Consul for the third time, Father of the Fatherland',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV #233',
      url: 'https://numismatics.org/ocre/id/ric.4.ss.233',
    },
    characters: ['Jupiter', 'Caracalla & Geta'],
  },
  // 9
  {
    id: 9,
    grade: Grade.Good,
    title: 'Claudius As',
    ruler: {
      name: 'Claudius',
      reign: '41-50 AD',
    },
    authority: 'Roman Empire',
    denomination: 'As',
    mint: {
      location: 'Rome',
      date: '41-50 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A009-Obverse.webp',
      description: 'Bust of Claudius facing left.',
      legend: 'TI CLAVDIVS CAESAR AVG PM TRP IMP',
      legendDetails: {
        language: 'latin',
        original:
          'Tiberius Claudius Caesar Augustus Pontifex Maximus Tribunicia Potestas Imperator',
        english:
          'Emperor Tiberius Claudius Caesar, Head Priest, holding the Tribunician Power, Leader of the Army',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A009-Reverse.webp',
      description: 'Libertas, draped, holding pileus in right hand.',
      legend: 'LIBERTAS AVGVSTA SC',
      legendDetails: {
        language: 'latin',
        original: 'Libertas Augusta, Senatus Consultum',
        english: 'The Liberty and Freedom bestowed by the Emperor, by decree of the Roman Senate',
      },
    },
    reference: {
      catalogueNumber: 'RIC I #97',
    },
    characters: ['Libertas'],
  },
  // 10
  {
    id: 10,
    grade: Grade.Good,
    title: 'Valentinian I Nummus',
    ruler: {
      name: 'Valentinian I',
      reign: '364-375 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Siscia',
      date: '364-367 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A010-Obverse.webp',
      description: 'Diademed bust of Valentinian facing right.',
      legend: 'DN VALENTINIANVS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Dominus Noster Valentinianus Pius Felix Augustus',
        english: 'Our Lord Valentinian, the Dutiful and Happy Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A010-Reverse.webp',
      description:
        'Victory advancing left, holding wreath. "*A" mint mark left of Victory. "DΔSISC" mint mark in exergue.',
      legend: 'SECVRITAS REIPVBLICAE',
      legendDetails: {
        language: 'latin',
        original: 'Securitas Reipublicae',
        english: 'The Security of the Republic of Rome',
      },
    },
    reference: {
      catalogueNumber: 'RIC IX #7A',
    },
    characters: ['Victory'],
  },
  // 11
  {
    id: 11,
    grade: Grade.ExtremelyFine,
    title: 'Geta Denarius',
    ruler: {
      name: 'Septimius Geta',
      reign: '209-211 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '203-208 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A011-Obverse.webp',
      description: 'Bust of Geta facing right.',
      legend: 'P SEPTIMIVS GETA CAES',
      legendDetails: {
        language: 'latin',
        original: 'Publius Septimius Geta Caesar',
        english: 'Publius Septimius Geta, Heir to the Throne',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A011-Reverse.webp',
      description: 'Providentia, draped, standing left, holding wand over globe and sceptre.',
      legend: 'PROVID DEORVM',
      legendDetails: {
        language: 'latin',
        original: 'Providentia Deorum',
        english: 'The Providence of the Gods',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV.1 #51',
      url: 'http://numismatics.org/ocre/id/ric.4.ge.51',
    },
    characters: ['Providentia'],
    moreDetails: {
      mentionedIn: ['e3278fa9-5e60-4109-8643-18c36d559662'],
    },
  },
  // 12
  {
    id: 12,
    grade: Grade.Good,
    title: 'Constantine I Nummus',
    ruler: {
      name: 'Constantine I "The Great"',
      reign: '306-337 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Nicomedia',
      date: '324-329 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A012-Obverse.webp',
      description: 'Diademed bust of Constantine.',
      legend: 'CONSTANTIVS AVG',
      legendDetails: {
        language: 'latin',
        original: 'Constantinus Augustus',
        english: 'Emperor Constantine',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A012-Reverse.webp',
      description:
        'Military camp gates with 2 towers either side, and a star above. "NB" mint mark in exergue.',
      legend: 'PROVIDENTIA AVGG',
      legendDetails: {
        language: 'latin',
        original: 'Providentia Augustorum',
        english: 'The Providence of the two Emperors',
      },
    },
    reference: {
      catalogueNumber: 'RIC VII #90',
    },
    characters: ['Camp Gates'],
  },
  // 13
  {
    id: 13,
    grade: Grade.VeryFine,
    title: 'Julia Domna Denarius',
    ruler: {
      name: 'Caracalla',
      reign: '198-217 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '211-217 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A013-Obverse.webp',
      description: 'Bust of Julia Domna, draped, facing right.',
      legend: 'IVLIA PIA FELIX AVG',
      legendDetails: {
        language: 'latin',
        original: 'Julia Pia Felix Augusta',
        english: 'Julia, the Dutiful and Fortunate Empress',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A013-Reverse.webp',
      description: 'Vesta, standing left holding Palladium and sceptre.',
      legend: 'VESTA',
      legendDetails: {
        language: 'latin',
        original: 'Vesta',
        english: 'Vesta (Virgin Goddess of the Hearth, Home and Family)',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV #390',
      url: 'https://numismatics.org/ocre/id/ric.4.crl.390?lang=es/1000',
    },
    characters: ['Julia Domna', 'Vesta'],
  },
  // 14
  {
    id: 14,
    grade: Grade.VeryGood,
    title: 'William III Shilling',
    ruler: {
      name: 'William III',
      reign: '1689-1702 AD',
    },
    authority: 'United Kingdom',
    denomination: 'Shilling',
    mint: {
      location: 'England',
      date: '1696 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A014-Obverse.webp',
      description: 'Bust of William III facing right.',
      legend: 'GVLIELMVS III DEI GRA',
      legendDetails: {
        language: 'latin',
        original: 'Gulielmus III Dei Gratia',
        english: 'William III, by the Grace of God',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A014-Reverse.webp',
      description:
        'Crowned shields of each kingdom of the union (Britain, France and Ireland) around central Nassau Lion.',
      legend: 'MAG BR FRA ET HIB REX 1696',
      legendDetails: {
        language: 'latin',
        original: 'Magna Britannia, Franciae et Hiberniae Rex 1696',
        english: 'King of Britain, France and Ireland. Dated 1696 AD',
      },
    },
    reference: {
      catalogueNumber: 'KM #485.1',
    },
    characters: [],
  },
  // 15
  {
    id: 15,
    grade: Grade.Good,
    title: 'Valentinian I Nummus',
    ruler: {
      name: 'Valentinian I',
      reign: '364-375 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Siscia (2nd Officina)',
      date: '364-375 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A015-Obverse.webp',
      description: 'Diademed bust of Valentinian facing right.',
      legend: 'DN VALENTINIANVS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Dominus Noster Valentinianus Pius Felix Augustus',
        english: 'Our Lord Valentinian, the Dutiful and Happy Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A015-Reverse.webp',
      description:
        'Valentinian in military dress advancing right, holding labarum and dragging a captive. BSISC mint mark in exergue.',
      legend: 'GLORIA ROMANORVM',
      legendDetails: {
        language: 'latin',
        original: 'Gloria Romanorum',
        english: 'The Glory of the Romans',
      },
    },
    reference: {
      catalogueNumber: 'RIC IX #14A',
      url: 'https://numismatics.org/ocre/id/ric.9.sis.14A',
    },
    characters: [],
  },
  // 16
  {
    id: 16,
    grade: Grade.Good,
    title: 'Aurelian Antoninianus',
    ruler: {
      name: 'Aurelian',
      reign: '270-275 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Antoninianus',
    mint: {
      location: 'Rome',
      date: '270-275 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A016-Obverse.webp',
      description: 'Crowned Aurelian facing right.',
      legend: 'IMP CL DOM AVRELIANVS AVG',
      legendDetails: {
        language: 'latin',
        original: 'Imperator Caesar Lucius Domitius Aurelianus Augustus',
        english: 'Leader of the Army, Heir to the Throne, Emperor Lucius Domitius Aurelianus',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A016-Reverse.webp',
      description:
        'Securitas, standing with legs crossed, holding sceptre and leaning on column. "XI" (denomination) to right.',
      legend: 'SECURITAS AVG',
      legendDetails: {
        language: 'latin',
        original: 'Securitas Augusta',
        english: 'To The Security brought to Rome by the Emperor',
      },
    },
    reference: {
      catalogueNumber: 'RIC V #38',
    },
    characters: ['Securitas'],
  },
  // 17
  {
    id: 17,
    grade: Grade.AsStruck,
    title: 'Elagabalus Denarius',
    ruler: {
      name: 'Elagabalus',
      reign: '218-222 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '218-222 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A017-Obverse.webp',
      description: 'Laureate and cuirassed bust of Elagabalus facing right.',
      legend: 'IMP CAES ANTONINVS AVG',
      legendDetails: {
        language: 'latin',
        original: 'Imperator Caesar Antoninus Augustus',
        english:
          'Leader of the Army, Heir to the Throne, Emperor Antoninus (Elagabalus is a nickname, after the deity he worshipped)',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A017-Reverse.webp',
      description: 'Victory advancing right with wreath and trophy.',
      legend: 'VICTOR ANTONINI AVG',
      legendDetails: {
        language: 'latin',
        original: 'Victor Antonini Augusti',
        english: 'The Victory of Emperor Antoninus',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV.2 #153',
      url: 'http://numismatics.org/ocre/id/ric.4.el.153',
    },
    characters: ['Victory'],
  },
  // 18
  {
    id: 18,
    grade: Grade.VeryFine,
    title: 'Seleucus I Tetradrachm',
    ruler: {
      name: 'Seleucus I',
      reign: '305-281 BC',
    },
    authority: 'Seleucid Empire',
    denomination: 'Tetradrachm',
    mint: {
      location: 'Seleucia on the Tigris, Babylon',
      date: '300-295 BC',
    },
    obverse: {
      imagePath: '/Images/Collection/A018-Obverse.webp',
      description:
        'Posthumous issue of Alexander the Great types. Bust of Heracles facing right, wearing lion skin headdress.',
    },
    reverse: {
      imagePath: '/Images/Collection/A018-Reverse.webp',
      description:
        'Zeus, enthroned and holding a sceptre and eagle. Monogram mint mark in left field, and two test cuts in the exergue.',
      legend: 'ΣΕΛΕΥΚΟΥ ΒΑΣΙΛΕΩΣ',
      legendDetails: {
        language: 'greek',
        original: 'ΣΕΛΕΥΚΟΥ ΒΑΣΙΛΕΩΣ',
        english: 'Of King Seleucus',
      },
    },
    reference: {
      catalogueNumber: 'SC 117.4',
      url: 'http://numismatics.org/sco/id/sc.1.117.4b',
    },
    characters: ['Heracles', 'Zeus'],
  },
  // 19
  {
    id: 19,
    grade: Grade.VeryFine,
    title: 'Severus Alexander Denarius',
    ruler: {
      name: 'Severus Alexander',
      reign: '222-235 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '231 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A019-Obverse.webp',
      description: 'Laureate bust of Severus Alexander facing right.',
      legend: 'IMP SEV ALEXAND AVG',
      legendDetails: {
        language: 'latin',
        original: 'Imperator Severus Alexander Augustus',
        english: 'Leader of the Army, Emperor Severus Alexander',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A019-Reverse.webp',
      description: 'Fides seated left, holding vexillum and signum.',
      legend: 'FIDES MILITVM',
      legendDetails: {
        language: 'latin',
        original: 'Fides militum',
        english: 'The Loyalty of the Soldiers',
      },
    },
    reference: {
      catalogueNumber: 'RIC IV #193a',
      url: 'https://numismatics.org/ocre/id/ric.4.sa.193a',
    },
    characters: ['Fides'],
  },
  // 20
  {
    id: 20,
    grade: Grade.VeryFine,
    title: 'Trajan Denarius',
    ruler: {
      name: 'Trajan',
      reign: '98-117 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '116 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A020-Obverse.webp',
      description: 'Laureate bust of Trajan facing right.',
      legend: 'IMP CAES NER TRAIANO OPTIMO AVG GER DAC',
      legendDetails: {
        language: 'latin',
        original: 'Imperator Caesar Nerva Traiano Optimo Augustus Germanicus Dacicus',
        english:
          'Leader of the Army and Heir to the Throne, Nerva Trajan, the Best Emperor. Conqueror of the Germans, Conqueror of the Dacians',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A020-Reverse.webp',
      description: 'Genius, standing left holding patera and grain ears.',
      legend: 'PM TRP COS VI PP SPQR',
      legendDetails: {
        language: 'latin',
        original:
          'Pontifex Maximus Tribunicia Potestas Consul VI Pater Patriae Senatus Populusque Romanus',
        english:
          'High Priest, with Tribunician Power, Consul for the Sixth Time, Father of the Fatherland. From The Senate and People of Rome',
      },
    },
    reference: {
      catalogueNumber: 'RIC II #347',
      url: 'http://numismatics.org/ocre/id/ric.2.tr.347_denarius',
    },
    characters: ['Genius'],
  },
  // 21
  {
    id: 21,
    grade: Grade.VeryFine,
    title: 'Postumus Antonininanus',
    ruler: {
      name: 'Postumus',
      reign: '260-269 AD',
    },
    authority: 'Gallic Empire',
    denomination: 'Antoninianus',
    mint: {
      location: 'Colonia Agrippinensis',
      date: '261 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A021-Obverse.webp',
      description: 'Bust of Postumus facing right, wearing radiate crown.',
      legend: 'IMP C POSTVMVS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Imperator Cassianus Postumus Pius Felix Augustus',
        english: 'Leader of the Army, Cassianus Postumus, the Pious and Happy Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A021-Reverse.webp',
      description: 'Moneta, standing left holding scales and cornucopiae.',
      legend: 'MONETA AVG',
      legendDetails: {
        language: 'latin',
        original: 'Moneta Augusta',
        english: 'The Money of the Emperor',
      },
    },
    reference: {
      catalogueNumber: 'RIC V #75',
      url: 'http://numismatics.org/ocre/id/ric.5.post.75',
    },
    characters: ['Moneta'],
  },
  // 22
  {
    id: 22,
    grade: Grade.Good,
    title: 'Licinius II Nummus',
    ruler: {
      name: 'Licinius I',
      reign: '308-324 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: {
      location: 'Siscia',
      date: '320 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A022-Obverse.webp',
      description: 'Diademed bust of Licinius II facing left, holding victory palladium.',
      legend: 'LICINIVS IVN NOB CAES',
      legendDetails: {
        language: 'latin',
        original: 'Licinius Iuuentis Nobilis Caesar',
        english: 'Licinius, Junior and Noble Heir to the Throne',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A022-Reverse.webp',
      description: 'Two captives bound under a banner, reading "VOT X". Mint mark ΔSIS in exergue.',
      legend: 'VIRTVS EXERCIT',
      legendDetails: {
        language: 'latin',
        original: 'Virtus Exercitus',
        english: 'The Virtue of the Army',
      },
    },
    reference: {
      catalogueNumber: 'RIC VII #114',
    },
    characters: ['Captives'],
  },
  // 23
  {
    id: 23,
    grade: Grade.Good,
    title: 'Constans Nummus',
    ruler: {
      name: 'Constans',
      reign: '337-350 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Nummus',
    mint: { location: 'Thessalonika', date: '342-348 AD' },
    obverse: {
      imagePath: '/Images/Collection/A023-Obverse.webp',
      description: 'Diademed bust of Constans facing right.',
      legend: 'CONSTANS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Constans Pius Felix Augustus',
        english: 'Constans, the Pious and Happy Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A023-Reverse.webp',
      description: 'Two victories holding wreaths toward each other. Mint mark "TSE" in exergue.',
      legend: 'VICTORIAE DD AVGG Q NN',
      legendDetails: {
        language: 'latin',
        original: 'Victoriae Duorum Dominorum Augustorum Que Nostrorum',
        english: 'To The Victory of Our Two Emperors',
      },
    },
    reference: {
      catalogueNumber: 'RIC VIII #101',
    },
    characters: ['Victory'],
  },
  // 24
  {
    id: 24,
    grade: Grade.VeryFine,
    title: 'Gallienus Antoninianus',
    ruler: {
      name: 'Gallienus',
      reign: '253-268 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Antoninianus',
    mint: {
      location: 'Colonia Agrippinensis',
      date: '257-258 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A024-Obverse.webp',
      description: 'Bust of Gallienus facing right, wearing radiate crown.',
      legend: 'GALLIENVS PF AVG',
      legendDetails: {
        language: 'latin',
        original: 'Gallienus Pius Felix Augustus',
        english: 'Gallienus, the Pious and Happy Emperor',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A024-Reverse.webp',
      description: 'Two captives tied to a trophy of arms.',
      legend: 'GERMANICVS MAX V',
      legendDetails: {
        language: 'latin',
        original: 'Germanicus Maximus V',
        english: 'Greatest Conqueror of the Germans, for the fifth year.',
      },
    },
    reference: {
      catalogueNumber: 'RIC V #18F',
      url: 'http://numismatics.org/ocre/id/ric.5.gall(1).18f',
    },
    characters: ['Captives', 'Trophy of Arms'],
  },
  // 25
  {
    id: 25,
    grade: Grade.VeryFine,
    title: 'Marcus Aurelius Denarius',
    ruler: {
      name: 'Marcus Aurelius',
      reign: '161-180 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '168-169 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A025-Obverse.webp',
      description: 'Laureate bust of Marcus Aurelius facing right.',
      legend: 'M ANTONINVS AVG TRP XXIII',
      legendDetails: {
        language: 'latin',
        original: 'Marcus Antoninus Augustus Tribunicia Potestas XXIII',
        english:
          'Emperor Marcus Antoninus, Augustus, holding the Tribunician Power for the 23rd year',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A025-Reverse.webp',
      description:
        'Felicitas, draped, standing forward with head to left, holding short caduceus and long scepter.',
      legend: 'FELICITAS AVG COS III',
      legendDetails: {
        language: 'latin',
        original: 'Felicitas Augusti Consul III',
        english: 'To the happiness of the Emperor, Consul for the third time',
      },
    },
    reference: {
      catalogueNumber: 'RIC III #203',
      url: 'http://numismatics.org/ocre/id/ric.3.m_aur.203',
    },
    characters: ['Felicitas'],
    enableSeeMore: true,
  },
  // 26
  {
    id: 26,
    grade: Grade.VeryFine,
    title: 'Alexander the Great Drachm',
    ruler: {
      name: 'Antigonus I',
      reign: '306-301 BC',
    },
    authority: 'Macedonia',
    denomination: 'Drachm',
    mint: {
      location: 'Teos, Ionia',
      date: '310-301 BC',
    },
    obverse: {
      imagePath: '/Images/Collection/A026-Obverse.webp',
      description: 'Head of Heracles facing right, wearing lion skin headdress.',
    },
    reverse: {
      imagePath: '/Images/Collection/A026-Reverse.webp',
      description:
        'Zeus, enthroned and holding sceptre and eagle. Griffin mint mark in left field, with monogram of Π and Ι below.',
      legend: 'ΑΛΕΞΑΝΔΡΟΥ',
      legendDetails: {
        language: 'greek',
        original: 'ΑΛΕΞΑΝΔΡΟΥ',
        english: 'Of Alexander',
      },
    },
    reference: {
      catalogueNumber: 'Price #2279',
    },
    characters: ['Heracles', 'Zeus'],
  },
  // 27
  {
    id: 27,
    grade: Grade.VeryFine,
    title: 'Antoninus Pius Denarius',
    ruler: {
      name: 'Antoninus Pius',
      reign: '138-161 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '159-160 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A027-Obverse.webp',
      description: 'Laureate bust of Antoninus facing right.',
      legend: 'ANTONINVS AVG PIVS PP TRP XXIII',
      legendDetails: {
        language: 'latin',
        original: 'Antoninus Augustus Pius Pater Patriae Tribunicia Potestas XXIII',
        english:
          'Emperor Antoninus the Dutiful, Father of the Fatherland, holding the Tribunician Power for the 23rd year.',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A027-Reverse.webp',
      description: 'Fortuna, draped, standing right, holding rudder and cornucopiae.',
      legend: 'FORTVNA COS IIII',
      legendDetails: {
        language: 'latin',
        original: 'Fortuna Consul IIII',
        english: 'Fortune, Consul for the fourth year.',
      },
    },
    reference: {
      catalogueNumber: 'RIC III #300a',
      url: 'http://numismatics.org/ocre/id/ric.3.ant.300A',
    },
    characters: ['Fortuna'],
  },
  // 28
  {
    id: 28,
    grade: Grade.VeryFine,
    title: 'Roma/Biga Republican Denarius',
    ruler: {
      name: 'Pinarius Natta',
      reign: '155 BC',
      alternateTitle: 'Moneyer',
    },
    authority: 'Roman Republic',
    denomination: 'Denarius',
    mint: {
      location: 'Rome',
      date: '155 BC',
    },
    obverse: {
      imagePath: '/Images/Collection/A028-Obverse.webp',
      description: 'Helmeted head of Roma facing right.',
      legend: 'X',
      legendDetails: {
        language: 'latin',
        original: 'X',
        english: 'Ten, as in "Ten Asses" (the denomination of the coin)',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A028-Reverse.webp',
      description:
        'Victory driving a galloping biga (two-horse chariot) right, holding whip and reins.',
      legend: 'NAT(TA)',
      legendDetails: {
        language: 'latin',
        original: 'Natta',
        english:
          'Natta (the moneyer who issued the coin, with their last two letters as a monogram)',
        secondaryLegend: 'ROMA',
        secondaryLegendDetails: {
          language: 'latin',
          original: 'Roma',
          english: 'Rome',
        },
      },
    },
    reference: {
      catalogueNumber: 'RSC Pinaria #1',
    },
    characters: ['Roma', 'Victory', 'Biga'],
  },
  // 29
  {
    id: 29,
    grade: Grade.VeryFine,
    title: 'Philip I Antioch Tetradrachm',
    ruler: {
      name: 'Philip I "The Arab"',
      reign: '244-249 AD',
    },
    authority: 'Roman Empire',
    denomination: 'Tetradrachm',
    mint: {
      location: 'Rome',
      date: '248-249 AD',
    },
    obverse: {
      imagePath: '/Images/Collection/A029-Obverse.webp',
      description: 'Laureate, draped and cuirassed bust of Philip I facing right',
      legend: 'ΑΥΤΟΚ Κ Μ ΙΟΥΛΙ ΦΙΛΙΠΠΟС СΕΒ',
      legendDetails: {
        language: 'greek',
        original: 'Αυτοκρατορ Καιсαρ Μαρκο Ιουλιοс Φιλιπποс Сεβαсτοс',
        english: 'Leader of the Army, Heir to the Throne, Emperor Marcus Julius Philippus',
      },
    },
    reverse: {
      imagePath: '/Images/Collection/A029-Reverse.webp',
      description: 'Eagle standing left, wings spread, holding wreath in beak.',
      legend: 'ΔΗΜΑΡΧ ΕΞΟΥСΙΑС ΥΠΑ ΤΟ Δ',
      legendDetails: {
        language: 'greek',
        original: 'Δημαρχικηc Εξουсιαс Υπατοс Το Τεταρτο',
        english: 'Tribunician Power and Consul for the Fourth Time',
        secondaryLegend: 'ANTIOXIA SC',
        secondaryLegendDetails: {
          language: 'latin',
          original: 'Antiochia, Senatus Consultum',
          english: 'From the City of Antioch, by decree of the Senate',
        },
      },
    },
    reference: {
      catalogueNumber: 'Prieur #444',
      url: 'https://en.numista.com/catalogue/pieces74067.html',
    },
    characters: ['Philip I', 'Eagle'],
  },
];
