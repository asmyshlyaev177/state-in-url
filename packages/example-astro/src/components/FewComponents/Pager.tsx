import React from 'react';
import { useUrlState } from 'state-in-url/astro';

import { pagerShape } from './stateShape';

export const Pager = ({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) => {
  const { urlState, setUrl } = useUrlState(pagerShape, {
    replace: false,
    searchParams,
  });

  return (
    <div className="flex w-fit flex-col gap-2">
      <h2>Page select</h2>
      <select
        value={urlState.page}
        onChange={(ev) => setUrl({ page: +ev.target.value })}
        data-testid="page-select"
        className="block text-black"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};
