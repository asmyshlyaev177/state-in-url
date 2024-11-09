import { Outlet } from "@remix-run/react";

import { Component } from "./Component";

export function Layout() {
  return (
    <div>
      <Component />
      <Outlet />
    </div>
  );
}
