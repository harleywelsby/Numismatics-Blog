import { BlogPostData } from '../../assets/DummyBlogPostData';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { PostGrid } from './Blog.styles';
import { PostSummary } from './PostSummary';

export const Blog = () => {
  return (
    <PageWrapper>
      <HeaderText>Blog</HeaderText>
      <HeaderSeparator />
      <PostGrid>
        <PostSummary
          title={BlogPostData.title}
          date={BlogPostData.date}
          imagePath={BlogPostData.imagePath}
          imageAltText={BlogPostData.imageAltText}
          description={BlogPostData.description}
        />
        <PostSummary
          title={BlogPostData.title}
          date={BlogPostData.date}
          imagePath={BlogPostData.imagePath}
          imageAltText={BlogPostData.imageAltText}
          description={BlogPostData.description}
        />
        <PostSummary
          title={BlogPostData.title}
          date={BlogPostData.date}
          imagePath={BlogPostData.imagePath}
          imageAltText={BlogPostData.imageAltText}
          description={BlogPostData.description}
        />
      </PostGrid>
    </PageWrapper>
  );
};
