import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { Routes } from '../../shared/utils/router';
import { ErrorPageText, HomeLink } from './ErrorPage.styles';

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
