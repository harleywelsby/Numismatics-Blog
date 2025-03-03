import { createContext } from 'react';

const NavigationContextDefaultValue = {
  // We can't use the Routes constants here as they haven't been initialized yet.
  selectedRoute: window.location.pathname,
  // The var is used in the real function, this is only for consistent typing.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedRoute: (_route: string) => {},
};

export const NavigationContext = createContext(NavigationContextDefaultValue);
