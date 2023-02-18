import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './global.css';
import Basket from './pages/basket';
import Catalog from './pages/catalog';
import Main from './pages/main';
// Pages
import Profile from './pages/profile';
// service worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/catalog',
    element: <Catalog />
  },
  {
    path: 'profile',
    element: <Profile />
  },
  {
    path: '/basket',
    element: <Basket />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('[ServiceWorker**] - Registered');
  });
}
