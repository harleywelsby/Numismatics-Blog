import './shared/styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { NavigationContextProvider } from './components/NavigationContext/NavigationContextProvider';
import { Footer } from './components/Footer/Footer';
import { SetContextProvider } from './components/Sets/SetContextProvider';
import { CollectionFilterStateContextProvider } from './components/Collection/CollectionFilterState/CollectionFilterStateContextProvider.';
import { MintMapStateContextProvider } from './components/MintMap/MintMapState/MintMapStateContextProvider';

function App() {
  return (
    <NavigationContextProvider>
      <SetContextProvider>
        <CollectionFilterStateContextProvider>
          <MintMapStateContextProvider>
            <Navbar />
            <Outlet />
            <Footer />
            <Analytics />
          </MintMapStateContextProvider>
        </CollectionFilterStateContextProvider>
      </SetContextProvider>
    </NavigationContextProvider>
  );
}

export default App;
