'use client';
import { useUrlState } from 'state-in-url/next';

// Module scope: a fresh object each render breaks state sharing.
const FILTERS = { sort: 'name', page: 1 };

export function Filters() {
  const { urlState, setUrl } = useUrlState(FILTERS);

  return (
    <button
      data-testid="btn"
      onClick={() => setUrl({ page: urlState.page + 1 })}
    >
      page {urlState.page} sort {urlState.sort}
    </button>
  );
}
