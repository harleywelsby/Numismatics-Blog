import { useMediaQuery } from 'react-responsive';
import { CollectionItem } from '../../../../shared/types/CollectionItem.types';
import {
  CoinImage,
  DescriptionHeaderText,
  DescriptionSection,
  DescriptionText,
  DetailsGrid,
  LegendHeaderText,
  LegendText,
  MobileDetailsGrid,
  ObverseReverseDescriptionText,
  SectionSeparator,
  KeyValueGrid,
  KeyValueText,
} from '../CoinDetails.styles';
import { LegendDetails } from '../../../../shared/types/CollectionItem.types';

interface LegendSectionProps {
  legend: string;
  legendDetails?: LegendDetails;
}

const LegendSection = ({ legend, legendDetails }: LegendSectionProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });

  const hasTranslations = legendDetails && legendDetails.original && legendDetails.english;
  const isLessThanThreeWords = legend.split(' ').length < 3;
  const hasSecondaryLegend = legendDetails?.secondaryLegend && legendDetails.secondaryLegendDetails;

  const Translations = ({
    legend,
    legendDetails,
  }: {
    legend: string;
    legendDetails: LegendDetails;
  }) => {
    return (
      <>
        <LegendText>
          <b>{legend}</b>
        </LegendText>
        <KeyValueGrid $center={isLessThanThreeWords}>
          <KeyValueText $rightAlign>
            <b>{`${CapitalizeFirstLetter(legendDetails.language)}:`}</b>
          </KeyValueText>
          <KeyValueText>{legendDetails.original}</KeyValueText>
          <KeyValueText $rightAlign>
            <b>English:</b>
          </KeyValueText>
          <KeyValueText>{legendDetails.english}</KeyValueText>
        </KeyValueGrid>
        {legendDetails.description && (
          <DescriptionText $withTopPadding>{legendDetails.description}</DescriptionText>
        )}
      </>
    );
  };

  return (
    <DescriptionSection>
      <LegendHeaderText>Legend</LegendHeaderText>
      {!hasTranslations && (
        <LegendText>
          <b>{legend}</b>
        </LegendText>
      )}
      {hasTranslations && <Translations legend={legend} legendDetails={legendDetails} />}
      {hasSecondaryLegend && (
        <>
          <br />
          <Translations
            legend={legendDetails.secondaryLegend!}
            legendDetails={legendDetails.secondaryLegendDetails!}
          />
        </>
      )}
      {!isSmallScreen && <br />}
    </DescriptionSection>
  );
};

const CapitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

interface ObverseReverseSectionProps {
  coin: CollectionItem;
}

const ObverseReverseSection = ({ coin }: ObverseReverseSectionProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });

  if (isSmallScreen) {
    return (
      <MobileDetailsGrid>
        <CoinImage src={coin.obverse.imagePath} alt={`${coin.title} Obverse`} />
        <DescriptionHeaderText>Obverse</DescriptionHeaderText>
        <ObverseReverseDescriptionText>{coin.obverse.description}</ObverseReverseDescriptionText>
        {coin.obverse.legend && (
          <LegendSection legend={coin.obverse.legend} legendDetails={coin.obverse.legendDetails} />
        )}
        <SectionSeparator />
        <CoinImage src={coin.reverse.imagePath} alt={`${coin.title} Reverse`} />
        <DescriptionHeaderText>Reverse</DescriptionHeaderText>
        <ObverseReverseDescriptionText>{coin.reverse.description}</ObverseReverseDescriptionText>
        {coin.reverse.legend && (
          <LegendSection legend={coin.reverse.legend} legendDetails={coin.reverse.legendDetails} />
        )}
      </MobileDetailsGrid>
    );
  }

  return (
    <DetailsGrid>
      <CoinImage src={coin.obverse.imagePath} alt={`${coin.title} Obverse`} />
      <CoinImage src={coin.reverse.imagePath} alt={`${coin.title} Reverse`} />
      <DescriptionSection>
        <DescriptionHeaderText>Obverse</DescriptionHeaderText>
        <ObverseReverseDescriptionText>{coin.obverse.description}</ObverseReverseDescriptionText>
      </DescriptionSection>
      <DescriptionSection>
        <DescriptionHeaderText>Reverse</DescriptionHeaderText>
        <ObverseReverseDescriptionText>{coin.reverse.description}</ObverseReverseDescriptionText>
      </DescriptionSection>
      {coin.obverse.legend ? (
        <LegendSection legend={coin.obverse.legend} legendDetails={coin.obverse.legendDetails} />
      ) : (
        <div />
      )}
      {coin.reverse.legend && (
        <LegendSection legend={coin.reverse.legend} legendDetails={coin.reverse.legendDetails} />
      )}
    </DetailsGrid>
  );
};

export default ObverseReverseSection;
