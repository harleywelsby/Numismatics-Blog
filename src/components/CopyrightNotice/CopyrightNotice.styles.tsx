import styled from 'styled-components';

export const TextWrapper = styled.div`
  max-width: 60%;
  align-self: center;
  justify-self: center;

  min-height: 60vh;

  @media (max-width: 35em) {
    text-align: left;
    max-width: 90%;
  }
`;
