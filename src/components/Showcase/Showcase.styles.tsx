import styled, { css } from 'styled-components';

export const ShowcaseCard = styled.div`
  margin: 2rem 0;
  padding: 2rem 1rem;

  border-radius: 10px;

  background-color: var(--deep-black);

  justify-content: center;
  align-items: center;
  justify-self: center;

  @media (min-width: 100em) {
    width: 60%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 35em) {
    padding: 0;
  }
`;

export const CoinImage = styled.img`
  width: 50%;
`;

export const Title = styled.h2`
  color: var(--title-orange);
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0 0 0;

  @media (max-width: 35em) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;

  @media (max-width: 35em) {
    font-size: 1rem;
  }
`;

export const StepButtonStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const StepButton = styled.button<{ isSelected: boolean }>`
  background-color: var(--soft-white);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--title-orange);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--title-orange);
    `}
`;

export const DetailsButton = styled.button`
  background-color: var(--deep-black);
  color: var(--white);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: clamp(0.5rem, 3vw + 0.1rem, 1rem);
  display: flex;
  gap: 0.5rem;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--scroll-track-grey);
  }
`;

export const DetailsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
