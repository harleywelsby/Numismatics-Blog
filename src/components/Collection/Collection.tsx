import { CollectionData } from '../../assets/CollectionData';
import { CoinCard } from './CoinCard';
import { CoinCardGrid } from './Collection.styles';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';

export const Collection = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};
