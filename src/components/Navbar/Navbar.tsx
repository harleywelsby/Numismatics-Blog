import { useState } from 'react';
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

export const Navbar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const [selectedRoute, setSelectedRoute] = useState(window.location.pathname);

  const handleListItemClick = (route: string) => {
    setSelectedRoute(route);
  };

  const logoSize = isBigScreen ? 200 : 70;
  const logo = <LogoImage src="Logo.webp" width={logoSize} height={logoSize} />;

  return (
    <>
      <NavbarWrapper>
        {isBigScreen && logo}
        <TitleWrapper>
          {!isBigScreen && logo}
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
          {/* TODO: Re-add when blog implemented */}
          {/* <li>
            <NavbarLink
              to={Routes.Blog}
              onClick={() => handleListItemClick(Routes.Blog)}
              $selected={selectedRoute === Routes.Blog}
            >
              Blog
            </NavbarLink>
          </li> */}
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
