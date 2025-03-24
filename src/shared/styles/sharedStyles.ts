import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1800px;
  justify-content: center;
  justify-self: center;
`;

export const HeaderText = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(2rem, 3vw + 0.5rem, 3rem);
  font-weight: 700;

  margin: 0;
  padding: 1rem 0;
  max-width: 90%;
  text-align: center;
  justify-self: center;
`;

export const HeaderSeparator = styled.div<{ $noSpacing?: boolean }>`
  border-bottom: solid;
  min-width: 40vw;
  justify-self: center;

  @media (min-width: 35em) {
    min-width: 15vw;
    margin-bottom: 2rem;

    ${(props) =>
      props.$noSpacing &&
      css`
        margin-bottom: 0;
      `}
  }
`;

export const MobileOnlySpacer = styled.div`
  padding: 0.5rem;

  @media (min-width: 35em) {
    padding: 0;
  }
`;

export const FullSizeImage = styled.img`
  width: 100%;
  height: 100%;
`;
