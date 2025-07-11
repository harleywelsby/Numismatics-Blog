import styled, { css } from 'styled-components';
import { SetStatus } from './Sets.Types';

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

export const SetsHeaderSeparator = styled.div`
  margin: 2rem 0 1rem 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 80%;
  justify-self: center;
`;

/***********************************
 *             Accordion           *
 ***********************************/

export const SetAccordionWrapper = styled.div`
  padding: 0.2rem;
`;

/***********************************
 *         Accordion Header        *
 ***********************************/

export const SetAccordionHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;

  width: 98%;

  @media (max-width: 35em) {
    width: 100%;
  }
`;

export const SetTitle = styled.h3`
  font-size: clamp(1rem, 3vw + 0.5rem, 1.8rem);
  margin: 0;
  font-weight: 500;
`;

const getStatusTagColour = (status: SetStatus) => {
  switch (status) {
    case SetStatus.NotStarted:
      return 'var(--scroll-track-grey)';
    case SetStatus.Complete:
      return 'var(--complete-green)';
    default:
    case SetStatus.InProgress:
      return 'var(--incomplete-red)';
  }
};

export const CompletionStatusTag = styled.div<{ $setStatus: SetStatus }>`
  margin: 0.5rem;
  padding: 0;
  border-radius: 0.3rem;
  padding: 0.1rem 0.3rem;
  background-color: var(--incomplete-red);
  width: fit-content;
  justify-self: center;

  background-color: ${({ $setStatus }) => getStatusTagColour($setStatus)};
`;

/***********************************
 *        Accordion Details        *
 ***********************************/

export const SetDescription = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 90%;
  margin: 0 1rem 0.5rem;
`;

export const SetSeparator = styled.div`
  margin: 2rem 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 97%;
  justify-self: center;

  @media (max-width: 35em) {
    min-width: 90%;
  }
`;

export const SetItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 100em) {
    max-width: 90%;
    justify-self: center;
  }
`;

/***********************************
 *             Set Item            *
 ***********************************/

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
