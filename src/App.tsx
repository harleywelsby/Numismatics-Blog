import './shared/styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* TODO: Re-add when complete */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
