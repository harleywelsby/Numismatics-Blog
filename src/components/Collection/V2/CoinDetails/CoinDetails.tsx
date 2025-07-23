import { useParams } from 'react-router-dom';
import {
  CoinDetailsPageWrapper,
  CoinImage,
  DescriptionHeaderText,
  DescriptionSection,
  DescriptionText,
  DetailsGrid,
  HeaderSeparator,
  LegendHeaderText,
  LegendText,
  MobileDetailsGrid,
  ObverseReverseDescriptionText,
  SectionHeaderSeparator,
  SectionHeaderText,
  SectionImage,
  SectionSeparator,
  SubtitleText,
  VariantGrid,
  VariantTitle,
  VariantValue,
  VariantWrapper,
} from './CoinDetails.styles';
import { HeaderText } from '../../../../shared/styles/sharedStyles';
import { CollectionDataVNext } from '../../../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Characters, Rulers } from '../../../../assets/CharacterData';
import { CharacterData, LegendData, ObverseReverseData, RulerData } from './CoinDetails.types';
import React from 'react';

const CapitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SectionHeader = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <>
      <SectionHeaderText>{title}</SectionHeaderText>
      {subTitle && <SubtitleText>{subTitle}</SubtitleText>}
      <SectionHeaderSeparator />
    </>
  );
};

const ObverseReverseSection = ({ coin, isSmallScreen }: ObverseReverseData) => {
  if (isSmallScreen) {
    return (
      <MobileDetailsGrid>
        <CoinImage src={coin.obverse.imagePath} alt={`${coin.title} Obverse`} />
        <DescriptionHeaderText>Obverse</DescriptionHeaderText>
        <ObverseReverseDescriptionText>{coin.obverse.description}</ObverseReverseDescriptionText>
        {coin.obverse.legend && (
          <LegendSection
            legend={coin.obverse.legend}
            legendDetails={coin.obverse.legendDetails}
            isSmallScreen={isSmallScreen}
          />
        )}
        <SectionSeparator />
        <CoinImage src={coin.reverse.imagePath} alt={`${coin.title} Reverse`} />
        <DescriptionHeaderText>Reverse</DescriptionHeaderText>
        <ObverseReverseDescriptionText>{coin.reverse.description}</ObverseReverseDescriptionText>
        {coin.reverse.legend && (
          <LegendSection
            legend={coin.reverse.legend}
            legendDetails={coin.reverse.legendDetails}
            isSmallScreen={isSmallScreen}
          />
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
      {coin.obverse.legend && (
        <LegendSection
          legend={coin.obverse.legend}
          legendDetails={coin.obverse.legendDetails}
          isSmallScreen={isSmallScreen}
        />
      )}
      {coin.reverse.legend && (
        <LegendSection
          legend={coin.reverse.legend}
          legendDetails={coin.reverse.legendDetails}
          isSmallScreen={isSmallScreen}
        />
      )}
    </DetailsGrid>
  );
};

const LegendSection = ({ legend, legendDetails, isSmallScreen }: LegendData) => {
  const hasTranslations = legendDetails && legendDetails.original && legendDetails.english;

  return (
    <DescriptionSection>
      <LegendHeaderText>Legend</LegendHeaderText>
      <LegendText>
        <b>{legend}</b>
      </LegendText>
      {hasTranslations && (
        <>
          <DescriptionText>
            <b>{`${CapitalizeFirstLetter(legendDetails.language)}:`}</b> {legendDetails.original}
          </DescriptionText>
          <br />
          <DescriptionText>
            <b>English:</b> {legendDetails.english}
          </DescriptionText>
          <br />
          {legendDetails.description && (
            <DescriptionText $withTopPadding>{legendDetails.description}</DescriptionText>
          )}
        </>
      )}
      {!isSmallScreen && <br />}
    </DescriptionSection>
  );
};

const RulerSection = ({ coin, rulerDetails }: RulerData) => {
  return (
    <>
      <SectionHeader title={coin.ruler.name} />
      <SectionImage src={rulerDetails?.imagePath} alt={rulerDetails?.ruler.name} />
      {rulerDetails?.descriptionParagraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <DescriptionText $withTopPadding={index === 0}>{paragraph}</DescriptionText>
          <br />
        </React.Fragment>
      ))}
      <SectionSeparator />
    </>
  );
};

const CharacterSection = ({ character, isSmallScreen }: CharacterData) => {
  if (!character) {
    return null;
  }

  const hasVariants = character.variants && character.variants.length > 0;

  return (
    <>
      <SectionHeader title={character.name} />
      {character.imagePath && <SectionImage src={character.imagePath} alt={character.name} />}
      {!character.imagePath && isSmallScreen && <br />}
      <DescriptionSection>
        {character.descriptionParagraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <DescriptionText $withTopPadding={index === 0}>{paragraph}</DescriptionText>
            <br />
          </React.Fragment>
        ))}
        {hasVariants && (
          <VariantGrid>
            {character.variants!.map((variant, index) => (
              <VariantWrapper key={index}>
                <VariantTitle>
                  <b>{variant.name}:</b>
                </VariantTitle>
                <VariantValue>{variant.description}</VariantValue>
                <br />
              </VariantWrapper>
            ))}
          </VariantGrid>
        )}
      </DescriptionSection>
    </>
  );
};

export const CoinDetails = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });
  const { itemId } = useParams();
  const itemIdAsNumber = parseInt(itemId || '', 10);

  const coin = CollectionDataVNext.find((coin) => coin.id === itemIdAsNumber);
  const rulerDetails = Rulers.find((ruler) => ruler.ruler.name === coin?.ruler.name);
  const showCharacterDetails = coin?.characters && coin.characters.length > 0;

  if (!coin) {
    return;
  }

  return (
    <CoinDetailsPageWrapper>
      <HeaderText $primaryColor>{coin.title}</HeaderText>
      <HeaderSeparator />
      <ObverseReverseSection coin={coin} isSmallScreen={isSmallScreen} />
      <SectionSeparator />
      {coin.moreDetails?.descriptionParagraphs && (
        <>
          <SectionHeader title="Interpretation" />
          {isSmallScreen && <br />}
          <DescriptionSection>
            {coin.moreDetails.descriptionParagraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <DescriptionText $withTopPadding={index === 0}>{paragraph}</DescriptionText>
                <br />
              </React.Fragment>
            ))}
          </DescriptionSection>
          {!isSmallScreen && <br />}
          <SectionSeparator />
        </>
      )}
      {rulerDetails && <RulerSection coin={coin} rulerDetails={rulerDetails} />}
      {showCharacterDetails &&
        coin?.characters?.map((character, index) => (
          <CharacterSection
            key={index}
            character={Characters.find((c) => c.name === character)}
            isSmallScreen={isSmallScreen}
          />
        ))}
      {/** 'See also' links */}
    </CoinDetailsPageWrapper>
  );
};
