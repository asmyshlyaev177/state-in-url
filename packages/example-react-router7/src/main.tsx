import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { Layout as LayoutFewComponents } from "./FewComponents/Layout";
import { Page } from "./FewComponents/Page";
import App from "./App.tsx";

import "shared/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
