import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../components/Home/Home';
import { Blog } from '../../components/Blog/Blog';
import { Collection } from '../../components/Collection/Collection';
import App from '../../App';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';

export const Routes = {
  Home: '/',
  Blog: '/blog',
  Collection: '/collection',
  Error: '*',
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: Routes.Error, element: <ErrorPage /> },
      { path: Routes.Home, element: <Home /> },
      { path: Routes.Blog, element: <Blog /> },
      { path: Routes.Collection, element: <Collection /> },
    ],
  },
]);
