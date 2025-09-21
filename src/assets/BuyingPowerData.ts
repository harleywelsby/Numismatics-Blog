import {
  CoinImageSet,
  GoodsDateRange,
  GoodsPrice,
} from '../components/BuyingPower/BuyingPower.types';

// TODO: This should be dynamically generated using the date ranges.
export const EarlyImperialCoinSet: CoinImageSet = {
  dateRange: GoodsDateRange.EarlyImperial,
  collectionItemIds: [27, 25, 20, 17, 13, 8],
};

export const GoodsPrices: GoodsPrice[] = [
  {
    name: 'Olive Oil',
    amount: '1x Amphora (≈25.9 Litres)',
    priceInDenarii: 1,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Bread',
    amount: '12x Loaves',
    priceInDenarii: 1,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Vintage/Falernian Wine',
    amount: '4x Jugs',
    priceInDenarii: 1,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Ox Calf',
    amount: '1x',
    priceInDenarii: 20,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Donkey Foal',
    amount: '1x',
    priceInDenarii: 3,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Ram',
    amount: '1x',
    priceInDenarii: 8,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Lamb',
    amount: '1x',
    priceInDenarii: 4,
    dateRange: GoodsDateRange.EarlyImperial,
  },
  {
    name: 'Sack-based Clothing',
    amount: '≈4 years of use',
    priceInDenarii: 4,
    dateRange: GoodsDateRange.EarlyImperial,
  },
];
