import { BlogPostSummaryData } from '../../assets/BlogPostSummaryData';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { PostGrid } from './Blog.styles';
import { PostSummary } from './PostSummary';

export const Blog = () => {
  return (
    <PageWrapper>
      <HeaderText>Blog</HeaderText>
      <HeaderSeparator />
      <PostGrid>
        {BlogPostSummaryData.map((summary) => (
          <PostSummary
            key={summary.postId}
            postId={summary.postId}
            title={summary.title}
            imagePath={summary.imagePath}
            imageAltText={summary.imageAltText}
            filePath={summary.filePath}
            imageCredit={summary.imageCredit ?? null}
          />
        ))}
      </PostGrid>
    </PageWrapper>
  );
};
