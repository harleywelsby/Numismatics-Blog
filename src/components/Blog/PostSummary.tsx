import { useMediaQuery } from 'react-responsive';
import {
  PostSummaryHeaderText,
  PostSummaryParagraph,
  PostSummaryThumbnail,
  PostSummaryWrapper,
} from './Blog.styles';
import { getBlogPostRoute } from '../../shared/utils/router';
import { BlogPostSummary } from './Blog.types';

export const PostSummary = ({ postId, title, date, imagePath, imageAltText }: BlogPostSummary) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  return (
    <PostSummaryWrapper to={getBlogPostRoute(postId)}>
      <PostSummaryHeaderText>{title}</PostSummaryHeaderText>
      <PostSummaryParagraph>{date}</PostSummaryParagraph>
      <PostSummaryThumbnail
        src={imagePath}
        alt={imageAltText}
        width={thumbnailDimensions.width}
        height={thumbnailDimensions.height}
      />
    </PostSummaryWrapper>
  );
};
