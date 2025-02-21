import { useEffect, useRef, useState } from 'react';
import {
  NavbarLink,
  NavbarList,
  NavbarWrapper,
  TitleText,
  TitleWrapper,
  NavbarBackground,
  LogoImage,
} from './Navbar.styles';
import { Routes } from '../../shared/utils/router';
import { useMediaQuery } from 'react-responsive';

export const Navbar = () => {
  const [selectedRoute, setSelectedRoute] = useState(window.location.pathname);
  const [navbarHeight, setNavbarHeight] = useState<number | null>(null);

  const navbarRef = useRef(null);

  // This needs to call on every re-render since the Navbar may load slower.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // @ts-expect-error TS can't figure out the type of current.
    setNavbarHeight(navbarRef?.current?.clientHeight);
  });

  const handleListItemClick = (route: string) => {
    setSelectedRoute(route);
  };

  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const logoSize = isBigScreen ? 200 : 70;

  const getLogo = () => {
    return <LogoImage src="Logo.png" width={logoSize} height={logoSize} />;
  };

  return (
    <>
      <NavbarBackground $height={navbarHeight} />
      <NavbarWrapper ref={navbarRef}>
        {isBigScreen && getLogo()}
        <TitleWrapper>
          {!isBigScreen && getLogo()}
          <TitleText>Niho Numismatics</TitleText>
        </TitleWrapper>
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
      </NavbarWrapper>
    </>
  );
};
