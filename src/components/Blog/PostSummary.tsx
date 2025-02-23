import { useMediaQuery } from 'react-responsive';
import {
  PostSummaryHeaderText,
  PostSummaryParagraph,
  PostSummaryThumbnail,
  PostSummaryWrapper,
} from './Blog.styles';

type PostSummaryProps = {
  title: string;
  date: string;
  imagePath: string;
  imageAltText: string;
  description: string;
};

export const PostSummary = ({
  title,
  date,
  imagePath,
  imageAltText,
  description,
}: PostSummaryProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  return (
    <PostSummaryWrapper>
      <PostSummaryHeaderText>{title}</PostSummaryHeaderText>
      <PostSummaryParagraph>{date}</PostSummaryParagraph>
      <PostSummaryThumbnail
        src={imagePath}
        alt={imageAltText}
        width={thumbnailDimensions.width}
        height={thumbnailDimensions.height}
      />
      <PostSummaryParagraph>{description}</PostSummaryParagraph>
    </PostSummaryWrapper>
  );
};
