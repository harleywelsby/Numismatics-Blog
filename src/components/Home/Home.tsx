import { HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { Showcase } from '../Showcase/Showcase';
import styled from 'styled-components';

export const Home = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Home);
  }, [setSelectedRoute]);

  return (
    <PageWrapper>
      <TextWrapper>
        <Header data-test-id="home-welcome-header">
          Kia ora, and welcome to Niho Numismatics!
        </Header>
        <Paragraph data-test-id="home-welcome-paragraph-1">
          This is a place to share my passion for collecting ancient coins. I began collecting in
          early 2024, after discovering the hobby via the YouTube channel{' '}
          <a href="https://www.youtube.com/@ToldInStone">ToldInStone</a>, who has some fantastic
          videos on ancient coins.
        </Paragraph>
        <Paragraph>
          Everything you see here is part of my collection, and the historic notes are all from my
          (amateur) research. I enjoy finding new ways to connect the coins in my collection
          together, and visualize them in ways that tell their story well. I'm always working on
          something new, so check back often to see what I've added!
        </Paragraph>
        <Paragraph data-test-id="home-welcome-paragraph-2">
          Stay a while, browse the collection, and I hope you find something that piques your
          interest!
        </Paragraph>
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

const TextWrapper = styled.div`
  justify-self: center;
  width: 80%;

  @media (min-width: 100em) {
    width: 20%;
  }

  @media (min-width: 35em) {
    width: 60%;
  }
`;

const Header = styled.h1`
  justify-self: center;
  font-size: clamp(1.2rem, 3vw + 0.25rem, 1.8rem);
  font-weight: 500;
  color: var(--title-orange);
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
`;

const SectionHeaderSeparator = styled.div`
  color: var(--title-orange);
  border-bottom: solid;
  min-width: 60%;
  justify-self: center;

  margin: 0;
  padding: 0;

  @media (min-width: 35em) {
    min-width: 30%;
  }
`;

const SectionSeparator = styled.div`
  margin: 2rem 0 0 0;
  color: var(--scroll-track-grey);
  border-bottom: solid;
  min-width: 100%;
  justify-self: center;
`;
