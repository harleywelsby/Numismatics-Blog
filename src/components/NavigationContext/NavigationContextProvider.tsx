import { useState } from 'react';
import { NavigationContext } from './NavigationContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavigationContextProvider = ({ children }: any) => {
  const [selectedRoute, setSelectedRoute] = useState<string>(window.location.pathname);

  return (
    <NavigationContext.Provider value={{ selectedRoute, setSelectedRoute }}>
      {children}
    </NavigationContext.Provider>
  );
};
