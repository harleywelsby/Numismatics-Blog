import styled, { css } from 'styled-components';

export const CoinDetailsPageWrapper = styled.div`
  width: 80%;
  justify-self: center;
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

// Section Styles

// TODO
export const SectionHeaderText = styled.h2``;

export const SectionSeparator = styled.div`
  margin: 1rem 0;
  border-bottom: solid;
  min-width: 100%;
  justify-self: center;
  color: var(--scroll-track-grey);
`;

// Description section styles

export const DescriptionSection = styled.div`
  width: 90%;
  justify-self: center;
`;

export const DescriptionHeaderText = styled.h3`
  font-size: clamp(1.5rem, 1vw + 0.5rem, 2rem);
  text-align: center;
  justify-self: center;
  margin: 0;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;

export const DescriptionText = styled.p`
  width: 100%;
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);

  text-align: left;
  justify-self: center;

  margin: 0;
  padding: 0;

  @media (min-width: 100em) {
    padding: 0 2rem;
    text-align: center;
  }
`;

export const LegendHeaderText = styled.h3`
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
  margin: 0;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;
