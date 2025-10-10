export enum CharacterName {
  Felicitas = 'Felicitas',
  Salus = 'Salus',
  Apollo = 'Apollo',
  Jupiter = 'Jupiter',
  CaracallaAndGeta = 'Caracalla and Geta',
  Libertas = 'Libertas',
  Victory = 'Victory',
  Providentia = 'Providentia',
  JuliaDomna = 'Julia Domna',
  Vesta = 'Vesta',
  Securitas = 'Securitas',
  Heracles = 'Heracles',
  Zeus = 'Zeus',
  Fides = 'Fides',
  Genius = 'Genius',
  Moneta = 'Moneta',
  Fortuna = 'Fortuna',
  Roma = 'Roma',
  TitusTatius = 'Titus Tatius',
  Tarpeia = 'Tarpeia',
  KhosrauII = 'Khosrau II',
  Liber = 'Liber',
  Pegasus = 'Pegasus',
}

export type CharacterDetails = {
  name: string;
  imagePath?: string;
  descriptionParagraphs: string[];
  variants?: CharacterVariant[];
};

export type CharacterVariant = {
  name: string;
  description: string;
  imagePath?: string;
};
