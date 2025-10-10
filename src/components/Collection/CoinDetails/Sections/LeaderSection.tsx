import React from 'react';
import { Leader } from '../../../../shared/types/Leader.types';
import { SectionHeader } from '../CoinDetails';
import { DescriptionText, SectionImage, SectionSeparator } from '../CoinDetails.styles';

interface LeaderSectionProps {
  leader: Leader;
  showSeparator?: boolean;
}

const LeaderSection = ({ leader, showSeparator }: LeaderSectionProps) => {
  if (!leader.descriptionParagraphs) {
    return null;
  }

  return (
    <>
      <SectionHeader title={leader.name} subTitle={`${leader.title}, ${leader.reign}`} />
      {leader.imagePath && <SectionImage src={leader.imagePath} alt={leader.name} />}
      {leader.descriptionParagraphs?.map((paragraph, index) => (
        <React.Fragment key={index}>
          <DescriptionText $withTopPadding={index === 0}>{paragraph}</DescriptionText>
          <br />
        </React.Fragment>
      ))}
      {showSeparator && <SectionSeparator />}
    </>
  );
};

export default LeaderSection;
