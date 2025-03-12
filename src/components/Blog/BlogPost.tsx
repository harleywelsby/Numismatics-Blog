import { PageWrapper } from '../../shared/styles/sharedStyles';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { BlogPostSummaryData } from '../../assets/BlogPostSummaryData';

export const BlogPost = () => {
  const [content, setContent] = useState<string>('');
  const { postId } = useParams();

  const filePath = BlogPostSummaryData.find((x) => x.postId == postId)?.filePath;

  useEffect(() => {
    if (!filePath) {
      // TODO: Better error handling
      return;
    }

    fetch(filePath)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [filePath]);

  return (
    <PageWrapper>
      <ReactMarkdown children={content} />
    </PageWrapper>
  );
};
