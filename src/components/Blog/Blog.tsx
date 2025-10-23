import { useContext, useEffect } from 'react';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import { NavigationContext } from '../NavigationContext/NavigationContext';
import styled from 'styled-components';
import { PostSummary } from './PostSummary';
import { BlogPostSummaryData } from '../../assets/BlogPostSummaryData';

export const Blog = () => {
  const { setSelectedRoute } = useContext(NavigationContext);
  useEffect(() => {
    setSelectedRoute(Routes.Blog);
  }, [setSelectedRoute]);

  // Dummy posts for testing
  const posts = [...BlogPostSummaryData]; //, ...BlogPostSummaryData, ...BlogPostSummaryData];

  return (
    <PageWrapper>
      <HeaderText $primaryColor>Blog</HeaderText>
      <HeaderSeparator $primaryColor />
      <PostList>
        {posts.map((post) => (
          <PostSummary key={post.postId} {...post} />
        ))}
      </PostList>
      <br />
    </PageWrapper>
  );
};

const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;
