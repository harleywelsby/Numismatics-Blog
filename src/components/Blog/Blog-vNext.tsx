import { useContext, useEffect } from 'react';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';

export const Blog = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Blog);
  }, [setSelectedRoute]);

  return (
    <PageWrapper>
      <HeaderText $primaryColor>Blog</HeaderText>
      <HeaderSeparator $primaryColor />
    </PageWrapper>
  );
};
