'use client';
import React from 'react';
import { useUrlState } from 'state-in-url/next';

import { pagerShape } from './state';

export const Pager = ({ searchParams }: { searchParams?: object }) => {
  const { urlState, setUrl } = useUrlState(pagerShape, {
    searchParams,
    replace: false,
  });

  return (
    <div className="flex gap-2">
      <h2>Page select</h2>
      <select
        value={urlState.page}
        onChange={(ev) => setUrl({ page: +ev.target.value })}
        className="text-black"
        data-testid="page-select"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};
