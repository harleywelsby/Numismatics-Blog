import { useParams } from 'react-router-dom';
import {
  CoinDetailsPageWrapper,
  CoinImage,
  DescriptionHeaderText,
  DescriptionSection,
  DescriptionText,
  DetailsGrid,
  HeaderSeparator,
  MobileDetailsGrid,
  SectionSeparator,
} from './CoinDetails.styles';
import { HeaderText } from '../../../../shared/styles/sharedStyles';
import { CollectionDataVNext } from '../../../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { LegendDetails } from '../../Collection.types';

type LegendSectionProps = {
  legend: string;
  legendDetails?: LegendDetails;
};

export const CoinDetails = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });
  const { itemId } = useParams();
  const itemIdAsNumber = parseInt(itemId || '', 10);

  const coin = CollectionDataVNext.find((coin) => coin.id === itemIdAsNumber);

  // const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  // const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  if (!coin) {
    return;
  }

  const LegendSection = ({ legend, legendDetails }: LegendSectionProps) => {
    const hasTranslations = legendDetails && legendDetails.latin && legendDetails.english;

    return (
      <DescriptionSection>
        <DescriptionHeaderText>Legend</DescriptionHeaderText>
        <DescriptionText>
          <b>{legend}</b>
        </DescriptionText>
        {hasTranslations && (
          <>
            <DescriptionText>
              <b>Latin:</b> {legendDetails.latin}
            </DescriptionText>
            <DescriptionText>
              <b>English:</b> {legendDetails.english}
            </DescriptionText>
          </>
        )}
      </DescriptionSection>
    );
  };

  const ObverseReverseSection = () => {
    if (isSmallScreen) {
      return (
        <MobileDetailsGrid>
          <CoinImage src={coin.obverse.imagePath} alt={`${coin.title} Obverse`} />
          <DescriptionHeaderText>Obverse</DescriptionHeaderText>
          <DescriptionText>{coin.obverse.description}</DescriptionText>
          <SectionSeparator />
          <CoinImage src={coin.reverse.imagePath} alt={`${coin.title} Reverse`} />
          <DescriptionHeaderText>Reverse</DescriptionHeaderText>
          <DescriptionText>{coin.reverse.description}</DescriptionText>
        </MobileDetailsGrid>
      );
    }

    return (
      <DetailsGrid>
        <CoinImage src={coin.obverse.imagePath} alt={`${coin.title} Obverse`} />
        <CoinImage src={coin.reverse.imagePath} alt={`${coin.title} Reverse`} />
        <DescriptionSection>
          <DescriptionHeaderText>Obverse</DescriptionHeaderText>
          <DescriptionText>{coin.obverse.description}</DescriptionText>
        </DescriptionSection>
        <DescriptionSection>
          <DescriptionHeaderText>Reverse</DescriptionHeaderText>
          <DescriptionText>{coin.reverse.description}</DescriptionText>
        </DescriptionSection>
        <LegendSection legend={coin.obverse.legend} legendDetails={coin.obverse.legendDetails} />
        <LegendSection legend={coin.reverse.legend} legendDetails={coin.reverse.legendDetails} />
      </DetailsGrid>
    );
  };

  return (
    <CoinDetailsPageWrapper>
      <HeaderText>{coin.title}</HeaderText>
      <HeaderSeparator />
      <ObverseReverseSection />
      <SectionSeparator />
    </CoinDetailsPageWrapper>
  );
};
