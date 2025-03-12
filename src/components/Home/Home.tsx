import { useContext } from 'react';
import { PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import {
  ButtonGrid,
  CollectionLink,
  HomepageHeader,
  HomepageParagraph,
  LinkButtonText,
  ShowcaseImage,
  TextWrapper,
} from './Home.styles';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { useMediaQuery } from 'react-responsive';
import { ScreenSize } from '../../shared/types';

const getShowcaseDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 280, height: 103 };
    case ScreenSize.Medium:
      return { width: 500, height: 185 };
    case ScreenSize.Large:
      return { width: 1000, height: 369 };
  }
};

export const Home = () => {
  const { setSelectedRoute } = useContext(NavigationContext);

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const showcaseDimensions = getShowcaseDimensions(screenSize);

  return (
    <PageWrapper>
      <TextWrapper>
        <HomepageHeader data-test-id="home-welcome-header">
          Kia ora, and welcome to Niho Numismatics!
        </HomepageHeader>
        <ShowcaseImage
          src={'/Images/HomepageDisplay.webp'}
          width={showcaseDimensions.width}
          height={showcaseDimensions.height}
          loading="lazy"
        />
        <HomepageParagraph data-test-id="home-welcome-paragraph">
          This website documents my personal coin collection, consisting mostly of Ancient Roman
          pieces. It's also where I'll be blogging about the history behind my coins. Note that I am
          in no way a professional historian or numismatist, and all historical notes are from my
          own amateur research.
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
