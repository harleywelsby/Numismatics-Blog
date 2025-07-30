import { createContext } from 'react';
import { SortType } from '../Collection.types';

const FilterStateContextDefault = {
  authorityFilter: 'All',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAuthorityFilter: (_filter: string) => {},

  sortType: SortType.Latest,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSortType: (_sortType: SortType) => {},

  hideLowGrade: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setHideLowGrade: (_hide: boolean) => {},
};

export const CollectionFilterStateContext = createContext(FilterStateContextDefault);
