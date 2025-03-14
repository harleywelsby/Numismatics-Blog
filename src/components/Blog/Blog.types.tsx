export type BlogPostSummary = {
  postId: string;
  filePath: string;
  title: string;
  imagePath: string;
  imageAltText: string;
  imageCredit?: string | null;
};

export type BlogPostImage = {
  path: string;
  caption?: string;
};
