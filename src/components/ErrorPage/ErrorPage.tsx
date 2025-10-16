import styled from 'styled-components';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <PageWrapper>
      <HeaderText>Page Not Found ⚠️</HeaderText>
      <HeaderSeparator />
      <ErrorPageText>
        Oops! Something went wrong, or the page you requested doesn't exist.
      </ErrorPageText>
      <HomeLink to={Routes.Home}>Back to Home</HomeLink>
    </PageWrapper>
  );
};

const ErrorPageText = styled.p`
  font-size: clamp(1rem, 3vw + 0.25rem, 2rem);
  width: 80%;
  text-align: center;
  align-self: center;
  justify-self: center;

  margin-bottom: 2rem;

  @media (min-width: 35em) {
    margin-bottom: 3rem;
  }
`;

const HomeLink = styled(Link)`
  /* Remove default styling */
  color: inherit;
  text-decoration: none;

  padding: 0.5rem 1rem;

  color: var(--deep-black);
  background-color: var(--title-orange);

  border-radius: 10px;

  font-weight: bold;
  font-size: clamp(1rem, 3vw + 0.25rem, 2rem);

  @media (min-width: 35em) {
    padding: 1rem 2rem;

    &:hover {
      filter: brightness(50%);
      transition: 0.5s;
    }
  }
`;
