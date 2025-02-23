import styled from 'styled-components';

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
`;

export const PostSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;

  background-color: var(--deep-black);
  border-radius: 15px;

  padding: 1rem;
  margin: 1rem;
  width: 80%;

  @media (min-width: 60em) {
    width: 50%;

    &:hover {
      filter: brightness(80%);
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
`;

export const PostSummaryHeaderText = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const PostSummaryParagraph = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const PostSummaryThumbnail = styled.img`
  padding: 1rem 0;
`;
