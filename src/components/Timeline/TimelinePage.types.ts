import { CollectionItem } from '../Collection/Collection.types';

export type TimelineListItemContent = {
  date: string;
  description: string;
  collectionItem?: CollectionItem;
};
