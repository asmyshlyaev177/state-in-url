import React from "react";
import { Link, Outlet, useMatches } from "react-router";

import { Component } from "./Component";

export function Layout() {
  const matches = useMatches();
  return (
    <div className="flex flex-col gap-4">
      <Component />
      {matches.length === 1 && <Link to="./1">Page 1</Link>}

      <Outlet />
    </div>
  );
}
