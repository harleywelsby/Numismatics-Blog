import {
  CharacterDetails,
  CollectionItemV2,
  LegendDetails,
  RulerDetails,
} from '../Collection.types';

export interface LegendData {
  legend: string;
  legendDetails?: LegendDetails;
  isSmallScreen: boolean;
}

export interface ObverseReverseData {
  coin: CollectionItemV2;
  isSmallScreen: boolean;
}

export interface RulerData {
  coin: CollectionItemV2;
  rulerDetails: RulerDetails;
}

export interface CharacterData {
  character?: CharacterDetails;
  isSmallScreen: boolean;
}
