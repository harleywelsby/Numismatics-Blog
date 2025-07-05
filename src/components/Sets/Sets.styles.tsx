import styled, { css } from 'styled-components';

export const HeaderParagraph = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 50%;

  @media (max-width: 100em) {
    max-width: 80%;
  }
`;

export const HeaderParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SetSeparator = styled.div`
  margin: 2rem 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 80%;
  justify-self: center;
`;

export const SetWrapper = styled.div`
  justify-self: center;
  max-width: 80%;
`;

export const SetTitle = styled.h2`
  font-size: clamp(1rem, 3vw + 0.5rem, 2rem);
  font-weight: 500;

  margin: 0;
  max-width: 90%;
  text-align: center;
  justify-self: center;
`;

export const SetDescription = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 60%;
  margin: 1rem auto;

  @media (max-width: 35em) {
    text-align: center;
  }

  @media (max-width: 100em) {
    max-width: 90%;
  }
`;

export const CompletionStatusTag = styled.div<{ $completed?: boolean }>`
  margin: 0.5rem;
  padding: 0;
  border-radius: 0.3rem;
  padding: 0.1rem 0.3rem;

  background-color: var(--incomplete-red);
  width: fit-content;
  justify-self: center;

  ${(props) =>
    props.$completed &&
    css`
      background-color: var(--complete-green);
    `}
`;

export const SetItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 100em) {
    max-width: 60%;
    justify-self: center;
  }
`;

export const SetItemWrapper = styled.div`
  padding: 0.5rem;
`;

export const SetItemName = styled.p`
  font-size: clamp(0.8rem, 2vw + 0.25rem, 1.1rem);
  margin: 0;
  min-width: 5rem;

  @media (max-width: 35em) {
    max-width: 50%;
    text-align: center;
    justify-self: center;
    align-self: center;
  }
`;

export const SetItemImage = styled.img<{ isComplete?: boolean }>`
  ${(props) =>
    props.isComplete &&
    css`
      cursor: pointer;
      &:hover {
        filter: brightness(50%);
        transform: scale(1.05);
        transition: 0.5s;
      }
    `}
`;
