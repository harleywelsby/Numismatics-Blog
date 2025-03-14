import { useContext } from 'react';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { FooterLink, FooterWrapper } from './Footer.styles';

const disallowedRoutes = [
  Routes.CopyrightNotice,
  Routes.Blog, // TODO: Temp until style issues fixed
  Routes.Home, // TODO: Temp until style issues fixed
];

export const Footer = () => {
  const { selectedRoute, setSelectedRoute } = useContext(NavigationContext);

  if (disallowedRoutes.includes(selectedRoute)) {
    return;
  }

  return (
    <FooterWrapper>
      <p>
        2025 © Niho Numismatics |{' '}
        <FooterLink
          to={Routes.CopyrightNotice}
          onClick={() => setSelectedRoute(Routes.CopyrightNotice)}
        >
          License
        </FooterLink>
      </p>
    </FooterWrapper>
  );
};
