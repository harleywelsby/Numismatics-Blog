export type CollectionItem = {
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

export type CoinCardProps = {
  coin: CollectionItem;
  hideTitle?: boolean;
  sizeOverride?: { width: number; height: number };
  noPadding?: boolean;
  modalRerouteOverride?: string;
  disableRedirect?: boolean;
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

export type CollectionItemV2 = {
  id: number;
  grade: Grade;
  title: string;
  imgPath: string;
  ruler: Ruler;
  authority: string;
  mint: Mint;
  obverse: CoinFace;
  reverse: CoinFace;
  reference: Reference;
  enableSeeMore?: boolean;
  moreDetails?: MoreDetails;
};

export type CoinFace = {
  description: string;
  legend: string;
  imagePath?: string;
};

export type Reference = {
  catalogueNumber: string;
  url: string;
};

export type Mint = {
  location: string;
  date: string;
};

export type MoreDetails = {
  description?: string; // Additional description for the details page.
  mentionedIn?: string[]; // Array of blog post links this coin features in.
};

export type Ruler = {
  name: string;
  reign: string;
};

export type CoinCardOptions = {
  hideTitle?: boolean;
  sizeOverride?: { width: number; height: number };
  noPadding?: boolean;
  modalRerouteOverride?: string;
  disableRedirect?: boolean;
};
