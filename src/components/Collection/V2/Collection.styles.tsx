import styled, { css } from 'styled-components';

export const CoinCardGrid = styled.div<{ $columnsOverride?: string }>`
  display: grid;
  grid-template-columns: 33% 33% 33%;

  ${(props) =>
    props.$columnsOverride &&
    css`
      grid-template-columns: ${props.$columnsOverride};
    `}

  @media (max-width: 100em) {
    grid-template-columns: 50% 50%;

    @media (max-width: 65em) {
      grid-template-columns: 100%;
    }
  }
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
`;

export const FilterCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const FilterCheckbox = styled.input`
  cursor: pointer;
  transform: scale(1.5);
  justify-self: center;
  align-self: center;
  padding: 1rem;
`;
