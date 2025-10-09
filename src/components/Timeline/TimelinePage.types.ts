import { CollectionItem } from '../../shared/types/CollectionItem.types';

export enum TimelineItemCategory {
  All = 'All',
  AncientGreece = 'Ancient Greece',
  RomanRepublic = 'Roman Republic',
  RomanEmpire = 'Roman Empire',
  NearEast = 'Near East',
  Medieval = 'Medieval',
  World = 'World',
}

export type TimelineListItemContent = {
  date: string;
  description: string;
  categories: TimelineItemCategory[];
  collectionItem?: CollectionItem;
};
