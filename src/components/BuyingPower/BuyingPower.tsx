import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import { GoodsPriceCard } from './GoodsPriceCard';
import { GoodsPrices } from '../../assets/BuyingPowerData';
import styled, { css } from 'styled-components';

export const BuyingPower = () => {
  return (
    <PageWrapper>
      <HeaderText>Buying Power</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>
        A fun aspect of collecting ancient coins is letting your imagination run wild with the
        history of each coin - who held it before me? How did they acquire it? Where could they have
        spent it?
      </HeaderParagraph>
      <HeaderParagraph>
        This page visually tracks the buying power of Roman coins, the primary focus of the Niho
        Collection. It should give an idea as to where these coins could have travelled in their
        prime.
      </HeaderParagraph>
      <HeaderParagraph>
        Note that much like ours today, the Roman economy fluctuated wildly over its history, and so
        the values here only apply to the noted time periods.
      </HeaderParagraph>
      <Separator $marginOverride="2rem 0 0.5rem 0" />
      {/* TODO: Salary section */}
      {/* <HeaderText>Roman Salaries</HeaderText>
      <HeaderSeparator /> */}
      <HeaderText>Goods Prices</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>1st Century - Early 3rd Century AD</HeaderParagraph>
      <GoodsPriceSection>
        {GoodsPrices.map((goodsPrice) => (
          <GoodsPriceCard key={goodsPrice.name} {...goodsPrice} />
        ))}
      </GoodsPriceSection>
      <Separator $marginOverride="2rem 0 0.5rem 0" />
      <HeaderText>Sources</HeaderText>
      <HeaderSeparator />
      <SourceList>
        <SourceListItem>
          <SourceLink
            href="https://www.forumancientcoins.com/numiswiki/view.asp?key=ancient%20wages%20and%20prices"
            target="_blank"
          >
            Forum Ancient Coins - Ancient Wages and Prices
          </SourceLink>
        </SourceListItem>
        <SourceListItem>
          <SourceLink href="https://www.forumancientcoins.com/dougsmith/worth.html" target="_blank">
            Doug Smith's Buying Power of Ancient Coins
          </SourceLink>
        </SourceListItem>
        <SourceListItem>
          <SourceLink href="https://en.wikipedia.org/wiki/Amphora_(unit)" target="_blank">
            Amphora (unit) | Wikipedia
          </SourceLink>
        </SourceListItem>
        <SourceListItem>
          <SourceLink href="https://www.youtube.com/watch?v=JYvC-gxm7RI" target="_blank">
            Eating Out in Ancient Rome -- How Much Did it Cost? (Classical Numismatics)
          </SourceLink>
        </SourceListItem>
      </SourceList>
    </PageWrapper>
  );
};

const HeaderParagraph = styled.p`
  justify-self: center;
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 60%;

  @media (max-width: 35em) {
    max-width: 80%;
  }
`;

const Separator = styled.div<{ $marginOverride?: string }>`
  border-bottom: solid;
  justify-self: center;
  width: 60vw;
  color: var(--scroll-track-grey);

  ${(props) =>
    props.$marginOverride &&
    css`
      margin: ${props.$marginOverride};
    `}
`;

const SourceList = styled.ul`
  justify-self: center;
`;

const SourceListItem = styled.li`
  text-align: left;
`;

const SourceLink = styled.a`
  color: var(--white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const GoodsPriceSection = styled.div`
  margin: 1rem 0 4rem 0;
  max-width: 50vw;
  justify-self: center;

  @media (max-width: 35em) {
    max-width: 90%;
  }
`;
