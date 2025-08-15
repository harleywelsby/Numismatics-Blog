import { AuthorityGroup } from '../components/Collection/Collection.types';
import { Mint } from '../components/MintMap/MintMap.types';

export const MintMapAuthorityGroups: AuthorityGroup[] = [
  {
    name: 'Ancient Greece',
    includedAuthorities: ['Kingdom of Macedon', 'Seleucid Empire', 'Macedonia'],
  },
  {
    name: 'Ancient Rome',
    includedAuthorities: ['Roman Republic', 'Roman Empire', 'Gallic Empire'],
  },
];

export const MintData: Mint[] = [
  {
    position: [41.891, 12.3047],
    name: 'Rome',
    description: 'The Mint of Rome',
  },
  {
    position: [36.293, 36.1615],
    name: 'Antioch',
    description: 'The Mint of Antioch',
  },
  {
    position: [38.18, 26.783],
    name: 'Teos',
    description: 'The Mint of Teos, Ionia',
  },
  {
    position: [50.9579, 6.9673],
    name: 'Colonia Agrippinensis',
    description: 'The Mint of Cologne',
  },
  {
    position: [33.172, 44.4328],
    name: 'Seleucia on the Tigris',
    description: 'The Mint of Seleucia, Babylon',
  },
  {
    position: [36.952, 28.581],
    name: 'Kaunos',
    description: 'The Mint of Kaunos, Karia',
  },
  {
    position: [40.6806, 29.9982],
    name: 'Nicomedia',
    description: 'The Mint of Nicomedia',
  },
  {
    position: [45.7624, 13.3445],
    name: 'Aquileia',
    description: 'The Mint of Aquileia',
  },
  {
    position: [40.6405, 22.9353],
    name: 'Thessalonika',
    description: 'The Mint of Thessalonika',
  },
  {
    position: [45.456, 16.5122],
    name: 'Siscia',
    description: 'The Mint of Siscia',
  },
  {
    position: [41.0066, 28.9759],
    name: 'Constantinople',
    description: 'The Mint of Constantinople',
  },
];
