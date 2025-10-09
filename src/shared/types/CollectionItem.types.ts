import { Authority } from './Authority.types';
import { CharacterName } from './Character.types';
import { LeaderName } from './Leader.types';
import { Mint } from './Mint.types';

export enum Denomination {
  Nummus = 'Nummus',
  Diobol = 'Diobol',
  As = 'As',
  Denarius = 'Denarius',
  Shilling = 'Shilling',
  Antoninianus = 'Antoninianus',
  Tetradrachm = 'Tetradrachm',
  Drachm = 'Drachm',
  Victoriatus = 'Victoriatus',
}

export enum Grade {
  Good = 1,
  VeryGood = 2,
  Fine = 3,
  VeryFine = 4,
  ExtremelyFine = 5,
  AsStruck = 6,
}

export enum Language {
  Latin = 'Latin',
  Greek = 'Greek',
  Pahlavi = 'Pahlavi',
}

export enum Theme {
  FelTempReparatio = 'Fel Temp Reparatio',
  GloriaExercitus = 'Gloria Exercitus',
  VotMvlt = 'VOT MVLT',
  Cornucopia = 'Cornucopia',
  CampGates = 'Camp Gates',
  Captives = 'Captives',
  TrophyOfArms = 'Trophy of Arms',
  Biga = 'Biga',
  Eagle = 'Eagle',
  FireAlter = 'Fire Altar',
}

export type CollectionItem = {
  id: number;
  grade: Grade;
  title: string;
  leader: LeaderName;
  authority: Authority;
  denomination: Denomination;
  mint: Mint;
  obverse: CoinFace;
  reverse: CoinFace;
  reference: Reference;
  characters?: CharacterName[];
  themes?: Theme[];
  provenance?: Provenance;
  moreDetails?: MoreDetails;
};

type CoinFace = {
  imagePath: string;
  description: string;
  legend?: string;
  legendDetails?: LegendDetails;
};

export type LegendDetails = {
  language: Language;
  original: string;
  english: string;
  description?: string; // Optional description for the legend.
  secondaryLegend?: string; // Optional secondary legend, for mint marks or bilingual legends.
  secondaryLegendDetails?: LegendDetails;
};

type Reference = {
  catalogueNumber: string;
  url?: string;
};

type MoreDetails = {
  descriptionParagraphs?: string[]; // Additional description for the details page.
  mentionedIn?: string[]; // Array of blog post IDs this coin features in.
};

type Provenance = {
  vendorOrOwner: string;
  event?: string;
  date?: Date;
  link?: string;
  history?: Provenance[];
};
