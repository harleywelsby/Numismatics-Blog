export enum SortType {
  Featured = 'Featured',
  Latest = 'Latest Additions',
  Best = 'Highest Grade',
  MintDateAsc = 'Mint Date (ascending)',
  MintDateDesc = 'Mint Date (descending)',
  Rulers = 'Rulers (alphabetical)',
}

export type CoinCardOptions = {
  hideTitle?: boolean;
  sizeOverride?: { width: number; height: number };
  noPadding?: boolean;
  modalRerouteOverride?: string;
  disableRedirect?: boolean;
};
