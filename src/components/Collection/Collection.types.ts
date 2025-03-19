export type CollectionItem = {
  id: number;
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

export type AuthorityGroup = {
  name: string;
  includedAuthorities: string[];
};

export enum SortType {
  Best = 'Best',
  MintDateAsc = 'Mint Date (ascending)',
  MintDateDesc = 'Mint Date (descending)',
  Rulers = 'Rulers (alphabetical)',
}
