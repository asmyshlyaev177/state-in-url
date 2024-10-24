'use client';
import React from 'react';
import { useUrlState } from 'state-in-url/next';

import { stateShape } from './state';

export const Comp1 = ({ searchParams }: { searchParams?: object }) => {
  const { state, updateUrl } = useUrlState({
    defaultState: stateShape,
    searchParams,
    replace: false,
  });

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
