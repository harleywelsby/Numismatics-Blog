import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

export const MapWrapper = styled(MapContainer)`
  height: 600px;
  width: 90vw;
  border-radius: 10px;
  justify-self: center;

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

export const MarkerButton = styled.button``;
