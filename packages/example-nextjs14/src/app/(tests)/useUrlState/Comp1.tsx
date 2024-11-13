'use client';
import React from 'react';
import { useUrlState } from 'state-in-url/next';

import { stateShape } from './state';

export const Comp1 = ({ searchParams }: { searchParams?: object }) => {
  const { urlState, setUrl } = useUrlState(stateShape, {
    searchParams,
    replace: false,
  });

  return (
    <div className="flex gap-2">
      <h2>Per page select</h2>
      <select
        value={urlState.perPage}
        onChange={(ev) =>
          setUrl((curr) => ({ ...curr, perPage: +ev.target.value }))
        }
        data-testid="select"
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};
