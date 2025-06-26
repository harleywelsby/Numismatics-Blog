import { PageWrapper } from '../../shared/styles/sharedStyles';
import {
  CuratorsPicksParagraph,
  HomepageHeader,
  HomepageParagraph,
  SectionSeparator,
  ShowcaseDescription,
  ShowcaseItem,
  ShowcaseSeparator,
  ShowcaseText,
  ShowcaseTitle,
  TextWrapper,
} from './Home.styles';
import { CoinCard } from '../Collection/CoinCard';
import { CollectionData } from '../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';

const currentShowcaseIds = [26, 17, 25];
const showcaseDescriptions: Record<number, string> = {
  26: "This drachm was struck by Antigonus I 'The One-Eyed', one of Alexander the Great's generals. The reverse still references Alexander, reading 'ΑΛΕΞΑΝΔΡΟΥ' (of Alexander). Antigonus died in combat in 301 BC at age 81, while fighting against a coalition of Alexander's other generals.",
  17: 'Elagabalus came to power in 218 AD at the age of 14, after his grandmother, Julia Maesa, orchestrated a coup against the previous emperor Macrinus. This coin features a depiction of Victory with the text "VICTOR ANTONINI AVG", meaning "Victory to the Antonine Emperor". This is likely commemorating his victory over Macrinus in the Battle of Antioch, and restoration of his dynasty to the throne.',
  25: `Marcus Aurelius was the last of the "Five Good Emperors". He is best known for his contributions to Stoic philosophy, most notably through his work "Meditations". This coin reflects his philosophy through its feature of Felicitas on the reverse, the personification of happiness. Felicitas likely represents one's "Inner Happiness" here, as discussed in Meditations.`,
};

const getShowcaseDescription = (id: number): string => {
  return showcaseDescriptions[id] || 'No description available.';
};

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
            <ShowcaseItem key={x.id} $isMediumScreenOrLarger={isMediumScreenOrLarger}>
              <CoinCard coin={x} hideTitle sizeOverride={showcaseSizeOverride} noPadding />
              <ShowcaseText>
                <ShowcaseTitle $isMediumScreenOrLarger={isMediumScreenOrLarger}>
                  {x.title}
                </ShowcaseTitle>
                <ShowcaseDescription>{getShowcaseDescription(x.id)}</ShowcaseDescription>
              </ShowcaseText>
            </ShowcaseItem>
          </>
        ))}
      </TextWrapper>
    </PageWrapper>
  );
};
