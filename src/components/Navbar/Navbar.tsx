import { useContext } from 'react';
import {
  NavbarLink,
  NavbarList,
  NavbarWrapper,
  TitleText,
  TitleWrapper,
  LogoImage,
} from './Navbar.styles';
import { Routes } from '../../shared/utils/router';
import { useMediaQuery } from 'react-responsive';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import { NavigationContext } from '../NavigationContext/NavigationContext';

export const Navbar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const { selectedRoute, setSelectedRoute } = useContext(NavigationContext);

  const handleListItemClick = (route: string) => {
    setSelectedRoute(route);
  };

  const logoSize = isBigScreen ? 200 : 70;
  const logo = (
    <LogoImage
      src={getFullImagePath('/Images/Logo.webp')}
      width={logoSize}
      height={logoSize}
      data-test-id="navbar-logo"
    />
  );

  return (
    <>
      <NavbarWrapper>
        {isBigScreen && logo}
        <TitleWrapper>
          {!isBigScreen && logo}
          <TitleText data-test-id="navbar-title">Niho Numismatics</TitleText>
        </TitleWrapper>
        <NavbarList className="navbar-list">
          <li>
            <NavbarLink
              data-test-id="navbar-home-link"
              to={Routes.Home}
              onClick={() => handleListItemClick(Routes.Home)}
              $selected={selectedRoute === Routes.Home}
            >
              Home
            </NavbarLink>
          </li>
          <li>
            <NavbarLink
              data-test-id="navbar-collection-link"
              to={Routes.Collection}
              onClick={() => handleListItemClick(Routes.Collection)}
              $selected={selectedRoute === Routes.Collection}
            >
              Collection
            </NavbarLink>
          </li>
          <li>
            <NavbarLink
              data-test-id="navbar-sets-link"
              to={Routes.Sets}
              onClick={() => handleListItemClick(Routes.Sets)}
              $selected={selectedRoute === Routes.Sets}
            >
              Sets
            </NavbarLink>
          </li>
          <li>
            <NavbarLink
              to={Routes.Blog}
              onClick={() => handleListItemClick(Routes.Blog)}
              $selected={selectedRoute.includes(Routes.Blog)}
            >
              Blog
            </NavbarLink>
          </li>
        </NavbarList>
      </NavbarWrapper>
    </>
  );
};
