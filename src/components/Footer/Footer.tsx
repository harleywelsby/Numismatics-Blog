import { FooterLink, FooterWrapper } from './Footer.styles';

export const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  const licenseUrl =
    'https://github.com/harleywelsby/Numismatics-Blog/blob/0e1768e6e755c10307cdc60b7a98557c69c10d3b/LICENSE';

  return (
    <FooterWrapper>
      <p>
        © {year} |{' '}
        <FooterLink href={licenseUrl} target="_blank" rel="noreferrer">
          BSD 3-Clause License
        </FooterLink>
      </p>
    </FooterWrapper>
  );
};
