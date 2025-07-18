import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../components/Home/Home';
import { Blog } from '../../components/Blog/Blog';
import { Collection } from '../../components/Collection/Collection';
import App from '../../App';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';
import { BlogPost } from '../../components/Blog/BlogPost';
import { Sets } from '../../components/Sets/Sets';
import { TimelinePage } from '../../components/Timeline/TimelinePage';

export const getBlogPostRoute = (postId: string) => {
  return Routes.BlogPost.replace(':postId', postId);
};

export const Routes = {
  Home: '/',
  Blog: '/blog',
  BlogPost: '/blog/:postId',
  Collection: '/collection',
  CollectionItem: '/collection/:itemId',
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
      { path: Routes.Collection, element: <Collection /> },
      { path: Routes.CollectionItem, element: <Collection /> },
      { path: Routes.BlogPost, element: <BlogPost /> },
      { path: Routes.Sets, element: <Sets /> },
      { path: Routes.Timeline, element: <TimelinePage /> },
    ],
  },
]);
