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
  margin-bottom: 2rem;
  z-index: ${zIndex.AlwaysAtFront};

  max-width: 1280px;
`;

export const NavbarBackground = styled.div`
  position: fixed;
  background-color: #222831;
  min-width: 100%;
  min-height: 15%;
  z-index: ${zIndex.AlwaysAtBack};
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  gap: 2rem;
  padding: 0;
  margin: 0;

  @media (max-width: 35em) {
    position: fixed;
    inset: 0 0 0 50%;
    background: #5a639c;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }
`;

export const NavbarLink = styled(Link)<{ $selected?: boolean }>`
  text-decoration: none;
  color: var(--soft-white);
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.3rem;

  @media (max-width: 35rem) {
    font-size: 1.5rem;
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
