export type CoinSet = {
  name: string;
  description: string;
  items: SetItem[];
};

export type SetItem = {
  name: string;
  secondLine?: string;
  completed: boolean;
  collectionId?: number;
  imageUrl: string;
};
