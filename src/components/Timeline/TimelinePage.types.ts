import { CollectionItem } from '../Collection/Collection.types';

export type TimelineListItemContent = {
  date: string;
  description: string;
  collectionItem?: CollectionItem;
  isWorldHistory?: boolean; // If true, the item isn't necessarily related to Greek/Roman coins, and instead provided for context.
};
