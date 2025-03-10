import { useContext } from 'react';
import { PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import {
  ButtonGrid,
  CollectionLink,
  HomepageHeader,
  HomepageParagraph,
  LinkButtonText,
  TextWrapper,
} from './Home.styles';
import { NavigationContext } from '../NavigationContext/NavigationContext';

export const Home = () => {
  const { setSelectedRoute } = useContext(NavigationContext);

  return (
    <PageWrapper>
      <TextWrapper>
        <HomepageHeader data-test-id="home-welcome-header">
          Kia ora, and welcome to Niho Numismatics!
        </HomepageHeader>
        <HomepageParagraph data-test-id="home-welcome-paragraph">
          This website documents my personal coin collection. It's also where I'll be blogging about
          the history behind my coins. Please note that I am in no way a professional historian or
          numismatist, and all notes are from my own, amateur research.
        </HomepageParagraph>
        <ButtonGrid>
          <CollectionLink
            to={Routes.Collection}
            onClick={() => setSelectedRoute(Routes.Collection)}
            data-test-id="home-collection-link"
          >
            <LinkButtonText>Browse the Collection</LinkButtonText>
          </CollectionLink>
          {/* <BlogCard to={Routes.Blog} onClick={() => setSelectedRoute(Routes.Blog)}>
            <LinkButtonText>Featured Post</LinkButtonText>
          </BlogCard>
          <BlogCard to={Routes.Blog} onClick={() => setSelectedRoute(Routes.Blog)}>
            <LinkButtonText>Latest Post</LinkButtonText>
          </BlogCard> */}
        </ButtonGrid>
      </TextWrapper>
    </PageWrapper>
  );
};
