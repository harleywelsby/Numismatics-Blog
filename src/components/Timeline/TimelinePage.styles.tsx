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
  @media (max-width: 35em) {
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
