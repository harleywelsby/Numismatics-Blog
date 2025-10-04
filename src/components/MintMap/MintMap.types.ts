import { LatLngExpression } from 'leaflet';
import { Authority, MintLocation } from '../Collection/Collection.types';

export type Mint = {
  name: MintLocation;
  position: LatLngExpression;
  authorities: Authority[];
  description: string;
};
