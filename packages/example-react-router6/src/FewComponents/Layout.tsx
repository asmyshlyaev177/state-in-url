import React from "react";
import { Outlet } from "react-router-dom";

import { Component } from "./Component";

export function Layout() {
  return (
    <div>
      <Component />
      <Outlet />
    </div>
  );
}
