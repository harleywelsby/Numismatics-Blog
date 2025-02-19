import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../components/Home/Home';
import { Blog } from '../../components/Blog/Blog';
import { Collection } from '../../components/Collection/Collection';
import App from '../../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'collection', element: <Collection /> },
    ],
  },
]);

export const Routes = {
  Home: '/',
  Blog: '/blog',
  Collection: '/collection',
};
