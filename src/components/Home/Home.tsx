import { HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import {
  HomepageHeader,
  HomepageParagraph,
  SectionHeaderSeparator,
  SectionSeparator,
  ShowcaseDescription,
  ShowcaseItem,
  ShowcaseSeparator,
  ShowcaseSubtitle,
  ShowcaseText,
  ShowcaseTitle,
  TextWrapper,
} from './Home.styles';
import { CollectionData } from '../../assets/CollectionData';
import { useMediaQuery } from 'react-responsive';
import { Routes } from '../../shared/utils/router';
import { CoinCard } from '../Collection/CoinCard/CoinCard';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../NavigationContext/NavigationContext';

const currentShowcaseIds = [26, 17, 25];
const showcaseDescriptions: Record<number, string> = {
  26: "This drachm was struck by Antigonus I 'The One-Eyed', one of Alexander the Great's generals and successors. The reverse reads 'ΑΛΕΞΑΝΔΡΟΥ', meaning 'of Alexander'. Antigonus died in combat in 301 BC at age 81, while fighting against a coalition of Alexander's other generals.",
  17: 'Elagabalus rose to power at age 14, after his grandmother, Julia Maesa, orchestrated a coup against the emperor Macrinus. The reverse features Victory, and reads "VICTOR ANTONINI AVG", meaning "Victory to Emperor Antoninus" (Elagabalus is a nickname, after the sun god he worshipped). This type commemorated his victory over Macrinus in the Battle of Antioch, and restoration of his dynasty to the throne.',
  25: `The last of the "Five Good Emperors", Marcus Aurelius is best known for his contributions to Stoic philosophy, most notably "Meditations". This coin features the personification of happiness, Felicitas, on the reverse. Here, Felicitas likely represents one's "inner happiness", a key tenet of Stoicism.`,
};

const getShowcaseDescription = (id: number): string => {
  return showcaseDescriptions[id] || 'No description available.';
};

export const Home = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Home);
  }, [setSelectedRoute]);

  const currentShowcase = CollectionData.filter((x) => currentShowcaseIds.includes(x.id)).sort(
    (a, b) => b.id - a.id,
  );

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const showcaseSizeOverride = isMediumScreenOrLarger
    ? { width: 200, height: 200 }
    : { width: 125, height: 125 };

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
        {currentShowcase.map((x) => (
          <div key={x.id}>
            {currentShowcase.indexOf(x) !== 0 && <ShowcaseSeparator />}
            <ShowcaseItem $isMediumScreenOrLarger={isMediumScreenOrLarger}>
              <CoinCard
                coin={x}
                options={{
                  hideTitle: true,
                  sizeOverride: showcaseSizeOverride,
                  noPadding: true,
                  modalRerouteOverride: Routes.Home,
                  disableRedirect: true,
                }}
              />
              <ShowcaseText>
                <ShowcaseTitle $isMediumScreenOrLarger={isMediumScreenOrLarger}>
                  {x.title}
                </ShowcaseTitle>
                <ShowcaseSubtitle>
                  {x.mint.date}, {x.mint.location}
                </ShowcaseSubtitle>

                <ShowcaseDescription>{getShowcaseDescription(x.id)}</ShowcaseDescription>
              </ShowcaseText>
            </ShowcaseItem>
          </div>
        ))}
      </TextWrapper>
    </PageWrapper>
  );
};
