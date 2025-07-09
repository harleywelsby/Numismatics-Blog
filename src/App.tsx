import './shared/styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { NavigationContextProvider } from './components/NavigationContext/NavigationContextProvider';
import { Footer } from './components/Footer/Footer';
import { SetContextProvider } from './components/Sets/SetContextProvider';

function App() {
  return (
    <NavigationContextProvider>
      <SetContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
        <Analytics />
      </SetContextProvider>
    </NavigationContextProvider>
  );
}

export default App;
