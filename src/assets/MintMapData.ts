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
      "Antioch was founded by Seleucus I Nicator in 300 BC by handing an Eagle a piece of sacrificial meat, and settling where it landed. It served as the second capital of the Seleucid Empire, and went on to become Rome's third largest city.",
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
    description:
      'Founded by Seleucus I Nicator in 305 BC as the first capital of the Seleucid Empire, Seleucia was a major city within present-day Baghdad. It came under Parthian rule in 141 BC, and was claimed to reach a population of 600,000. In 165 AD, the city was destroyed by the Roman general Avidus Cassius.',
  },
  {
    position: [36.952, 28.581],
    name: 'Kaunos',
    authorities: [Authority.Macedonia],
    description:
      'Kaunos was an important sea port, possibly dating back to the 10th century BC. According to Greek myth, the city was founded by King Kaunos, a grandson of Apollo.',
  },
  {
    position: [40.6806, 29.9982],
    name: 'Nicomedia',
    authorities: [Authority.RomanEmpire],
    description:
      "Founded under the name Astacus in 712-711 BC as a Greek colony, the city was destroyed by Alexander the Great's general Lysimachus, and rebuilt as Nicomedia in 264 BC. The city thrived and later became the capital of the Roman province Bithynia. During the Tetrarchy, the city served as the eastern capital of the Roman Empire (286-330 AD).",
  },
  {
    position: [45.7624, 13.3445],
    name: 'Aquileia',
    authorities: [Authority.RomanEmpire],
    description:
      'Founded as a Roman Republican colony in 180-181 BC, Aquileia was a strategic frontier fortress intended to protect the Veneti people, who were allies of Rome during the invasion of Hannibal in the Second Punic War. In the late Empire, an Imperial Palace was constructed at Aquileia which the Emperors would frequent.',
  },
  {
    position: [40.6405, 22.9353],
    name: 'Thessalonika',
    authorities: [Authority.RomanEmpire],
    description:
      "Alexander the Great successor King Cassander of Macedon founded Thessalonika in 315 BC, naming it after his wife, Alexander's half-sister Thessalonike. In 148 BC, the city was made the capital of the Roman province of Macedonia, and was an important trade hub between Rome and Byzantium.",
  },
  {
    position: [45.456, 16.5122],
    name: 'Siscia',
    authorities: [Authority.RomanEmpire],
    description:
      'Siscia was a strongly fortified Roman town, situated between two rivers. Its location made it a major commercial hub, and from 262-383 AD produced coins from its own imperial mint.',
  },
  {
    position: [41.0066, 28.9759],
    name: 'Constantinople',
    authorities: [Authority.RomanEmpire],
    description:
      'Constantinople was founded in 324 AD under Constantine the Great, on the site of the existing Byzantium settlement. In 330, it became the new capital of the Roman Empire. After the collapse of the Western Roman Empire in the 5th Century, Constantinople remained he capital of the Eastern Roman (Byzantine) Empire until the city fell to the Ottomans in 1453, where it continued to be their capital until 1922.',
  },
  {
    position: [30.5454360924888, 47.95200036149205],
    name: 'al-Basra',
    authorities: [Authority.UmayyadCaliphate],
    description:
      'al-Basra was founded at the beginning of the Islamic era in 636 AD as an Arabic military outpost during the wars between the Arabs and Sassanid Persians. The mint was built under Governor Ubayd Allah ibn Ziyad, the grandson of the Islamic prophet Muhammad.',
  },
];
