import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  padding-top: 1rem;

  @media (min-width: 60em) {
    padding: 0 0 3rem 0;
  }
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
  max-width: 100%;

  @media (min-width: 60em) {
    padding: 1rem 2rem;

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

  font-size: clamp(1rem, 3vw + 0.25rem, 1.5rem);
`;

export const PostSummaryThumbnail = styled.img`
  padding: 1rem 0;

  @media (max-width: 35em) {
    padding: 0.5rem 0 1rem 0;
  }
`;

export const PostSummaryCreditText = styled.p`
  padding: 0;
  margin: 0;
  height: 1.5rem;
`;

export const PostSummaryNoCreditSpacer = styled.div`
  padding: 0;
  margin: 0;
  height: 1.5rem;
`;

export const BlogPostSection = styled.div`
  max-width: 90%;
  align-self: center;
  justify-self: center;

  text-align: left;

  @media (min-width: 100em) {
    max-width: 60%;
  }
`;

export const BlogPostImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;

  padding: 1rem;
`;

export const BlogPostImageCaption = styled.p`
  text-align: center;
  font-size: clamp(0.5rem, 3vw + 0.25rem, 0.8rem);

  padding: 0.2rem 0 0 0;
  margin: 0;
`;
