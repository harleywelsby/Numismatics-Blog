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
  NavbarDropdown,
} from './Navbar.styles';
import { Routes } from '../../shared/utils/router';
import { useMediaQuery } from 'react-responsive';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ENABLE_NAVBAR_DROPDOWNS } from '../../config';

export const Navbar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const { selectedRoute, setSelectedRoute } = useContext(NavigationContext);
  const [showSidebar, setShowSidebar] = useState(isBigScreen);
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);
  const navigate = useNavigate();

  // Sidebar is only shown on small screens when the hamburger icon is clicked
  const isSidebarShowing = !isBigScreen && showSidebar;

  useEffect(() => {
    setShowSidebar(isBigScreen);
  }, [isBigScreen]);

  const handleListItemClick = (route: string, withNavigation: boolean = false) => {
    if (withNavigation) {
      navigate(route);
    }

    setSelectedRoute(route);
    if (!isBigScreen) {
      setShowSidebar(false);
    }

    // Close any dropdown menus
    if (showCollectionDropdown) {
      setShowCollectionDropdown(false);
    }
  };

  const logoSize = isBigScreen ? 200 : 70;
  const logoPath = isBigScreen ? '/Images/Logo.webp' : '/Images/LogoSquareNoText.webp';
  const Logo = () => (
    <LogoImage
      src={getFullImagePath(logoPath)}
      width={logoSize}
      height={logoSize}
      data-test-id="navbar-logo"
    />
  );

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const handleCollectionDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
    setShowCollectionDropdown(!showCollectionDropdown);
  };

  const CollectionNavbarItems = () => {
    return (
      <>
        <li>
          <NavbarLink
            data-test-id="navbar-collection-link"
            to={Routes.Collection}
            onClick={() => handleListItemClick(Routes.Collection)}
            $selected={selectedRoute.includes(Routes.Collection)}
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
            data-test-id="navbar-mint-map-link"
            to={Routes.MintMap}
            onClick={() => handleListItemClick(Routes.MintMap)}
            $selected={selectedRoute === Routes.MintMap}
          >
            Mint Map
          </NavbarLink>
        </li>
      </>
    );
  };

  return (
    <>
      <NavbarWrapper>
        {isBigScreen && <Logo />}
        <TitleWrapper>
          {!isBigScreen && (
            <>
              <Logo />
              <InvisibleLink
                to={Routes.Home}
                onClick={() => handleListItemClick(Routes.Home)}
                data-test-id="navbar-home-link"
              >
                <TitleText data-test-id="navbar-title">Niho Numismatics</TitleText>
              </InvisibleLink>
              <HamburgerIconWrapper>
                <FontAwesomeIcon
                  // @ts-expect-error Icon types are busted, but it works
                  icon={faBars}
                  onClick={() => setShowSidebar(!showSidebar)}
                  data-test-id="navbar-hamburger-icon"
                  size={'2x'}
                />
              </HamburgerIconWrapper>
            </>
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
            {ENABLE_NAVBAR_DROPDOWNS && isBigScreen ? (
              <li>
                <NavbarDropdown onClick={handleCollectionDropdownClick}>
                  Collection
                  {/* @ts-expect-error Icon types are busted, but it works */}
                  <FontAwesomeIcon icon={faChevronDown} size="1x" />
                </NavbarDropdown>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElement}
                  open={showCollectionDropdown}
                  onClose={() => setShowCollectionDropdown(false)}
                >
                  <MenuItem onClick={() => handleListItemClick(Routes.Collection, true)}>
                    Gallery
                  </MenuItem>
                  <MenuItem onClick={() => handleListItemClick(Routes.Sets, true)}>Sets</MenuItem>
                  <MenuItem onClick={() => handleListItemClick(Routes.Timeline, true)}>
                    Timeline
                  </MenuItem>
                  <MenuItem onClick={() => handleListItemClick(Routes.MintMap, true)}>
                    Mint Map
                  </MenuItem>
                </Menu>
              </li>
            ) : (
              <CollectionNavbarItems />
            )}
            {/* <li>
              <NavbarLink
                to={Routes.Blog}
                onClick={() => handleListItemClick(Routes.Blog)}
                $selected={selectedRoute.includes(Routes.Blog)}
              >
                Blog
              </NavbarLink>
            </li> */}
          </NavbarList>
        )}
        {isSidebarShowing && <BlurredBackground onClick={() => setShowSidebar(false)} />}
      </NavbarWrapper>
    </>
  );
};
