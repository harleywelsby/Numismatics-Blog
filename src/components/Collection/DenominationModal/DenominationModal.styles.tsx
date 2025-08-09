import styled, { css } from 'styled-components';

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 1rem;

  background-color: var(--deep-black);
  opacity: 0.95;
  border-radius: 20px;

  width: 80%;

  @media (min-width: 35em) {
    width: 50%;
  }
`;

export const CloseModalButton = styled.button`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  position: fixed;
  top: 0;
  right: 0;

  padding: 0.5rem;

  @media (min-width: 35em) {
    &:hover {
      filter: brightness(50%);
      transition: 0.5s;
    }
  }
`;

export const DenominationSection = styled.div`
  padding-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 35em) {
    gap: 1.5rem;
    padding: 1rem;
    max-width: 80%;
  }
`;

export const ItemWrapper = styled.div`
  padding: 0.5rem;
`;

export const DenominationImage = styled.img`
  padding: 0.5rem 0;
`;

export const DenominationText = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const Subtext = styled.p`
  text-align: center;
  margin: 0;
`;

export const Description = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 2vw + 0.25rem, 1rem);
  padding: 0 1rem;
`;

export const SectionHeaderText = styled.h2<{ $noSpacing?: boolean }>`
  color: var(--title-orange);
  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(2rem, 1vw + 0.5rem, 2rem);
  text-align: center;

  margin: 1rem;
  padding: 0;

  ${(props) =>
    props.$noSpacing &&
    css`
      margin: 0;
    `}
`;
