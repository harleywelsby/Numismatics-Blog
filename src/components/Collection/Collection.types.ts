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
};

export type CoinCardProps = {
  coin: CollectionItem;
  hideTitle?: boolean;
  sizeOverride?: { width: number; height: number };
};

export type AuthorityGroup = {
  name: string;
  includedAuthorities: string[];
};

export enum SortType {
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
