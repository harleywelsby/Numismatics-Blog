export type CoinSet = {
  name: string;
  descriptionParagraphs: string[];
  category: string;
  active: boolean;
  items: SetItem[];
};

export type SetItem = {
  name: string;
  secondLine?: string;
  completed: boolean;
  linkedCollectionItem?: LinkedCollectionItem;
  imageUrl?: string;
};

type LinkedCollectionItem = {
  id: number;
  face: 'obverse' | 'reverse';
};

export enum SetStatus {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Complete = 'Complete',
}

export type SingleSetItemProps = {
  setItem: SetItem;
};
