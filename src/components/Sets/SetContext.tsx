import { createContext } from 'react';

const SetContextDefaultValue = {
  openSets: [] as string[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  openSet: (_setName: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  closeSet: (_setName: string) => {},
};

export const SetContext = createContext(SetContextDefaultValue);
