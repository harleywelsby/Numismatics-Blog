import { CharacterDetails, CollectionItem, LegendDetails, RulerDetails } from '../Collection.types';

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
  coin: CollectionItem;
  rulerDetails: RulerDetails;
  showSeparator?: boolean;
}

export interface CharacterData {
  character?: CharacterDetails;
  isSmallScreen: boolean;
}

export interface PrimaryDetailsData {
  coin: CollectionItem;
  isSmallScreen: boolean;
}
