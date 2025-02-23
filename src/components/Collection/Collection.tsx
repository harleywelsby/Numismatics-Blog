import { CollectionData } from '../../assets/DummyCollectionData';
import { CoinCard } from './CoinCard';
import {
  CoinCardGrid,
  CollectionPageWrapper,
  HeaderSeparator,
  HeaderText,
} from './Collection.styles';

export const Collection = () => {
  return (
    <CollectionPageWrapper>
      <HeaderText>The Collection</HeaderText>
      <HeaderSeparator />
      <CoinCardGrid>
        {CollectionData.map((x) => (
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
