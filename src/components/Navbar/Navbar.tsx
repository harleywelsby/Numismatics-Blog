import { useState } from 'react';
import {
  NavbarButton,
  NavbarLink,
  NavbarList,
  NavbarWrapper,
  TitleText,
  TitleWrapper,
  InvisibleLink,
  NavbarBackground,
} from './Navbar.styles';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Routes } from '../../shared/utils/router';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(window.location.pathname);

  // If on a larger screen, ignore the hamburger menu open/close.
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });

  const handleListItemClick = (route: string) => {
    setShowNavbar(false);
    setSelectedRoute(route);
  };

  return (
    <>
      <NavbarBackground />
      <NavbarWrapper>
        <InvisibleLink to={Routes.Home}>
          <TitleWrapper>
            <img src="vite.svg" />
            {isBigScreen && (
              <>
                <TitleText>Niho Numismatics</TitleText>
              </>
            )}
          </TitleWrapper>
        </InvisibleLink>
        <NavbarButton onClick={() => setShowNavbar(!showNavbar)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </NavbarButton>
        {(showNavbar || isBigScreen) && (
          <NavbarList className="navbar-list">
            <li>
              <NavbarLink
                to={Routes.Home}
                onClick={() => handleListItemClick(Routes.Home)}
                $selected={selectedRoute === Routes.Home}
              >
                Home
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to={Routes.Blog}
                onClick={() => handleListItemClick(Routes.Blog)}
                $selected={selectedRoute === Routes.Blog}
              >
                Blog
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to={Routes.Collection}
                onClick={() => handleListItemClick(Routes.Collection)}
                $selected={selectedRoute === Routes.Collection}
              >
                Collection
              </NavbarLink>
            </li>
          </NavbarList>
        )}
      </NavbarWrapper>
    </>
  );
};
