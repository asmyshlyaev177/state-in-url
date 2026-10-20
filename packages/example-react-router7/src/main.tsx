import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { Layout as LayoutFewComponents } from './FewComponents/Layout';
import { Page } from './FewComponents/Page';
import { UseHookRaceConditionPage } from './useHook-race-condition/Page';
import App from './App.tsx';
import { StatusUsp } from './StatusUsp-for-test';

import 'shared/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/useHook-race-condition',
    element: <UseHookRaceConditionPage />,
  },
  {
    path: '/test-ssr-usp',
    element: <StatusUsp />,
  },
  {
    // NOTE: no need 3 links per page, but keep it so can reuse tests
    path: '/few-components',
    element: <LayoutFewComponents />,
    children: [
      {
        path: '/few-components/:id',
        element: <Page />,
        // a URL write waits for this; tests hold the request to keep the navigation in flight
        loader: () => fetch('/loader-ping').then(() => null),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
