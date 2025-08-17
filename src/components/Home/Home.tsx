import { HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import {
  HomepageHeader,
  HomepageParagraph,
  SectionHeaderSeparator,
  SectionSeparator,
  TextWrapper,
} from './Home.styles';
import { Routes } from '../../shared/utils/router';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Showcase } from '../Showcase/Showcase';

export const Home = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Home);
  }, [setSelectedRoute]);

  return (
    <PageWrapper>
      <TextWrapper>
        <HomepageHeader data-test-id="home-welcome-header">
          Kia ora, and welcome to Niho Numismatics!
        </HomepageHeader>
        <HomepageParagraph data-test-id="home-welcome-paragraph-1">
          This is a place to share my passion for collecting ancient coins. I began collecting in
          early 2024, after discovering the hobby via the YouTube channel{' '}
          <a href="https://www.youtube.com/@ToldInStone">ToldInStone</a>, who has some fantastic
          videos on ancient coins.
        </HomepageParagraph>
        <HomepageParagraph>
          Everything you see here is part of my collection, and the historic notes are all from my
          (amateur) research. I enjoy finding new ways to connect the coins in my collection
          together, and visualize them in ways that tell their story well. I'm always working on
          something new, so check back often to see what I've added!
        </HomepageParagraph>
        <HomepageParagraph data-test-id="home-welcome-paragraph-2">
          Stay a while, browse the collection, and I hope you find something that piques your
          interest!
        </HomepageParagraph>
        <SectionSeparator />
        <HeaderText $primaryColor data-test-id="curators-picks-header">
          Showcase
        </HeaderText>
        <SectionHeaderSeparator />
        <Showcase />
      </TextWrapper>
    </PageWrapper>
  );
};
