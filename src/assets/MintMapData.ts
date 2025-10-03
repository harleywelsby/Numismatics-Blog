import { Authority, AuthorityGroup } from '../components/Collection/Collection.types';
import { Mint } from '../components/MintMap/MintMap.types';

export const MintMapAuthorityGroups: AuthorityGroup[] = [
  {
    name: 'Ancient Greece',
    includedAuthorities: [Authority.Macedonia, Authority.SeleucidEmpire],
  },
  {
    name: 'Ancient Rome',
    includedAuthorities: [Authority.RomanRepublic, Authority.RomanEmpire, Authority.GallicEmpire],
  },
];

export const MintData: Mint[] = [
  {
    position: [41.891, 12.3047],
    name: 'Rome',
    authorities: [Authority.RomanRepublic, Authority.RomanEmpire],
    description:
      "The Mint of Rome was the backbone of the Roman's monetary system. It was the primary mint of the Roman Republic and Empire for most of their history, and was the primary source of Romanized types like the Denarius, As or Sestertius",
  },
  {
    position: [36.293, 36.1615],
    name: 'Antioch',
    authorities: [Authority.SeleucidEmpire, Authority.RomanEmpire],
    description:
      "Antioch was founded by Seleucus I Nicator in 300 BC by handing an Eagle a piece of sacrificial meat, and settling where it landed. It served as the capital of the Seleucid Empire, and went on to become Rome's third largest city.",
  },
  {
    position: [38.18, 26.783],
    name: 'Teos',
    authorities: [Authority.Macedonia],
    description:
      'Teos was an ancient Greek city, said to be founded by an early Greek tribe before 1000 BC. The city exchanged hands between the Greeks and Persians, before being conquered by Alexander the Great and ruled by his successors.',
  },
  {
    position: [50.9579, 6.9673],
    name: 'Colonia Agrippinensis',
    authorities: [Authority.GallicEmpire, Authority.RomanEmpire],
    description:
      'Colonia Agrippinensis (modern day Cologne) was one of the most important cities of the Roman Empire. Around 260 AD during the Crisis of the Third Century, the usurper Postumus claimed himself Emperor in Gaul, using Colonia Agrippinensis as his capital.',
  },
  {
    position: [33.172, 44.4328],
    name: 'Seleucia on the Tigris',
    authorities: [Authority.SeleucidEmpire],
    description: 'The Mint of Seleucia, Babylon',
  },
  {
    position: [36.952, 28.581],
    name: 'Kaunos',
    authorities: [Authority.Macedonia],
    description: 'The Mint of Kaunos, Karia',
  },
  {
    position: [40.6806, 29.9982],
    name: 'Nicomedia',
    authorities: [Authority.RomanEmpire],
    description: 'The Mint of Nicomedia',
  },
  {
    position: [45.7624, 13.3445],
    name: 'Aquileia',
    authorities: [Authority.RomanEmpire],
    description: 'The Mint of Aquileia',
  },
  {
    position: [40.6405, 22.9353],
    name: 'Thessalonika',
    authorities: [Authority.RomanEmpire],
    description: 'The Mint of Thessalonika',
  },
  {
    position: [45.456, 16.5122],
    name: 'Siscia',
    authorities: [Authority.RomanEmpire],
    description: 'The Mint of Siscia',
  },
  {
    position: [41.0066, 28.9759],
    name: 'Constantinople',
    authorities: [Authority.RomanEmpire],
    description: 'The Mint of Constantinople',
  },
  {
    position: [30.5454360924888, 47.95200036149205],
    name: 'al-Basra',
    authorities: [Authority.UmayyadCaliphate],
    description: 'The Mint of al-Basra',
  },
];
