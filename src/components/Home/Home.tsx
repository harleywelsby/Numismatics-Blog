import { PageWrapper } from '../../shared/styles/sharedStyles';
import {
  BlogButton,
  ButtonGrid,
  CollectionButton,
  HomepageHeader,
  HomepageParagraph,
  TextWrapper,
} from './Home.styles';

export const Home = () => {
  return (
    <PageWrapper>
      <TextWrapper>
        <HomepageHeader>Kia ora, and welcome to Niho Numismatics!</HomepageHeader>
        <HomepageParagraph>
          This website documents my personal coin collection. It's also where I blog about the
          history behind my coins. Please note that I am in no way a professional historian or
          numismatist, and all notes are from my own, amateur research.
        </HomepageParagraph>
        <ButtonGrid>
          <CollectionButton>
            <HomepageParagraph>Browse the Collection</HomepageParagraph>
          </CollectionButton>
          <BlogButton>Latest Blog Post</BlogButton>
          <BlogButton>Featured Post</BlogButton>
        </ButtonGrid>
      </TextWrapper>
    </PageWrapper>
  );
};
