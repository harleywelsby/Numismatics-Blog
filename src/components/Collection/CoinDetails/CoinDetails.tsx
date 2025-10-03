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
  KeyValueGrid,
  KeyValueText,
  VariantGrid,
  VariantTitle,
  VariantValue,
  VariantWrapper,
  PrimaryDetailsWrapper,
  OpenModalButton,
  ProvenanceSectionHeader,
} from './CoinDetails.styles';
import { HeaderText } from '../../../shared/styles/sharedStyles';
import { CollectionData } from '../../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Characters, Rulers } from '../../../assets/CharacterData';
import {
  CharacterData,
  LegendData,
  ObverseReverseData,
  PrimaryDetailsData,
  RulerData,
} from './CoinDetails.types';
import React, { useState } from 'react';
import { CollectionItem, LegendDetails } from '../Collection.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { DenominationModal } from '../DenominationModal/DenominationModal';
import { hasDenominationData } from '../../../assets/DenominationData';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';

const CapitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SectionHeader = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <>
      <SectionHeaderText $noSpacing={!!subTitle}>{title}</SectionHeaderText>
      {subTitle && <SubtitleText>{subTitle}</SubtitleText>}
      <SectionHeaderSeparator />
    </>
  );
};

const PrimaryDetailsSection = ({ coin, isSmallScreen }: PrimaryDetailsData) => {
  const showModalButton = hasDenominationData(coin.denomination);
  const [showDenominationModal, setShowDenominationModal] = useState(false);
  const rulerTitle = coin.ruler.alternateTitle ?? `Ruler`;

  return (
    <PrimaryDetailsWrapper>
      <KeyValueGrid $center={!isSmallScreen}>
        <KeyValueText $rightAlign>
          <b>{`${rulerTitle}: `}</b>
        </KeyValueText>
        <KeyValueText>
          {`${coin.ruler.name} ${coin.ruler.reign ? `(${coin.ruler.alternateTitle ? '' : 'r. '}${coin.ruler.reign})` : ''}`}
        </KeyValueText>
        <KeyValueText $rightAlign>
          <b>Authority: </b>
        </KeyValueText>
        <KeyValueText>{coin.authority}</KeyValueText>
        <KeyValueText $rightAlign>
          <b>Denomination: </b>
        </KeyValueText>
        <KeyValueText>
          {coin.denomination}{' '}
          {showModalButton && (
            <OpenModalButton
              onClick={() => setShowDenominationModal(true)}
              data-test-id={`denomination-modal-open`}
            >
              {/* @ts-expect-error Icon types are busted, but it works */}
              <FontAwesomeIcon icon={faCircleQuestion} size="1x" />
            </OpenModalButton>
          )}
        </KeyValueText>
        <KeyValueText $rightAlign>
          <b>Minted: </b>
        </KeyValueText>
        <KeyValueText>{`${coin.mint.location} (${coin.mint.date})`}</KeyValueText>
        <KeyValueText $rightAlign>
          <b>Ref: </b>
        </KeyValueText>
        <KeyValueText>
          <a href={coin.reference.url} target="_blank" rel="noopener noreferrer">
            {coin.reference.catalogueNumber}
          </a>
        </KeyValueText>
      </KeyValueGrid>
      {coin.provenance && <ProvenanceSection coin={coin} />}
      <br />
      <SectionSeparator />
      {!isSmallScreen && <br />}
      {showDenominationModal && (
        <DenominationModal
          selectedCoin={coin}
          showModal={showDenominationModal}
          setShowModal={setShowDenominationModal}
        />
      )}
    </PrimaryDetailsWrapper>
  );
};

const ProvenanceSection = ({ coin }: { coin: CollectionItem }) => {
  if (!coin.provenance) {
    return null;
  }

  return (
    <DescriptionSection>
      <ProvenanceSectionHeader>Provenance</ProvenanceSectionHeader>
      <Timeline position="right" sx={{ marginRight: '200px' }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{coin.provenance.vendorOrOwner}</TimelineContent>
        </TimelineItem>
        {coin.provenance?.history?.map((item) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item.vendorOrOwner}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </DescriptionSection>
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
      {coin.obverse.legend ? (
        <LegendSection
          legend={coin.obverse.legend}
          legendDetails={coin.obverse.legendDetails}
          isSmallScreen={isSmallScreen}
        />
      ) : (
        <div />
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

const RulerSection = ({ coin, rulerDetails, showSeparator }: RulerData) => {
  return (
    <>
      <SectionHeader
        title={coin.ruler.name}
        subTitle={`${rulerDetails.title}, ${coin.ruler.reign}`}
      />
      <SectionImage src={rulerDetails?.imagePath} alt={rulerDetails?.ruler.name} />
      {rulerDetails?.descriptionParagraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <DescriptionText $withTopPadding={index === 0}>{paragraph}</DescriptionText>
          <br />
        </React.Fragment>
      ))}
      {showSeparator && <SectionSeparator />}
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

  const coin = CollectionData.find((coin) => coin.id === itemIdAsNumber);
  const rulerDetails = Rulers.find((ruler) => ruler.ruler.name === coin?.ruler.name);
  const showCharacterDetails =
    coin?.characters &&
    coin.characters.length > 0 &&
    Characters.some((c) => coin.characters.includes(c.name));

  if (!coin) {
    return;
  }

  const hasMoreSections =
    rulerDetails || showCharacterDetails || coin.moreDetails?.descriptionParagraphs;

  return (
    <CoinDetailsPageWrapper>
      <HeaderText $primaryColor>{coin.title}</HeaderText>
      <HeaderSeparator />
      <PrimaryDetailsSection coin={coin} isSmallScreen={isSmallScreen} />
      <ObverseReverseSection coin={coin} isSmallScreen={isSmallScreen} />
      {hasMoreSections && <SectionSeparator />}
      {coin.moreDetails?.descriptionParagraphs && (
        <>
          <SectionHeader title="What Makes this Coin Special?" />
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
          {(rulerDetails || showCharacterDetails) && <SectionSeparator />}
        </>
      )}
      {rulerDetails && (
        <RulerSection
          coin={coin}
          rulerDetails={rulerDetails}
          showSeparator={showCharacterDetails}
        />
      )}
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
