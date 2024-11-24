import React from "react";
import { Outlet } from "react-router-dom";
import { Link, useMatches } from "react-router-dom";

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
