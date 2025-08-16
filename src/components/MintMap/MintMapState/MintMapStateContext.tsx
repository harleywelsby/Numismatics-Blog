import { createContext } from 'react';
import { SortType } from '../../Collection/Collection.types';
import { Mint } from '../MintMap.types';

const MintMapStateDefault = {
  selectedMint: null as Mint | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedMint: (_mint: Mint | null) => {},

  sortType: SortType.Latest,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSortType: (_sortType: SortType) => {},

  authorityFilter: 'All',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAuthorityFilter: (_filter: string) => {},
};

export const MintMapStateContext = createContext(MintMapStateDefault);
