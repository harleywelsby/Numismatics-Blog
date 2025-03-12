import { PageWrapper } from '../../shared/styles/sharedStyles';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export const BlogPost = () => {
  const [content, setContent] = useState<string>('');

  const filePath = '/BlogPosts/Test.md';

  useEffect(() => {
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
