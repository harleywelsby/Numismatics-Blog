import { useState } from 'react';
import { MintMapStateContext } from './MintMapStateContext';
import { SortType } from '../../Collection/Collection.types';
import { Mint } from '../MintMap.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MintMapStateContextProvider = ({ children }: any) => {
  const [selectedMint, setSelectedMint] = useState<Mint | null>(null);
  const [sortType, setSortType] = useState(SortType.Latest);
  const [authorityFilter, setAuthorityFilter] = useState<string>('All');

  return (
    <MintMapStateContext.Provider
      value={{
        selectedMint,
        setSelectedMint,
        sortType,
        setSortType,
        authorityFilter,
        setAuthorityFilter,
      }}
    >
      {children}
    </MintMapStateContext.Provider>
  );
};
