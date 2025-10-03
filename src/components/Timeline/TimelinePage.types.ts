import { CollectionItem } from '../Collection/Collection.types';

export enum TimelineItemCategory {
  All = 'All',
  AncientGreece = 'Ancient Greece',
  RomanRepublic = 'Roman Republic',
  RomanEmpire = 'Roman Empire',
  World = 'World',
}

export type TimelineListItemContent = {
  date: string;
  description: string;
  categories: TimelineItemCategory[];
  collectionItem?: CollectionItem;
};
