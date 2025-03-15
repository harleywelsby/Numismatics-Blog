import {
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
import { BlogPostImageCaption, BlogPostImageWrapper, BlogPostSection } from './Blog.styles';
import { ImageCaptionData } from '../../assets/ImageCaptionData';
import { BlogPostImage } from './Blog.types';

const getImageDimensions = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case ScreenSize.Small:
      return { width: 300, height: 150 };
    case ScreenSize.Medium:
      return { width: 700, height: 350 };
    case ScreenSize.Large:
      return { width: 1000, height: 500 };
  }
};

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

  const imageDimensions = getImageDimensions(screenSize);

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
            <img
              src={image.path}
              alt={image?.caption}
              width={imageDimensions.width}
              height={imageDimensions.height}
            />
            {image?.caption && <BlogPostImageCaption>{image?.caption}</BlogPostImageCaption>}
          </BlogPostImageWrapper>
        )}
      </BlogPostSection>
    );
  };

  return (
    <PageWrapper>
      <HeaderText>{postSummary?.title}</HeaderText>
      <HeaderSeparator />
      <MobileOnlySpacer />
      {content.map((section) => renderContentSection(section))}
    </PageWrapper>
  );
};
