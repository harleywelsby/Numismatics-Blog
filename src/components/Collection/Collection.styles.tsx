import styled from 'styled-components';

export const CoinCardGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;

  @media (max-width: 100em) {
    grid-template-columns: 50% 50%;

    @media (max-width: 65em) {
      grid-template-columns: 100%;
    }
  }
`;

export const CardWrapper = styled.button`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  padding: 1.2rem;

  @media (min-width: 35em) {
    padding: 2rem;

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

  @media (min-width: 100em) {
    flex-direction: row;
    min-width: 70vw;
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
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const ModalHeader = styled.h2`
  font-weight: 400;
  font-size: clamp(1.5rem, 3vw + 0.25rem, 2rem);
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

export const FilterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin: 0;
  gap: 1rem;

  @media (max-width: 35em) {
    flex-direction: column;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const FilterLabel = styled.p`
  padding: 0;
  margin: 0.2rem;
  text-align: left;
`;

export const FilterSelectBox = styled.select`
  cursor: pointer;
  min-width: 12rem;
  padding: 0.5rem 0.2rem;
  border-radius: 5px;
`;
