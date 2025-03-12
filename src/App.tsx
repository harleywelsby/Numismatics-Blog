import './shared/styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { NavigationContextProvider } from './components/NavigationContext/NavigationContextProvider';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <NavigationContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
      <Analytics />
    </NavigationContextProvider>
  );
}

export default App;
