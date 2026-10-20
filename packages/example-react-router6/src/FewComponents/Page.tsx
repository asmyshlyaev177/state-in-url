import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Component } from './Component';
import { Pager } from './Pager';

export function Page() {
  const { id } = useParams<'id'>();
  const to = id === '1' ? '2' : '1';
  const loc = useLocation();
  const newUrl = `../${to}`;
  const newUrlFull = `${newUrl}${loc.search}`;

  return (
    <div className="flex h-[1250px] flex-col gap-4" data-testid="wrapper">
      <h1>Page {id}</h1>

      <Component />
      {/* only page 1 has a pager: a trip through page 2 unmounts and remounts it */}
      {id === '1' && <Pager />}

      <Link to={newUrl} className="text-lg" data-testid="link">
        To Page {to}
      </Link>

      <Link
        to={{
          pathname: newUrl,
          search: loc.search,
        }}
        className="text-lg"
        data-testid="link-sp"
      >
        To Page {to} with QS
      </Link>
      <Link to={newUrlFull} data-testid="link-client">
        To Page {to} with QS Client
      </Link>
    </div>
  );
}
