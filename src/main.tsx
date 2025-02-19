import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './shared/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './shared/utils/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
