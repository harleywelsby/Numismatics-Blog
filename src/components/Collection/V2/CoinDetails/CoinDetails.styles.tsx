import styled, { css } from 'styled-components';

export const CoinDetailsPageWrapper = styled.div`
  width: 80%;
  justify-self: center;
`;

export const CoinImage = styled.img`
  padding: 2rem 1rem;
  width: 90%;

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

// Section styles (// TODO)

export const SectionHeaderText = styled.h2``;

export const SectionSeparator = styled.div`
  border-bottom: solid;
  min-width: 100%;
  justify-self: center;
`;

// Description section styles

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 60%;
  justify-self: center;
`;

export const DescriptionHeaderText = styled.h3`
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  text-align: left;
  justify-self: center;
  margin: 0;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);

  text-align: left;
  justify-self: center;
  margin: 0.3rem 0 1rem 0;
  padding: 0 1rem;

  @media (min-width: 35em) {
    padding: 0 2rem;
  }
`;
