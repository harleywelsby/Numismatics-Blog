import { LatLngExpression } from 'leaflet';
import { Authority } from '../Collection/Collection.types';

export type Mint = {
  name: string;
  position: LatLngExpression;
  authorities: Authority[];
  description: string;
};
