import styled from 'styled-components';

export const TextWrapper = styled.div`
  justify-self: center;
  width: 80%;

  @media (min-width: 100em) {
    width: 20%;
  }

  @media (min-width: 35em) {
    width: 60%;
  }
`;

export const HomepageHeader = styled.h2`
  justify-self: center;
  font-size: clamp(1rem, 3vw + 0.25rem, 1.5rem);
  font-weight: 500;
`;

export const HomepageParagraph = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
`;
