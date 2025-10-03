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

export const HeaderParagraph = styled.p<{ $leftAlign?: boolean }>`
  text-align: center;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  justify-self: center;
  max-width: 50%;

  ${(props) =>
    props.$leftAlign &&
    css`
      text-align: left;
    `}

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
  margin: 1rem;

  @media (min-width: 35em) {
    margin-top: 0;
  }
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
  padding: 0.5rem;

  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);

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

// TODO: Not in use
export const SliderWrapper = styled.div`
  padding: 0 10vw 1rem;
  justify-content: center;
  display: flex;

  .MuiSlider-root {
    color: var(--title-orange);
  }

  @media (min-width: 35em) {
    padding: 0.5rem 20vw 1rem;
  }
`;

export const Spacer = styled.div`
  height: 100px;
`;
