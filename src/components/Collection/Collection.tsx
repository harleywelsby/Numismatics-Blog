import { CoinCard } from './CoinCard';
import {
  CoinCardGrid,
  CollectionPageWrapper,
  HeaderSeparator,
  HeaderText,
} from './Collection.styles';

// TODO: Replace with DB calls
const TestCardList = [
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
  { title: 'Rome | Geta Denarius (203-208 AD)', imgPath: 'src/assets/Geta-TestPhoto.png' },
];

export const Collection = () => {
  return (
    <CollectionPageWrapper>
      <HeaderText>The Collection</HeaderText>
      <HeaderSeparator />
      <CoinCardGrid>
        {TestCardList.map((x) => (
          <CoinCard title={x.title} imagePath={x.imgPath} />
        ))}
      </CoinCardGrid>
    </CollectionPageWrapper>
  );
};
