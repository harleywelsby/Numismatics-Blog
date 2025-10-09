import { EarlyImperialCoinSet } from '../../assets/BuyingPowerData';
import { CollectionData } from '../../assets/CollectionData';
import { CollectionItem } from '../../shared/types/CollectionItem.types';
import {
  CoinImage,
  CoinSet,
  GoodsHeader,
  GoodsHeaderWrapper,
  GoodsPriceWrapper,
} from './BuyingPower.styles';
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
