import styled, { css } from 'styled-components';
import { EarlyImperialCoinSet } from '../../assets/BuyingPowerData';
import { CollectionData } from '../../assets/CollectionData';
import { CollectionItem } from '../../shared/types/CollectionItem.types';
import { GoodsDateRange, GoodsPrice } from './BuyingPower.types';

const getRandomCoinImage = (coins: CollectionItem[]) => {
  const coin = coins[Math.floor(Math.random() * coins.length)];
  return Math.random() > 0.5 ? coin.obverse.imagePath : coin.reverse.imagePath;
};

const getRandomCoinImageSet = (coins: CollectionItem[], amount: number) => {
  const coinSet = [];
  for (let i = 0; i < amount; i++) {
    coinSet.push(getRandomCoinImage(coins));
  }

  return coinSet;
};

const getZIndex = (index: number) => {
  return index * -1;
};

export const GoodsPriceCard = (goodsPrice: GoodsPrice) => {
  const coinSet =
    goodsPrice.dateRange === GoodsDateRange.EarlyImperial ? EarlyImperialCoinSet : null;
  if (!coinSet) {
    return null;
  }

  const coins: CollectionItem[] = coinSet.collectionItemIds
    .map((id) => {
      return CollectionData.find((item) => item.id === id);
    })
    .filter((coin) => coin !== undefined);

  return (
    <GoodsPriceWrapper>
      <GoodsHeaderWrapper>
        <GoodsHeader>{goodsPrice.name}</GoodsHeader>
        {goodsPrice.amount && <GoodsHeader $isSecondary>• {goodsPrice.amount}</GoodsHeader>}
      </GoodsHeaderWrapper>
      <CoinSet>
        {getRandomCoinImageSet(coins, goodsPrice.priceInDenarii).map((coin, index) => (
          <CoinImage src={coin} alt={goodsPrice.name} $zIndexOverride={getZIndex(index)} />
        ))}
      </CoinSet>
    </GoodsPriceWrapper>
  );
};

const GoodsPriceWrapper = styled.div`
  max-width: 60vw;
  justify-self: left;

  @media (max-width: 35em) {
    max-width: 90%;
  }
`;

const GoodsHeaderWrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 35em) {
    gap: 0.5rem;
  }
`;

const GoodsHeader = styled.h2<{ $isSecondary?: boolean }>`
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
  color: ${(props) => (props.$isSecondary ? 'var(--subtitle-grey)' : 'var(--white)')};
`;

const CoinSet = styled.div`
  display: flex;
  justify-content: left;
  max-width: 80vw;
  flex-wrap: wrap;

  margin-bottom: 3rem;
`;

const CoinImage = styled.img<{ $zIndexOverride?: number }>`
  width: 100px;
  margin-right: -2rem;
  margin-bottom: -2rem;

  ${(props) =>
    props.$zIndexOverride &&
    css`
      z-index: ${props.$zIndexOverride};
    `}
`;
