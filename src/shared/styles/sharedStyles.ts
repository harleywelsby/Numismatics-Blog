import styled, { css } from 'styled-components';
import { zIndex } from './styleConstants';

export const PageWrapper = styled.div`
  max-width: 1800px;
  justify-content: center;
  justify-self: center;
`;

export const HeaderText = styled.h1<{ $primaryColor?: boolean }>`
  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(2rem, 3vw + 0.5rem, 3rem);
  font-weight: 700;

  margin: 0;

  ${(props) =>
    props.$primaryColor &&
    css`
      color: var(--title-orange);
    `}

  padding: 1rem 0;
  max-width: 90%;
  text-align: center;
  justify-self: center;
`;

export const HeaderSeparator = styled.div<{ $noSpacing?: boolean; $primaryColor?: boolean }>`
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

  ${(props) =>
    props.$primaryColor &&
    css`
      color: var(--title-orange);
    `}
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

export const BackToTopButton = styled.button`
  position: fixed;
  z-index: ${zIndex.AlwaysAtFront};

  top: 20px;
  left: 20px;
  @media (max-width: 35em) {
    left: 50%;
    transform: translateX(-50%);
  }

  padding: 0.5rem 1.5rem;
  border: 1px solid;
  border-radius: 5px;
  gap: 0.5rem;
  display: flex;
  align-items: center;

  background-color: var(--deep-black);
  color: var(--soft-white);

  cursor: pointer;

  &:hover {
    background-color: var(--scroll-track-grey);
  }
`;
