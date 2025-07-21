import { useParams } from 'react-router-dom';
import {
  CoinDetailsPageWrapper,
  CoinImage,
  DescriptionHeaderText,
  DescriptionSection,
  DescriptionText,
  HeaderSeparator,
} from './CoinDetails.styles';
import { HeaderText } from '../../../../shared/styles/sharedStyles';
import { CollectionDataVNext } from '../../../../assets/CollectionData';

export const CoinDetails = () => {
  const { itemId } = useParams();
  const itemIdAsNumber = parseInt(itemId || '', 10);

  const coin = CollectionDataVNext.find((coin) => coin.id === itemIdAsNumber);

  // const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  // const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  if (!coin) {
    return;
  }

  return (
    <CoinDetailsPageWrapper>
      <HeaderText>{coin.title}</HeaderText>
      <HeaderSeparator />
      <CoinImage src={coin.imgPath} alt={coin.title} />
      <DescriptionSection>
        <DescriptionHeaderText>Obverse</DescriptionHeaderText>
        <DescriptionText>{coin.obverse.description}</DescriptionText>
        <DescriptionHeaderText>Reverse</DescriptionHeaderText>
        <DescriptionText>{coin.reverse.description}</DescriptionText>
      </DescriptionSection>
    </CoinDetailsPageWrapper>
  );
};
