export type CoinSet = {
  name: string;
  description: string;
  category: string;
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
