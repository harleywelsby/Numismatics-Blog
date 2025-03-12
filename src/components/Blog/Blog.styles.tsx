import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
`;

export const PostSummaryWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;

  /* Remove default styling */
  text-decoration: none;
  color: inherit;

  background-color: var(--deep-black);
  border-radius: 15px;

  padding: 1rem;
  margin: 1rem;
  max-width: 80%;

  @media (min-width: 60em) {
    &:hover {
      filter: brightness(80%);
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
`;

export const PostSummaryHeaderText = styled.h2`
  margin: 0;
  padding: 0.5rem;
  width: 90%;
  text-align: center;
`;

export const PostSummaryThumbnail = styled.img`
  padding: 1rem 0;
`;
