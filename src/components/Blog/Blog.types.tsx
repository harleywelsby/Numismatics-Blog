export type BlogPostSummary = {
  postId: string;
  filePath: string;
  title: string;
  previewSrc: SummaryThumbnail | LinkedCoin;
  labels: BlogPostLabel[];
};

export type SummaryThumbnail = {
  src: string;
  alt: string;
};

export type LinkedCoin = {
  id: number;
};

export type BlogPostImage = {
  path: string;
  caption?: string;
};

export enum BlogPostLabel {
  SeveranDynasty = 'Severan Dynasty',
  RomanEmpire = 'Roman Empire',
  RomanRepublic = 'Roman Republic',
  PunicWars = 'Punic Wars',
}
