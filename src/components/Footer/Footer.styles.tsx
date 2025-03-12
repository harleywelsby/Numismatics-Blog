import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 0.5rem;
  margin-top: 2rem;
  min-height: 2rem;

  background-color: var(--deep-black);
`;

export const FooterLink = styled(Link)`
  font-weight: 500;
`;
