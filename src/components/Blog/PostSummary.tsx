import { useMediaQuery } from 'react-responsive';
import {
  PostSummaryCreditText,
  PostSummaryHeaderText,
  PostSummaryNoCreditSpacer,
  PostSummaryThumbnail,
  PostSummaryWrapper,
} from './Blog.styles';
import { getBlogPostRoute } from '../../shared/utils/router';
import { BlogPostSummary } from './Blog.types';

export const PostSummary = ({
  postId,
  title,
  imagePath,
  imageAltText,
  imageCredit,
}: BlogPostSummary) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  return (
    <PostSummaryWrapper to={getBlogPostRoute(postId)}>
      <PostSummaryHeaderText>{title}</PostSummaryHeaderText>
      <PostSummaryThumbnail
        src={imagePath}
        alt={imageAltText}
        width={thumbnailDimensions.width}
        height={thumbnailDimensions.height}
      />
      {imageCredit && <PostSummaryCreditText>Photo: {imageCredit}</PostSummaryCreditText>}
      {!imageCredit && <PostSummaryNoCreditSpacer />}
    </PostSummaryWrapper>
  );
};
