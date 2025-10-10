import { LatLngExpression } from 'leaflet';
import { Authority } from '../../shared/types/Authority.types';
import { MintLocation } from '../../shared/types/Mint.types';

export type Mint = {
  name: MintLocation;
  position: LatLngExpression;
  authorities: Authority[];
  description: string;
};

export type AuthorityGroup = {
  name: string;
  includedAuthorities: Authority[];
};
