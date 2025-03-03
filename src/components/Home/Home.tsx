import { useContext } from 'react';
import { PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import {
  BlogButton,
  ButtonGrid,
  ButtonText,
  CollectionLink,
  HomepageHeader,
  HomepageParagraph,
  TextWrapper,
} from './Home.styles';
import { NavigationContext } from '../NavigationContext/NavigationContext';

export const Home = () => {
  const { setSelectedRoute } = useContext(NavigationContext);

  return (
    <PageWrapper>
      <TextWrapper>
        <HomepageHeader>Kia ora, and welcome to Niho Numismatics!</HomepageHeader>
        <HomepageParagraph>
          This website documents my personal coin collection. It's also where I'll be blogging about
          the history behind my coins. Please note that I am in no way a professional historian or
          numismatist, and all notes are from my own, amateur research.
        </HomepageParagraph>
        <ButtonGrid>
          <CollectionLink
            to={Routes.Collection}
            onClick={() => setSelectedRoute(Routes.Collection)}
          >
            <ButtonText>Browse the Collection</ButtonText>
          </CollectionLink>
          <BlogButton>
            <ButtonText>{'Read the Blog\n(Coming soon!)'}</ButtonText>
          </BlogButton>
          {/* TODO: Re-add when Blog is complete */}
          {/* <BlogButton>Latest Blog Post</BlogButton>
          <BlogButton>Featured Post</BlogButton> */}
        </ButtonGrid>
      </TextWrapper>
    </PageWrapper>
  );
};
