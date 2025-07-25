import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../components/Home/Home';
import { Blog } from '../../components/Blog/Blog';
import App from '../../App';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';
import { BlogPost } from '../../components/Blog/BlogPost';
import { Sets } from '../../components/Sets/Sets';
import { TimelinePage } from '../../components/Timeline/TimelinePage';
import { CollectionV2 } from '../../components/Collection/Collection';
import { CoinDetails } from '../../components/Collection/CoinDetails/CoinDetails';

export const getBlogPostRoute = (postId: string) => {
  return Routes.BlogPost.replace(':postId', postId);
};

export const Routes = {
  Home: '/',
  Blog: '/blog',
  BlogPost: '/blog/:postId',
  Collection: '/collection',
  CollectionItem: '/collection/:itemId',
  CollectionItemDetails: '/collection/:itemId/details',
  Sets: '/sets',
  Timeline: '/timeline',

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
      { path: Routes.Collection, element: <CollectionV2 /> },
      { path: Routes.CollectionItem, element: <CollectionV2 /> },
      { path: Routes.CollectionItemDetails, element: <CoinDetails /> },
      { path: Routes.BlogPost, element: <BlogPost /> },
      { path: Routes.Sets, element: <Sets /> },
      { path: Routes.Timeline, element: <TimelinePage /> },
    ],
  },
]);
