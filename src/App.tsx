import './shared/styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { NavigationContextProvider } from './components/NavigationContext/NavigationContextProvider';
import { Footer } from './components/Footer/Footer';
import { SetContextProvider } from './components/Sets/SetContextProvider';
import { CollectionFilterStateContextProvider } from './components/Collection/CollectionFilterState/CollectionFilterStateContextProvider.';

function App() {
  return (
    <NavigationContextProvider>
      <SetContextProvider>
        <CollectionFilterStateContextProvider>
          <Navbar />
          <Outlet />
          <Footer />
          <Analytics />
        </CollectionFilterStateContextProvider>
      </SetContextProvider>
    </NavigationContextProvider>
  );
}

export default App;
