import styled, { css } from 'styled-components';
import { HeaderText } from '../../shared/styles/sharedStyles';

export const HeaderParagraph = styled.p`
  justify-self: center;
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 60%;

  @media (max-width: 35em) {
    max-width: 80%;
  }
`;

export const CalcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextBoxLabel = styled.label`
  text-align: right;
  font-size: clamp(0.5rem, 3vw + 0.25rem, 1rem);
  padding: 0;
`;

export const BidInput = styled.input`
  padding: 0.5rem;
  margin: 0.4rem 1rem 1rem 1rem;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CostInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 0.5rem;
`;

export const AddedCostInput = styled.input`
  width: 100px;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const Separator = styled.div<{ $large?: boolean; $marginOverride?: string }>`
  border-bottom: solid;
  justify-self: center;
  width: 150px;
  color: var(--scroll-track-grey);
  margin-bottom: 0.5rem;

  ${(props) =>
    props.$large &&
    css`
      margin-top: 1.5rem;
      width: 300px;
    `}

  ${(props) =>
    props.$marginOverride &&
    css`
      margin: ${props.$marginOverride};
    `}
`;

export const TotalText = styled.p`
  justify-self: center;
  text-align: left;
  font-size: clamp(2rem, 3vw + 0.25rem, 3rem);
  padding: 0;
  margin: 0;
`;

export const BreakdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export const BreakdownText = styled.p`
  margin: 0.5rem;
  padding: 0;
  text-align: right;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
`;

export const ResetButton = styled.button`
  /* Remove default button styling */
  color: var(--soft-white);
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  padding: 0.5rem;
  margin: 0.4rem 1rem 1rem 1rem;
  border-radius: 10px;
  border: none;
  background-color: var(--deep-black);

  &:hover {
    background-color: var(--soft-white);
    color: var(--deep-black);
  }
`;

export const PresetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PresetButton = styled.button<{ $selected?: boolean }>`
  /* Remove default button styling */
  color: var(--soft-white);
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  border: none;
  background-color: var(--deep-black);

  &:hover {
    background-color: var(--soft-white);
    color: var(--deep-black);
  }

  ${(props) =>
    props.$selected &&
    css`
      background-color: var(--soft-white);
      color: var(--deep-black);
    `}
`;

export const SectionHeader = styled(HeaderText)`
  margin: 0;
  padding: 0;
`;
