import { CollectionItem } from '../../../shared/types/CollectionItem.types';

export interface DenominationModalProps {
  selectedCoin: CollectionItem;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export type Denomination = {
  name: string;
  value: string;
  imageOverride?: string;
};

export type CurrencySystemMetadata = {
  name: string;
  description: string;
  denominations: Denomination[];
};
