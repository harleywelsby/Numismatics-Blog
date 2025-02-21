import styled from 'styled-components';

export const CollectionPageWrapper = styled.div`
  max-width: 1280px;
  justify-content: center;
  justify-self: center;
`;

export const HeaderText = styled.h1`
  color: var(--soft-white);
  font-size: clamp(2rem, 3vw + 0.5rem, 3rem);
  border-bottom: solid;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  min-width: 60%;
  min-height: 2vh;
`;
