import { useContext, useEffect } from 'react';
import { BlogPostSummaryData } from '../../assets/BlogPostSummaryData';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import { PostGrid } from './Blog.styles';
import { PostSummary } from './PostSummary';

export const Blog = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Blog);
  }, [setSelectedRoute]);

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
