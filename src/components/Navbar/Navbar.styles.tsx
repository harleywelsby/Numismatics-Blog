import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { zIndex } from '../../shared/styles/styleConstants';
import { getFullImagePath } from '../../shared/utils/imageHelper';

export const InvisibleLink = styled(Link)`
  text-decoration: none;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;

  background-color: var(--deep-black);
  min-width: 100%;

  z-index: ${zIndex.AlwaysAtFront};

  margin-bottom: 2rem;
  padding-bottom: clamp(0.2rem, 3vh + 0.5rem, 2rem);

  @media (max-width: 35em) {
    margin-bottom: 0;
    padding-bottom: 1rem;
  }
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
    inset: 0 0 0 45%;
    background: var(--scroll-track-grey);
    flex-direction: column;

    justify-content: flex-start;
    text-align: left;

    padding: 2rem;
    gap: 1.5rem;

    background-image: url(${getFullImagePath('/Images/SidebarBackground.webp')});
    background-size: cover;
    background-position: center;

    z-index: ${zIndex.AlwaysAtFront};
  }
`;

export const BlurredBackground = styled.div`
  position: fixed;
  inset: 0 55% 0 0;
  backdrop-filter: blur(5px);
  z-index: ${zIndex.AlwaysAtFront - 1};
`;

export const NavbarLink = styled(Link)<{ $selected?: boolean }>`
  text-decoration: none;
  color: var(--soft-white);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.3rem;

  @media (max-width: 35em) {
    font-size: clamp(0.5rem, 3vw + 0.7rem, 4rem);
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
  font-family: 'Times New Roman', Times, serif;
  margin: 0;
  padding: 0 1rem 1rem 1rem;
  color: var(--soft-white);

  @media (max-width: 35em) {
    font-size: clamp(1.5rem, 3vw + 0.25rem, 4rem);
    padding: 1rem 0rem 0.5rem 0.2rem;
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

  @media (max-width: 35em) {
    padding-top: 0.5rem;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 2vw;
  }
`;

export const LogoImage = styled.img`
  padding: 1.5rem;

  @media (max-width: 35em) {
    padding: 0.5rem 0 0 0;
  }
`;

export const HamburgerIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 0.8rem;
`;

export const NavbarDropdown = styled.button<{ $selected?: boolean }>`
  /* Remove default button styling */
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  cursor: pointer;

  text-decoration: none;
  color: var(--soft-white);
  font-weight: 500;
  font-size: 1.2rem;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 35em) {
    font-size: clamp(0.5rem, 3vw + 0.7rem, 4rem);
  }

  ${(props) =>
    props.$selected &&
    css`
      color: var(--title-orange);
      border-bottom: solid;
    `}

  &:hover {
    color: var(--title-orange);
  }
`;
