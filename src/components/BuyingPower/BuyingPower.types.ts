export type GoodsPrice = {
  name: string;
  amount?: string;
  image?: string;
  priceInDenarii: number;
  dateRange: GoodsDateRange;
};

export enum GoodsDateRange {
  EarlyImperial, // 1st Century - Severan Period, roughly
  Diocletian, // 284-305 AD (Diocletian's Edit on Maximum Prices)
}

export type CoinImageSet = {
  dateRange: GoodsDateRange;
  collectionItemIds: number[];
};
