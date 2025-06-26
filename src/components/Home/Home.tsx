import { PageWrapper } from '../../shared/styles/sharedStyles';
import {
  CuratorsPicksParagraph,
  HomepageHeader,
  HomepageParagraph,
  SectionSeparator,
  ShowcaseSeparator,
  TextWrapper,
} from './Home.styles';
import { CoinCard } from '../Collection/CoinCard';
import { CollectionData } from '../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';

const currentShowcaseIds = [26, 17, 25];

export const Home = () => {
  const currentShowcase = CollectionData.filter((x) => currentShowcaseIds.includes(x.id)).sort(
    (a, b) => b.id - a.id,
  );

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const showcaseSizeOverride = isMediumScreenOrLarger
    ? { width: 400, height: 200 }
    : { width: 250, height: 125 };

  return (
    <PageWrapper>
      <TextWrapper>
        <HomepageHeader data-test-id="home-welcome-header">
          Kia ora, and welcome to Niho Numismatics!
        </HomepageHeader>
        <HomepageParagraph data-test-id="home-welcome-paragraph-1">
          This is a place to share my passion for collecting ancient coins. Everything you see on
          this site is part of my personal collection, and the historic notes are all from my
          (amateur) research.
        </HomepageParagraph>
        <HomepageParagraph data-test-id="home-welcome-paragraph-2">
          Stay a while, browse the collection, and I hope you find something that piques your
          interest!
        </HomepageParagraph>
        <SectionSeparator />
        <HomepageHeader data-test-id="curators-picks-header">Curator's Picks</HomepageHeader>
        <CuratorsPicksParagraph data-test-id="curators-picks-description">
          If you're not sure where to look, here's a couple of my favourites!
        </CuratorsPicksParagraph>
        <SectionSeparator />
        {currentShowcase.map((x) => (
          <>
            {currentShowcase.indexOf(x) !== 0 && <ShowcaseSeparator />}
            <CoinCard coin={x} hideTitle sizeOverride={showcaseSizeOverride} />
          </>
        ))}
      </TextWrapper>
    </PageWrapper>
  );
};
