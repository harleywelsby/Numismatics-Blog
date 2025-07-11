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
  collectionId?: number;
  imageUrl: string;
};

export enum SetStatus {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Complete = 'Complete',
}
