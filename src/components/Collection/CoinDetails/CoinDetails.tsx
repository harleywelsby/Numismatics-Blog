import { useParams } from 'react-router-dom';
import {
  CoinDetailsPageWrapper,
  DescriptionSection,
  DescriptionText,
  HeaderSeparator,
  SectionHeaderSeparator,
  SectionHeaderText,
  SectionSeparator,
  SubtitleText,
} from './CoinDetails.styles';
import { HeaderText } from '../../../shared/styles/sharedStyles';
import { CollectionData } from '../../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Characters } from '../../../assets/CharacterData';
import React from 'react';
import { LeaderData } from '../../../assets/LeaderData';
import { CharacterName } from '../../../shared/types/Character.types';
import PrimaryDetailsSection from './Sections/PrimaryDetailsSection';
import ObverseReverseSection from './Sections/ObverseReverseSection';
import LeaderSection from './Sections/LeaderSection';
import CharacterSection from './Sections/CharacterSection';
import MintSection from './Sections/MapSection';
import VideoSection from './Sections/VideoSection';

export const SectionHeader = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <>
      <SectionHeaderText $noSpacing={!!subTitle}>{title}</SectionHeaderText>
      {subTitle && <SubtitleText>{subTitle}</SubtitleText>}
      <SectionHeaderSeparator />
    </>
  );
};

export const CoinDetails = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });
  const { itemId } = useParams();
  const itemIdAsNumber = parseInt(itemId || '', 10);

  const coin = CollectionData.find((coin) => coin.id === itemIdAsNumber)!;

  const leader = LeaderData.find((l) => l.name === coin.leader)!;

  const showCharacterDetails =
    coin?.characters &&
    coin.characters.length > 0 &&
    Characters.some((c) => coin.characters?.includes(c.name as CharacterName));

  const hasMoreSections =
    leader.descriptionParagraphs || showCharacterDetails || coin.moreDetails?.descriptionParagraphs;

  return (
    <CoinDetailsPageWrapper>
      <HeaderText $primaryColor>{coin.title}</HeaderText>
      <HeaderSeparator />
      <PrimaryDetailsSection coin={coin} leader={leader} />
      <ObverseReverseSection coin={coin} />
      <SectionSeparator />
      <MintSection mint={coin.mint} />
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
          {(leader.descriptionParagraphs || showCharacterDetails) && <SectionSeparator />}
        </>
      )}
      {leader.descriptionParagraphs && (
        <LeaderSection leader={leader} showSeparator={showCharacterDetails} />
      )}
      {showCharacterDetails &&
        coin?.characters?.map((character, index) => (
          <CharacterSection key={index} character={Characters.find((c) => c.name === character)} />
        ))}
      {coin.moreDetails?.videoUrl && <VideoSection coin={coin} />}
    </CoinDetailsPageWrapper>
  );
};
