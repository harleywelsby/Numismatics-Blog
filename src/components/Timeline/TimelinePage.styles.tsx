import { Tooltip } from '@mui/material';
import styled from 'styled-components';

export const HeaderParagraph = styled.p`
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  text-align: left;
  max-width: 80%;
  justify-self: center;

  @media (min-width: 86em) {
    max-width: 60%;
  }
`;

export const TimelineContentWrapper = styled.div`
  margin: 0;
  padding: 0 0 2rem 0;

  @media (max-width: 35em) {
    padding: 0 0 1rem 0;
  }
`;

export const TimelineCoinWrapper = styled.div`
  padding: 1rem 0 0 0;
`;

export const DateText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
`;

export const TimelineWrapper = styled.div`
  max-width: 70%;
  justify-self: center;

  @media (max-width: 35em) {
    max-width: 95%;

    ::before {
      display: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const SectionSeparator = styled.div`
  margin: 2rem 0 0 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 80%;
  justify-self: center;

  @media (min-width: 86em) {
    max-width: 60%;
  }
`;

// TODO: Remove if custom style isn't needed
export const TimelineTooltip = styled(Tooltip)``;

export const SliderHeader = styled.h2`
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  text-align: left;
  max-width: 80%;
  justify-self: center;

  padding: 0;
  margin: 2rem 0 0.5rem 0;

  @media (max-width: 35em) {
    margin: 0.5rem 0;
  }
`;

export const SliderWrapper = styled.div`
  width: 70%;
  justify-self: center;
  gap: 0.5rem;
  padding-bottom: 1rem;

  @media (max-width: 35em) {
    margin-top: 2rem;
  }
`;
