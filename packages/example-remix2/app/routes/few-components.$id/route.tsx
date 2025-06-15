import { Link, useLocation, useParams } from "@remix-run/react";

import { Component } from "./Component";

export default function FewComponents() {
  const { id } = useParams<"id">();
  const to = id === "1" ? "2" : "1";
  const loc = useLocation();
  const newUrl = `../${to}`;
  const newUrlFull = `${newUrl}${loc.search}`;

  return (
    <div className="flex flex-col gap-4 h-[1250px]" data-testid="wrapper">
      <h1>Page {id}</h1>

      <Component />
      <Component />

      <Link relative="path" to={newUrl} className="text-lg" data-testid="link">
        To Page {to}
      </Link>

      <Link
        to={{
          pathname: newUrl,
          search: loc.search,
        }}
        relative="path"
        className="text-lg"
        data-testid="link-sp"
      >
        To Page {to} with QS
      </Link>
      <Link relative="path" to={newUrlFull} data-testid="link-client">
        To Page {to} with QS Client
      </Link>
    </div>
  );
}
