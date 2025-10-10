import { useMediaQuery } from 'react-responsive';
import { CharacterDetails } from '../../../../shared/types/Character.types';
import { SectionHeader } from '../CoinDetails';
import {
  DescriptionSection,
  DescriptionText,
  SectionImage,
  VariantGrid,
  VariantTitle,
  VariantValue,
  VariantWrapper,
} from '../CoinDetails.styles';
import React from 'react';

export interface CharacterSectionProps {
  character?: CharacterDetails;
}

const CharacterSection = ({ character }: CharacterSectionProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });

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

export default CharacterSection;
