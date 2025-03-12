import { FooterWrapper } from './Footer.styles';

export const Footer = () => {
  const year = new Date(Date.now()).getFullYear();

  return (
    <FooterWrapper>
      <p>© {year} Niho Numismatics | BSD 3-Clause License</p>
    </FooterWrapper>
  );
};
