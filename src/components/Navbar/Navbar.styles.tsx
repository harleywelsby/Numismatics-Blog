import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { zIndex } from '../../shared/styles/styleConstants';

export const InvisibleLink = styled(Link)`
  text-decoration: none;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;

  z-index: ${zIndex.AlwaysAtFront};
  max-width: 1280px;

  margin-bottom: 2rem;
  padding-bottom: clamp(0.2rem, 3vh + 0.5rem, 2rem);
`;

export const NavbarBackground = styled.div<{ $height?: number | null }>`
  position: fixed;
  background-color: #222831;
  min-width: 100%;
  min-height: 15%;
  z-index: ${zIndex.AlwaysAtBack};

  ${(props) =>
    props.$height &&
    css`
      min-height: ${props.$height}px;
    `}
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  gap: 2rem;
  padding: 0;
  margin: 0;
`;

export const NavbarLink = styled(Link)<{ $selected?: boolean }>`
  text-decoration: none;
  color: var(--soft-white);
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.3rem;

  @media (max-width: 35rem) {
    font-size: clamp(0.5rem, 3vw + 0.5rem, 3rem);
  }

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

export const NavbarButton = styled.button`
  position: absolute;
  z-index: 9999;
  width: 3rem;
  aspect-ratio: 1;
  top: 2rem;
  right: 2rem;

  background-color: transparent;
  border: none;

  @media (min-width: 35em) {
    display: none;
  }
`;

export const TitleText = styled.h1`
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
  color: var(--soft-white);

  @media (max-width: 35em) {
    font-size: clamp(2rem, 3vw + 0.25rem, 4rem);
    padding: 1rem 0.5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;
