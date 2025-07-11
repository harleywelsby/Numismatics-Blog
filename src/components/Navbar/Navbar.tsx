import { useContext, useEffect, useState } from 'react';
import {
  NavbarLink,
  NavbarList,
  NavbarWrapper,
  TitleText,
  TitleWrapper,
  LogoImage,
  HamburgerIconWrapper,
  BlurredBackground,
  InvisibleLink,
} from './Navbar.styles';
import { Routes } from '../../shared/utils/router';
import { useMediaQuery } from 'react-responsive';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const { selectedRoute, setSelectedRoute } = useContext(NavigationContext);
  const [showSidebar, setShowSidebar] = useState(isBigScreen);

  // Sidebar is only shown on small screens when the hamburger icon is clicked
  const isSidebarShowing = !isBigScreen && showSidebar;

  useEffect(() => {
    setShowSidebar(isBigScreen);
  }, [isBigScreen]);

  const handleListItemClick = (route: string) => {
    setSelectedRoute(route);
    if (!isBigScreen) {
      setShowSidebar(false);
    }
  };

  const logoSize = isBigScreen ? 200 : 65;
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
          <InvisibleLink
            to={Routes.Home}
            onClick={() => handleListItemClick(Routes.Home)}
            data-test-id="navbar-home-link"
          >
            <TitleText data-test-id="navbar-title">Niho Numismatics</TitleText>
          </InvisibleLink>
          {!isBigScreen && (
            <HamburgerIconWrapper>
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setShowSidebar(!showSidebar)}
                data-test-id="navbar-hamburger-icon"
                size={'2x'}
              />
            </HamburgerIconWrapper>
          )}
        </TitleWrapper>

        {showSidebar && (
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
                data-test-id="navbar-timeline-link"
                to={Routes.Timeline}
                onClick={() => handleListItemClick(Routes.Timeline)}
                $selected={selectedRoute === Routes.Timeline}
              >
                Timeline
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
        )}
        {isSidebarShowing && <BlurredBackground onClick={() => setShowSidebar(false)} />}
      </NavbarWrapper>
    </>
  );
};
