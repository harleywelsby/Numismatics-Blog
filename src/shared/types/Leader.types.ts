export enum LeaderName {
  ConstantiusII = 'Constantius II',
  Constans = 'Constans',
  ValentinianII = 'Valentinian II',
  ConstantineITheGreat = 'Constantine I "the Great"',
  AlexanderIIITheGreat = 'Alexander III "the Great"',
  SeptimiusSeverus = 'Septimius Severus',
  Caracalla = 'Caracalla',
  Claudius = 'Claudius',
  ValentinianI = 'Valentinian I',
  Geta = 'Septimius Geta',
  JuliaDomna = 'Julia Domna',
  WilliamIII = 'William III',
  Aurelian = 'Aurelian',
  Elagabalus = 'Elagabalus',
  SeleucusI = 'Seleucus I Nicator',
  SeverusAlexander = 'Severus Alexander',
  Trajan = 'Trajan',
  Postumus = 'Postumus',
  LiciniusI = 'Licinius I',
  Gallienus = 'Gallienus',
  MarcusAurelius = 'Marcus Aurelius',
  AntigonusI = 'Antigonus I Monophthalmos',
  AntoninusPius = 'Antoninus Pius',
  PinariusNatta = 'Pinarius Natta',
  PhilipTheArab = 'Philip I "the Arab"',
  Anonymous = 'Anonymous',
  TituriusSabinus = 'L. Titurius L.f. Sabinus',
  YazidI = "Yazid I ibn Mu'awiya",
  QuintusTitius = 'Quintus Titius',
}

export enum LeaderType {
  Ruler = 'Ruler',
  Moneyer = 'Moneyer',
}

export type Leader = {
  name: LeaderName;
  type: LeaderType;
  title?: string;
  url?: string;
  reign?: string;
  imagePath?: string;
  descriptionParagraphs?: string[];
};
