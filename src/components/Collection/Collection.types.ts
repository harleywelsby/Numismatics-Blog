export type AuthorityGroup = {
  name: string;
  includedAuthorities: string[];
};

export enum SortType {
  Featured = 'Featured',
  Latest = 'Latest Additions',
  Best = 'Highest Grade',
  MintDateAsc = 'Mint Date (ascending)',
  MintDateDesc = 'Mint Date (descending)',
  Rulers = 'Rulers (alphabetical)',
}

export enum Grade {
  Good = 1,
  VeryGood = 2,
  Fine = 3,
  VeryFine = 4,
  ExtremelyFine = 5,
  AsStruck = 6,
}

// Collection V2

export type CollectionItem = {
  id: number;
  grade: Grade;
  title: string;
  ruler: Ruler;
  authority: string;
  mint: Mint;
  obverse: CoinFace;
  reverse: CoinFace;
  reference: Reference;
  characters: string[];
  enableSeeMore?: boolean;
  moreDetails?: MoreDetails;
};

type CoinFace = {
  imagePath: string;
  description: string;
  legend?: string;
  legendDetails?: LegendDetails;
};

export type LegendDetails = {
  language: 'latin' | 'greek';
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

type Mint = {
  location: string;
  date: string;
};

type MoreDetails = {
  descriptionParagraphs?: string[]; // Additional description for the details page.
  mentionedIn?: string[]; // Array of blog post links this coin features in.
};

type Ruler = {
  name: string;
  reign: string;
  alternateTitle?: string; // Optional: for primary figures who aren't actually rulers, e.g., Republican moneyers.
};

export type RulerDetails = {
  ruler: Ruler;
  title: string;
  imagePath: string;
  descriptionParagraphs: string[];
};

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

export type CoinCardOptions = {
  hideTitle?: boolean;
  sizeOverride?: { width: number; height: number };
  noPadding?: boolean;
  modalRerouteOverride?: string;
  disableRedirect?: boolean;
};
