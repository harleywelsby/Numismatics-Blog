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
  padding-bottom: 1rem;
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

export const CardWrapper = styled.div`
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
