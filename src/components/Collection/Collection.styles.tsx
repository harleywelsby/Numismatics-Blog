import { Modal } from '@mui/material';
import styled from 'styled-components';

export const CollectionPageWrapper = styled.div`
  max-width: 1800px;
  justify-content: center;
  justify-self: center;
`;

export const HeaderText = styled.h1`
  color: var(--soft-white);
  font-size: clamp(2rem, 3vw + 0.5rem, 3rem);
  font-weight: 500;

  margin: 0;
  padding: 1rem 0;
`;

export const HeaderSeparator = styled.div`
  border-bottom: solid;
  min-width: 40vw;
  justify-self: center;

  @media (min-width: 35em) {
    min-width: 15vw;
    margin-bottom: 2rem;
  }
`;

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
  cursor: pointer;
  outline: inherit;

  padding: 2rem;

  @media (max-width: 35em) {
    padding: 1.2rem;
  }

  :hover {
    filter: brightness(50%);
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const CardThumbnail = styled.img``;

export const CardText = styled.h2`
  margin: 0;
  padding: 0;
  font-size: clamp(1rem, 3vw + 0.25rem, 1.5rem);
  font-weight: 300;
`;

export const CardInspectModal = styled(Modal)`
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 90vw;
  min-height: 90vh;

  background-color: var(--deep-black);
  opacity: 0.95;
  border-radius: 20px;

  @media (max-width: 35em) {
    flex-direction: column;
  }
`;
