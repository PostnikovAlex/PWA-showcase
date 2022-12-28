import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
// Pages
import Profile from './pages/profile';
import Catalog from './pages/catalog'
import Basket from './pages/basket'
import Main from './pages/main'

// service worker 
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: '/basket',
    element: <Basket />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// serviceWorkerRegistration.register('sw.js');

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    // console.log("[ServiceWorker**] - Registered");
  });
}
