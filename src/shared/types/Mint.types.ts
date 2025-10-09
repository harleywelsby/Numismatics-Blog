export enum MintLocation {
  Rome = 'Rome',
  Antioch = 'Antioch',
  Teos = 'Teos, Ionia',
  ColoniaAgrippinensis = 'Colonia Agrippinensis',
  SeleuciaOnTheTigris = 'Seleucia on the Tigris',
  Kaunos = 'Kaunos, Karia',
  Nicomedia = 'Nicomedia',
  Aquileia = 'Aquileia',
  Thessalonika = 'Thessalonika',
  Siscia = 'Siscia',
  Constantinople = 'Constantinople',
  alBasra = 'al-Basra',
  England = 'England',
}

export type Mint = {
  location: MintLocation;
  date: string;
};
