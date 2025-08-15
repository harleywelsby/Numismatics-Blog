import { useContext } from 'react';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { FooterWrapper } from './Footer.styles';

export const Footer = () => {
  const { selectedRoute } = useContext(NavigationContext);

  const disallowedRoutes = [
    Routes.Blog, // TODO: Temp until style issues fixed
    Routes.MintMap,
  ];

  if (disallowedRoutes.includes(selectedRoute)) {
    return;
  }

  return (
    <FooterWrapper>
      <p>© 2025 Niho Numismatics</p>
    </FooterWrapper>
  );
};
