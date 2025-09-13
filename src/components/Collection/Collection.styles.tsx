import styled, { css } from 'styled-components';

export const CoinCardGrid = styled.div<{ $columnsOverride?: string }>`
  display: grid;
  grid-template-columns: 33% 33% 33%;

  ${(props) =>
    props.$columnsOverride &&
    css`
      grid-template-columns: ${props.$columnsOverride};
    `}
`;

// Filters

export const FilterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin: 0;
  gap: 1rem;

  @media (max-width: 35em) {
    flex-direction: column;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export const FilterLabel = styled.p`
  padding: 0;
  margin: 0.2rem;
  text-align: left;
`;

export const FilterSelectBox = styled.select`
  cursor: pointer;
  min-width: 12rem;
  padding: 0.5rem 0.2rem;
  border-radius: 5px;

  @media (min-width: 35em) {
    min-width: 8rem;
  }
`;

export const FilterCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const FilterCheckbox = styled.input`
  cursor: pointer;
  transform: scale(1.5);
  justify-self: center;
  align-self: center;
  padding: 1rem;
`;

export const SearchBox = styled.input`
  margin: 0.5rem 0 0 0;
  padding: 0.8rem 0.2rem;
  border-radius: 10px;
  width: 85%;

  @media (min-width: 35em) {
    min-width: 20rem;
    padding: 0.8rem 0.5rem;
    width: 12rem;
  }
`;

export const FilterAccordionHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: bold;
  color: var(--white);
`;

export const AccordionSeparator = styled.div`
  margin: 2rem 0 1rem 0;
  border-bottom: solid;
  min-width: 60%;
  justify-self: center;
  color: var(--scroll-track-grey);
`;
