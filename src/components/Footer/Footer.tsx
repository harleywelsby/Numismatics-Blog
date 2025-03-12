import { useContext } from 'react';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { FooterLink, FooterWrapper } from './Footer.styles';

export const Footer = () => {
  const { selectedRoute, setSelectedRoute } = useContext(NavigationContext);

  if (selectedRoute === Routes.CopyrightNotice) {
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
