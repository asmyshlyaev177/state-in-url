import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout as LayoutFewComponents } from "./FewComponents/Layout";
import { Page } from "./FewComponents/Page";
import { UseHookRaceConditionPage } from "./useHook-race-condition/Page";
import App from "./App.tsx";

import "shared/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/useHook-race-condition",
    element: <UseHookRaceConditionPage />,
  },
  {
    // NOTE: no need 3 links per page, but keep it so can reuse tests
    path: "/few-components",
    element: <LayoutFewComponents />,
    children: [{ path: "/few-components/:id", element: <Page /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
