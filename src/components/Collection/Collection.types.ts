export type CollectionItem = {
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
