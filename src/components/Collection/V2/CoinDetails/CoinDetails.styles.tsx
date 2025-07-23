import styled, { css } from 'styled-components';

export const CoinDetailsPageWrapper = styled.div`
  width: 95%;
  justify-self: center;

  @media (min-width: 35em) {
    width: 80%;
  }
`;

export const VariantGrid = styled.div`
  align-self: center;
  justify-self: center;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 100em) {
    max-width: 70%;
  }
`;

export const VariantWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`;

export const VariantTitle = styled.p<{ $withTopPadding?: boolean }>`
  width: 50%;
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);

  text-align: right;
  justify-self: right;

  ${(props) =>
    props.$withTopPadding &&
    css`
      padding-top: 2rem;
    `}

  margin: 0;
  padding: 0;

  @media (min-width: 100em) {
    width: 50%;
  }
`;

export const VariantValue = styled.p<{ $withTopPadding?: boolean }>`
  width: 100%;
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);

  text-align: left;
  justify-self: left;

  ${(props) =>
    props.$withTopPadding &&
    css`
      padding-top: 2rem;
    `}

  margin: 0;
  padding: 0;

  @media (min-width: 100em) {
    width: 50%;
  }
`;

export const DetailsGrid = styled.div`
  align-self: center;
  justify-self: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 35em) {
    padding: 2rem 1rem;
  }

  @media (min-width: 100em) {
    max-width: 70%;
  }
`;

export const MobileDetailsGrid = styled(DetailsGrid)`
  grid-template-columns: 1fr;
`;

export const CoinImage = styled.img`
  justify-self: center;
  align-self: center;
  width: 100%;

  // On larger screens, 100% is far too big.
  @media (min-width: 100em) {
    max-width: 60%;
  }
`;

export const HeaderSeparator = styled.div<{ $noSpacing?: boolean }>`
  color: var(--title-orange);
  border-bottom: solid;
  min-width: 60%;
  justify-self: center;

  @media (min-width: 35em) {
    min-width: 30%;
    margin-bottom: 2rem;

    ${(props) =>
      props.$noSpacing &&
      css`
        margin-bottom: 0;
      `}
  }
`;

// Section Header

export const SectionHeaderText = styled.h2`
  color: var(--title-orange);
  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(2rem, 1vw + 0.5rem, 3rem);
  text-align: center;

  margin: 1rem;
  padding: 0;
`;

export const SectionHeaderSeparator = styled.div`
  color: var(--title-orange);
  border-bottom: solid;
  min-width: 60%;
  justify-self: center;

  margin: 0;
  padding: 0;

  @media (min-width: 35em) {
    min-width: 30%;
    margin-bottom: 2rem;
  }
`;

export const SubtitleText = styled.p`
  font-size: clamp(1.2rem, 1vw + 0.5rem, 1.5rem);
  text-align: center;
`;

// Other Section Styles

export const SectionSeparator = styled.div`
  margin: 1rem 0;
  border-bottom: solid;
  min-width: 100%;
  justify-self: center;
  color: var(--scroll-track-grey);
`;

export const SectionImage = styled.img`
  width: 100%;
  max-width: 90vw;
  justify-self: center;
  align-self: center;

  padding: 1.5rem 0;

  @media (min-width: 35em) {
    padding: 0 0 1rem 0;
  }

  @media (min-width: 100em) {
    max-width: 50%;
  }
`;

// Description Section

export const DescriptionSection = styled.div`
  width: 90%;
  justify-self: center;
`;

export const DescriptionHeaderText = styled.h3`
  color: var(--title-orange);
  font-size: clamp(1.5rem, 1vw + 0.5rem, 2rem);
  text-align: center;
  justify-self: center;
  margin: 0;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;

export const DescriptionText = styled.p<{ $withTopPadding?: boolean }>`
  width: 100%;
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);

  text-align: left;
  justify-self: center;

  ${(props) =>
    props.$withTopPadding &&
    css`
      padding-top: 2rem;
    `}

  margin: 0;
  padding: 0;

  @media (min-width: 100em) {
    width: 50%;
  }
`;

export const ObverseReverseDescriptionText = styled.p<{ $withTopPadding?: boolean }>`
  width: 100%;
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);

  text-align: left;
  justify-self: center;

  ${(props) =>
    props.$withTopPadding &&
    css`
      padding-top: 2rem;
    `}

  margin: 0;
  padding: 0;

  @media (min-width: 100em) {
    width: 60%;
    padding: 0 2rem;
  }
`;

// Legend Section

export const LegendHeaderText = styled.h3`
  color: var(--title-orange);
  font-size: clamp(1.2rem, 1vw + 0.5rem, 1.8rem);
  text-align: center;
  justify-self: center;
  margin: 0;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;

export const LegendText = styled.p`
  font-size: clamp(0.8rem, 1vw + 0.5rem, 1.2rem);
  text-align: center;
  justify-self: center;
  margin: 1rem;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;
