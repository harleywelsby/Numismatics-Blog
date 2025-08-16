import { MapContainer } from 'react-leaflet';
import styled, { css } from 'styled-components';

export const MapWrapper = styled(MapContainer)`
  height: 600px;
  width: 90vw;
  border-radius: 10px;
  justify-self: center;

  @media (max-width: 35em) {
    height: 400px;
  }

  @media (min-width: 100em) {
    width: 60vw;
  }
`;

export const HeaderParagraph = styled.p`
  text-align: center;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  justify-self: center;
  max-width: 50%;

  @media (max-width: 100em) {
    max-width: 80%;
  }
`;

export const SectionSeparator = styled.div`
  margin: 2rem 0 0 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 90%;
  justify-self: center;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const FilterButton = styled.button<{ $selected?: boolean }>`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  border-bottom: solid transparent;
  display: block;
  text-align: center;
  text-decoration: none;
  color: var(--soft-white);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.5rem;

  ${(props) =>
    props.$selected &&
    css`
      color: var(--title-orange);
      border-bottom: solid;
    `}

  &:hover {
    color: var(--title-orange);
    border-bottom: solid;
  }
`;
