import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const InvisibleLink = styled(Link)`
  text-decoration: none;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  z-index: 999;
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
  color: white;
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

export const TitleText = styled.h1<{ $color?: string }>`
  font-size: 1.2rem;

  ${(props) =>
    props.$color &&
    css`
      color: ${props.$color};
    `}
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
