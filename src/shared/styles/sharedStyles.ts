import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1800px;
  justify-content: center;
  justify-self: center;
`;

export const HeaderText = styled.h1`
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
