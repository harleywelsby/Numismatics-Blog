import { CoinCard } from './CoinCard';
import {
  CoinCardGrid,
  CollectionPageWrapper,
  HeaderSeparator,
  HeaderText,
} from './Collection.styles';

// TODO: Replace with DB calls
const TestCardList = [
  {
    title: 'Geta Denarius',
    imgPath: 'src/assets/Geta-TestPhoto.png',
    ruler: 'Septimius Geta',
    authority: 'Rome',
    mintLocation: 'Rome',
    mintDate: '203-208 AD',
    obverseDescription: 'Bust of Geta facing right.\n"P SEPTIMIVS GETA CAES"',
    reverseDescription:
      'Providentia, draped, standing left, holding wand over globe and sceptre. "PROVID DEORVM"',
    catalogueNumber: 'RIC IV.1 #51',
  },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  // { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
];

export const Collection = () => {
  return (
    <CollectionPageWrapper>
      <HeaderText>The Collection</HeaderText>
      <HeaderSeparator />
      <CoinCardGrid>
        {TestCardList.map((x) => (
          <CoinCard
            title={x.title}
            imagePath={x.imgPath}
            ruler={x.ruler}
            authority={x.authority}
            mintLocation={x.mintLocation}
            mintDate={x.mintDate}
            obverseDescription={x.obverseDescription}
            reverseDescription={x.reverseDescription}
            catalogueNumber={x.catalogueNumber}
          />
        ))}
      </CoinCardGrid>
    </CollectionPageWrapper>
  );
};
