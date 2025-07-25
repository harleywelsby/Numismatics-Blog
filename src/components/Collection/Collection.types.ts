// TODO: Remove once the last of the V1 data is migrated.
export type CollectionItemV1 = {
  id: number;
  grade: Grade;
  title: string;
  imgPath: string;
  ruler: string;
  authority: string;
  mintLocation: string;
  mintDate: string;
  obverseDescription: string;
  reverseDescription: string;
  catalogueNumber: string;
  // Optional: Only if one exists.
  blogPostLink?: string;
  featuredRanking?: number;
  enableSeeMore?: boolean;
};

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
};

export type RulerDetails = {
  ruler: Ruler;
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
