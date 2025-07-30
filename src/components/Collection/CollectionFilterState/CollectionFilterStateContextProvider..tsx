import { useState } from 'react';
import { CollectionFilterStateContext } from './CollectionFilterStateContext';
import { SortType } from '../Collection.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CollectionFilterStateContextProvider = ({ children }: any) => {
  const [authorityFilter, setAuthorityFilter] = useState('All');
  const [sortType, setSortType] = useState(SortType.Latest);
  const [hideLowGrade, setHideLowGrade] = useState(true);

  return (
    <CollectionFilterStateContext.Provider
      value={{
        authorityFilter,
        setAuthorityFilter,
        sortType,
        setSortType,
        hideLowGrade,
        setHideLowGrade,
      }}
    >
      {children}
    </CollectionFilterStateContext.Provider>
  );
};
