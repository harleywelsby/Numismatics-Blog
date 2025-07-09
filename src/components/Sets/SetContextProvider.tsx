import { useState } from 'react';
import { SetContext } from './SetContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SetContextProvider = ({ children }: any) => {
  const [openSets, setOpenSets] = useState<string[]>([]);

  const openSet = (setName: string) => {
    setOpenSets((prev: string[]) => [...prev, setName]);
  };

  const closeSet = (setName: string) => {
    setOpenSets((prev: string[]) => prev.filter((name: string) => name !== setName));
  };

  return (
    <SetContext.Provider value={{ openSets, openSet, closeSet }}>{children}</SetContext.Provider>
  );
};
