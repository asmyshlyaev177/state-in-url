import React from 'react';
import { useUrlState } from 'state-in-url/astro';

import { stateShape } from './stateShape';

export const Component = ({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) => {
  const { urlState, setUrl } = useUrlState(stateShape, {
    replace: false,
    searchParams,
  });

  return (
    <div className="flex w-fit flex-col gap-2">
      <h2>Per page select</h2>
      <select
        value={urlState.perPage}
        onChange={(ev) =>
          setUrl((curr) => ({ ...curr, perPage: +ev.target.value }))
        }
        data-testid="select"
        className="block text-black"
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};
