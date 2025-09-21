import styled, { css } from 'styled-components';

export const HeaderParagraph = styled.p`
  justify-self: center;
  text-align: left;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  max-width: 60%;

  @media (max-width: 35em) {
    max-width: 80%;
  }
`;

export const Separator = styled.div<{ $marginOverride?: string }>`
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

export const SourceList = styled.ul`
  justify-self: center;
`;

export const SourceListItem = styled.li`
  text-align: left;
`;

export const SourceLink = styled.a`
  color: var(--white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const GoodsPriceWrapper = styled.div`
  max-width: 60vw;
  justify-self: left;

  @media (max-width: 35em) {
    max-width: 90%;
  }
`;

export const GoodsHeaderWrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 35em) {
    gap: 0.5rem;
  }
`;

export const GoodsHeader = styled.h2<{ $isSecondary?: boolean }>`
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  color: ${(props) => (props.$isSecondary ? 'var(--subtitle-grey)' : 'var(--white)')};
`;

export const CoinSet = styled.div`
  display: flex;
  justify-content: left;
  max-width: 80vw;
  flex-wrap: wrap;

  margin-bottom: 3rem;
`;

export const CoinImage = styled.img<{ $zIndexOverride?: number }>`
  width: 100px;
  margin-right: -2rem;
  margin-bottom: -2rem;

  ${(props) =>
    props.$zIndexOverride &&
    css`
      z-index: ${props.$zIndexOverride};
    `}
`;

export const GoodsPriceSection = styled.div`
  margin: 1rem 0 4rem 0;
  max-width: 50vw;
  justify-self: center;

  @media (max-width: 35em) {
    max-width: 90%;
  }
`;
