import { useState, useEffect } from 'react';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import ReactMarkdown from 'react-markdown';
import { TextWrapper } from './CopyrightNotice.styles';

export const CopyrightNotice = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch('/LICENSE.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <PageWrapper>
      <HeaderText>Copyright Notice</HeaderText>
      <HeaderSeparator />
      <TextWrapper>
        <ReactMarkdown children={content} />
      </TextWrapper>
    </PageWrapper>
  );
};
