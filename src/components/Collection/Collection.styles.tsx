import styled from 'styled-components';

export const CollectionPageWrapper = styled.div`
  max-width: 1280px;
  justify-content: center;
  justify-self: center;
`;

export const HeaderText = styled.h1`
  color: var(--soft-white);
  font-size: clamp(2rem, 3vw + 0.5rem, 3rem);
  font-weight: 500;
`;

export const HeaderSeparator = styled.div`
  border-bottom: solid;
  min-width: 40vw;

  justify-self: center;

  @media (min-width: 35rem) {
    min-width: 15vw;
  }
`;
