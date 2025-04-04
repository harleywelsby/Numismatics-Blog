import {
  FullSizeImage,
  HeaderSeparator,
  HeaderText,
  MobileOnlySpacer,
  PageWrapper,
} from '../../shared/styles/sharedStyles';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { BlogPostSummaryData } from '../../assets/BlogPostSummaryData';
import { useMediaQuery } from 'react-responsive';
import { ScreenSize } from '../../shared/types';
import {
  BlogPostBackLink,
  BlogPostImageCaption,
  BlogPostImageWrapper,
  BlogPostSection,
} from './Blog.styles';
import { ImageCaptionData } from '../../assets/ImageCaptionData';
import { BlogPostImage } from './Blog.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Routes } from '../../shared/utils/router';

export const BlogPost = () => {
  const { postId } = useParams();
  const postSummary = BlogPostSummaryData.find((x) => x.postId == postId);

  const isMediumScreenOrLarger = useMediaQuery({ query: '(min-width: 35em)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 86em)' });

  // Default to small (mobile). If the screen is at least a 'medium' size,
  // then check the size and adjust accordingly.
  let screenSize = ScreenSize.Small;
  if (isMediumScreenOrLarger) {
    screenSize = isLargeScreen ? ScreenSize.Large : ScreenSize.Medium;
  }

  const [content, setContent] = useState<string[]>([]);
  const [images, setImages] = useState<BlogPostImage[]>([]);

  useEffect(() => {
    if (!postSummary?.filePath) {
      // TODO: Better error handling
      return;
    }

    const handleContentImport = (content: string) => {
      const splitContent = content.split('||');

      splitContent.forEach((section) => {
        // If an image path is specified, treat it as an image.
        if (section.endsWith('.webp') && !images.find((img) => img.path === section)) {
          const image: BlogPostImage = { path: section };

          // If caption data exists, retrieve the image object with caption data.
          const imageWithCaption = ImageCaptionData.find((img) => img.path === image.path);

          const tempImages = images;
          tempImages.push(imageWithCaption ?? image);
          setImages(tempImages);
        }
      });

      const sections = splitContent.filter((section) => !section.endsWith('.webp'));

      setContent(sections);
    };

    fetch(postSummary.filePath)
      .then((res) => res.text())
      .then((text) => handleContentImport(text));
  }, [images, postSummary]);

  const renderContentSection = (section: string) => {
    const index = content.indexOf(section);

    let image: BlogPostImage | null = null;
    if (index < images.length) {
      image = images[index];
    }

    return (
      <BlogPostSection>
        <ReactMarkdown children={section} />
        {image && (
          <BlogPostImageWrapper>
            <FullSizeImage src={image.path} alt={image?.caption} />
            {image?.caption && <BlogPostImageCaption>{image?.caption}</BlogPostImageCaption>}
          </BlogPostImageWrapper>
        )}
      </BlogPostSection>
    );
  };

  return (
    <PageWrapper>
      {screenSize === ScreenSize.Small && (
        <>
          <BlogPostBackLink to={Routes.Blog}>
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
            Back
          </BlogPostBackLink>
          <br />
          <br />
        </>
      )}
      <HeaderText>{postSummary?.title}</HeaderText>
      <HeaderSeparator />
      <MobileOnlySpacer />
      {content.map((section) => renderContentSection(section))}
    </PageWrapper>
  );
};
