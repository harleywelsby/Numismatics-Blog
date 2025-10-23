import { useMediaQuery } from 'react-responsive';
import { getBlogPostRoute } from '../../shared/utils/router';
import { BlogPostLabel, BlogPostSummary, LinkedCoin, SummaryThumbnail } from './Blog.types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CollectionData } from '../../assets/CollectionData';

// TODO
// const getFormattedDate = (date: Date) => {
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
// };

const getLabelColor = (label: BlogPostLabel) => {
  switch (label) {
    case BlogPostLabel.SeveranDynasty:
      return '#1B3C53';
    case BlogPostLabel.RomanEmpire:
      return '#BF092F';
    case BlogPostLabel.RomanRepublic:
      return '#842A3B';
    case BlogPostLabel.PunicWars:
      return '#3A6F43';
  }
};

export const PostSummary = ({ postId, title, previewSrc, labels }: BlogPostSummary) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 35em)' });
  const thumbnailDimensions = isBigScreen
    ? { width: 500, height: 250 }
    : { width: 300, height: 150 };

  const previewAsThumbnail = previewSrc as SummaryThumbnail;
  const hasThumbnail = previewAsThumbnail.src !== undefined;

  const previewAsLinkedCoin = previewSrc as LinkedCoin;
  const hasLinkedCoin = previewAsLinkedCoin.id !== undefined;

  const collectionItem = hasLinkedCoin
    ? CollectionData.find((item) => item.id === previewAsLinkedCoin.id)
    : undefined;

  return (
    <PostSummaryWrapper to={getBlogPostRoute(postId)}>
      {hasThumbnail && (
        <Thumbnail
          src={previewAsThumbnail.src}
          alt={previewAsThumbnail.alt}
          width={thumbnailDimensions.width}
          height={thumbnailDimensions.height}
        />
      )}
      {hasLinkedCoin && (
        <CoinImageWrapper>
          <CoinImage
            src={collectionItem?.obverse.imagePath}
            alt={collectionItem?.obverse.description}
            width={thumbnailDimensions.width}
            height={thumbnailDimensions.height}
          />
          <CoinImage
            src={collectionItem?.reverse.imagePath}
            alt={collectionItem?.reverse.description}
            width={thumbnailDimensions.width}
            height={thumbnailDimensions.height}
          />
        </CoinImageWrapper>
      )}
      <ContentWrapper>
        <Title>{title}</Title>
        <LabelWrapper>
          {labels.map((label) => (
            <Label $color={getLabelColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </LabelWrapper>
      </ContentWrapper>
    </PostSummaryWrapper>
  );
};

const PostSummaryWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  background-color: var(--deep-black);
  border-radius: 1rem;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
    transition: 0.5s;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

const CoinImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: #553c8b;
  border-radius: 1rem 1rem 0 0;
`;

const CoinImage = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-self: center;
  align-self: center;
`;

const Title = styled.h2`
  margin: 0;
  padding: 1rem 1rem 0 1rem;
  text-align: center;

  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(1rem, 3vw + 0.25rem, 1.5rem);
`;

// TODO
// const Subtitle = styled.p`
//   margin: 0;
//   padding: 0.2rem 1rem;
//   text-align: left;

//   font-family: 'Times New Roman', Times, serif;
//   font-size: clamp(0.5rem, 1vw + 0.25rem, 1rem);
//   color: var(--subtitle-grey);
// `;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;

  margin: 0.5rem 1rem 2rem;
`;

const Label = styled.span<{ $color: string }>`
  margin: 0;
  text-align: center;

  padding: 0.2rem 0.8rem;

  border-radius: 1rem;
  background-color: ${(props) => props.$color};

  font-size: clamp(0.5rem, 1vw + 0.25rem, 1rem);
  color: var(--soft-white);
`;
