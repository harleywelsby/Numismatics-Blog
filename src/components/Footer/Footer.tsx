import { FooterWrapper } from './Footer.styles';

export const Footer = () => {
  const year = new Date(Date.now()).getFullYear();

  return (
    <FooterWrapper>
      <p>© {year} Niho Numismatics</p>
    </FooterWrapper>
  );
};
