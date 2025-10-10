import { CollectionItem, LegendDetails } from '../../../shared/types/CollectionItem.types';
import { Leader } from '../../../shared/types/Leader.types';
import { CharacterDetails } from '../Collection.types';

export interface LegendData {
  legend: string;
  legendDetails?: LegendDetails;
  isSmallScreen: boolean;
}

export interface ObverseReverseData {
  coin: CollectionItem;
  isSmallScreen: boolean;
}

export interface RulerData {
  leader: Leader;
  showSeparator?: boolean;
}

export interface CharacterData {
  character?: CharacterDetails;
  isSmallScreen: boolean;
}

export interface PrimaryDetailsData {
  coin: CollectionItem;
  leader: Leader;
  isSmallScreen: boolean;
}
