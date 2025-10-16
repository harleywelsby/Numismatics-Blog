import { useContext, useEffect, useState } from 'react';
import { Routes } from '../../shared/utils/router';
import { useMediaQuery } from 'react-responsive';
import { getFullImagePath } from '../../shared/utils/imageHelper';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ENABLE_BID_CALCULATOR, ENABLE_NAVBAR_DROPDOWNS, ENABLE_BLOG } from '../../config';
import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { zIndex } from '../../shared/styles/styleConstants';

export const Navbar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const { selectedRoute, setSelectedRoute } = useContext(NavigationContext);
  const [showSidebar, setShowSidebar] = useState(isBigScreen);
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const navigate = useNavigate();

  const enableDropdowns = ENABLE_NAVBAR_DROPDOWNS || ENABLE_BLOG;

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
    setShowCollectionDropdown(false);
    setShowToolsDropdown(false);
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
  const handleDropdownClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    dropdownType: 'collection' | 'tools',
  ) => {
    setAnchorElement(event.currentTarget);

    if (dropdownType === 'collection') {
      setShowCollectionDropdown(!showCollectionDropdown);
    } else {
      setShowToolsDropdown(!showToolsDropdown);
    }
  };

  const CollectionNavbarItems = () => {
    return (
      <>
        <li>
          <Link
            data-test-id="navbar-collection-link"
            to={Routes.Collection}
            onClick={() => handleListItemClick(Routes.Collection)}
            $selected={selectedRoute.includes(Routes.Collection)}
          >
            Collection
          </Link>
        </li>
        <li>
          <Link
            data-test-id="navbar-sets-link"
            to={Routes.Sets}
            onClick={() => handleListItemClick(Routes.Sets)}
            $selected={selectedRoute === Routes.Sets}
          >
            Sets
          </Link>
        </li>
        <li>
          <Link
            data-test-id="navbar-timeline-link"
            to={Routes.Timeline}
            onClick={() => handleListItemClick(Routes.Timeline)}
            $selected={selectedRoute === Routes.Timeline}
          >
            Timeline
          </Link>
        </li>
        <li>
          <Link
            data-test-id="navbar-mint-map-link"
            to={Routes.MintMap}
            onClick={() => handleListItemClick(Routes.MintMap)}
            $selected={selectedRoute === Routes.MintMap}
          >
            Mint Map
          </Link>
        </li>
        {/* <li>
          <Link
            data-test-id="navbar-buying-power-link"
            to={Routes.BuyingPower}
            onClick={() => handleListItemClick(Routes.BuyingPower)}
            $selected={selectedRoute === Routes.BuyingPower}
          >
            Buying Power
          </Link>
        </li> */}
      </>
    );
  };

  const ToolsNavbarItems = () => {
    return (
      <>
        <li>
          <Link
            data-test-id="navbar-bid-calc-link"
            to={Routes.BidCalculator}
            onClick={() => handleListItemClick(Routes.BidCalculator)}
            $selected={selectedRoute.includes(Routes.BidCalculator)}
          >
            Bid Calculator
          </Link>
        </li>
      </>
    );
  };

  const isCollectionSelected =
    selectedRoute.includes(Routes.Collection) ||
    selectedRoute.includes(Routes.Sets) ||
    selectedRoute.includes(Routes.Timeline) ||
    selectedRoute.includes(Routes.MintMap);

  const isToolsSelected = selectedRoute.includes(Routes.BidCalculator);

  const DropdownMenuItem = ({ route, label }: { route: string; label: string }) => {
    return (
      <MenuItem
        onClick={() => handleListItemClick(route, true)}
        sx={{
          color: 'var(--soft-white)',
          '&:hover': {
            backgroundColor: 'var(--soft-white)',
            color: 'var(--deep-black)',
          },
          ...(selectedRoute.includes(route)
            ? {
                color: 'var(--title-orange)',
              }
            : {}),
        }}
      >
        {label}
      </MenuItem>
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
              <Link
                data-test-id="navbar-home-link"
                to={Routes.Home}
                onClick={() => handleListItemClick(Routes.Home)}
                $selected={selectedRoute === Routes.Home}
              >
                Home
              </Link>
            </li>
            {enableDropdowns && isBigScreen ? (
              <>
                <li>
                  <DropdownButton
                    onClick={(event) => handleDropdownClick(event, 'collection')}
                    $selected={isCollectionSelected}
                    $isDropdownShowing={showCollectionDropdown}
                  >
                    Collection
                    <FontAwesomeIcon icon={faChevronDown} size="1x" />
                  </DropdownButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElement}
                    open={showCollectionDropdown}
                    onClose={() => setShowCollectionDropdown(false)}
                    sx={{
                      '& .MuiPaper-root': {
                        backgroundColor: 'var(--deep-black)',
                      },
                    }}
                  >
                    <DropdownMenuItem route={Routes.Collection} label="Gallery" />
                    <DropdownMenuItem route={Routes.Sets} label="Sets" />
                    <DropdownMenuItem route={Routes.Timeline} label="Timeline" />
                    <DropdownMenuItem route={Routes.MintMap} label="Mint Map" />
                    {/* <DropdownMenuItem route={Routes.BuyingPower} label="Buying Power" /> */}
                  </Menu>
                </li>
                {ENABLE_BID_CALCULATOR && (
                  <li>
                    <DropdownButton
                      onClick={(event) => handleDropdownClick(event, 'tools')}
                      $selected={isToolsSelected}
                      $isDropdownShowing={showToolsDropdown}
                    >
                      Tools
                      <FontAwesomeIcon icon={faChevronDown} size="1x" />
                    </DropdownButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElement}
                      open={showToolsDropdown}
                      onClose={() => setShowToolsDropdown(false)}
                      sx={{
                        '& .MuiPaper-root': {
                          backgroundColor: 'var(--deep-black)',
                        },
                      }}
                    >
                      <DropdownMenuItem route={Routes.BidCalculator} label="Bid Calculator" />
                    </Menu>
                  </li>
                )}
              </>
            ) : (
              <>
                <CollectionNavbarItems />
                {ENABLE_BID_CALCULATOR && <ToolsNavbarItems />}
              </>
            )}
            {ENABLE_BLOG && (
              <li>
                <Link
                  to={Routes.Blog}
                  onClick={() => handleListItemClick(Routes.Blog)}
                  $selected={selectedRoute.includes(Routes.Blog)}
                >
                  Blog
                </Link>
              </li>
            )}
          </NavbarList>
        )}
        {isSidebarShowing && <BlurredBackground onClick={() => setShowSidebar(false)} />}
      </NavbarWrapper>
    </>
  );
};

const NavbarWrapper = styled.nav`
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

const InvisibleLink = styled(RouterLink)`
  text-decoration: none;
`;

const NavbarList = styled.ul`
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
    text-align: right;

    padding: 1.5rem 1rem;
    gap: 1.5rem;

    background-image: url(${getFullImagePath('/Images/SidebarBackground.webp')});
    background-size: cover;
    background-position: center;

    z-index: ${zIndex.AlwaysAtFront};
  }
`;

const BlurredBackground = styled.div`
  position: fixed;
  inset: 0 55% 0 0;
  backdrop-filter: blur(5px);
  z-index: ${zIndex.AlwaysAtFront - 1};
`;

const Link = styled(RouterLink)<{ $selected?: boolean }>`
  text-decoration: none;
  color: var(--soft-white);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.3rem;

  @media (max-width: 35em) {
    font-size: clamp(0.5rem, 2vw + 0.7rem, 4rem);
    line-height: 1;
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

const TitleText = styled.h1`
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
const TitleWrapper = styled.div`
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

const LogoImage = styled.img`
  padding: 1.5rem;

  @media (max-width: 35em) {
    padding: 0.5rem 0 0 0;
  }
`;

const HamburgerIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 0.8rem;
`;

const DropdownButton = styled.button<{
  $selected?: boolean;
  $isDropdownShowing?: boolean;
}>`
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
  margin: -0.3rem 0 0 0;
  padding: 0.3rem;

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

  ${(props) =>
    props.$isDropdownShowing &&
    css`
      color: var(--title-orange);
    `}

  &:hover {
    color: var(--title-orange);
  }
`;
