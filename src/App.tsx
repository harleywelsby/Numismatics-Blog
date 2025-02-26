import './shared/styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* TODO: Re-add when complete */}
      {/* <Footer /> */}
      <Analytics />
    </>
  );
}

export default App;
