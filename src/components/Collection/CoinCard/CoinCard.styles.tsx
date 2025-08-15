import styled, { css } from 'styled-components';

export const CardWrapper = styled.button<{ $noPadding?: boolean }>`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  /* Remove default styling */
  text-decoration: none;
  color: inherit;

  padding: 1.2rem;

  ${(props) =>
    props.$noPadding &&
    css`
      padding: 0;
    `}

  @media (min-width: 35em) {
    padding: 2rem;

    ${(props) =>
      props.$noPadding &&
      css`
        padding: 0;
      `}

    &:hover {
      filter: brightness(50%);
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
`;

export const CardText = styled.h2`
  margin: 0;
  padding: 0;
  font-size: clamp(1rem, 3vw + 0.25rem, 1.5rem);
  font-weight: 300;
`;

export const CoinImageWrapper = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`;

// Modal

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

  @media (min-width: 100em) {
    flex-direction: row;
    min-width: 70vw;
    gap: 5rem;
    width: 25%;
  }
`;

export const ModalTextWrapper = styled.div`
  justify-content: center;
  align-items: left;
  display: flex;
  flex-direction: column;
  white-space: pre-line;

  width: 80%;

  @media (min-width: 100em) {
    padding-left: 2rem;
    width: 20%;
  }
`;

export const ModalBodyWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const ModalHeader = styled.h2`
  font-weight: 400;
  font-size: clamp(1.2rem, 3vw + 0.25rem, 2rem);
  margin: 0;
  padding: 0.5rem 0;

  border-bottom: solid;
  margin-bottom: 1rem;

  @media (max-width: 100em) {
    align-self: center;
  }
`;

export const ModalText = styled.p`
  margin: 0.8rem 0;
  font-size: clamp(0.5rem, 3vw + 0.1rem, 1rem);
`;

export const ModalImageWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 0.2rem;
  display: flex;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;

  // On larger screens, 100% is far too big.
  @media (min-width: 100em) {
    max-width: 60%;
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

// See More feature

export const SeeMoreButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
`;

export const SeeMoreButton = styled.button`
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

export const NewPill = styled.span`
  padding: 0.2rem;
  border-radius: 5px;
  font-size: clamp(0.5rem, 3vw + 0.1rem, 1rem);
  font-weight: bold;
  background-color: var(--complete-green);
`;
