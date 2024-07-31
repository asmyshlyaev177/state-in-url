'use client';
import React from 'react';
import { isSSR } from 'state-in-url';
import { decodeState } from 'state-in-url';
import { useUrlState } from 'state-in-url/next';

import { stateShape } from './state';

export const Comp1 = ({ searchParams }: { searchParams?: object }) => {
  // TODO: move this part inside the hook?
  const sp = isSSR()
    ? searchParams
    : decodeState(window.location.search, stateShape);
  const { state, updateUrl } = useUrlState(stateShape, sp);

  return (
    <div className="flex gap-2">
      <h2>Per page select</h2>
      <select
        value={state.perPage}
        onChange={(ev) =>
          updateUrl((curr) => ({ ...curr, perPage: +ev.target.value }))
        }
        className="text-black"
        data-testid="select"
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};
