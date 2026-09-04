import React from 'react';

import { UseStateComp } from './UseStateComp';
import { useTestState } from './useTestState';

// the island renders on the server too, where useLayoutEffect warns
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

export function UseHookRaceConditionPage({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) {
  const { urlState } = useTestState(searchParams);

  const updates = React.useRef<boolean[]>([]);

  useIsomorphicLayoutEffect(() => {
    updates.current.push(urlState.showForm);
  }, [urlState]);

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-2xl">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Test for multiple useState hook instances and setUrl race condition
        </h1>
      </header>

      <button
        onClick={() => {
          window.location.assign(window.location.pathname);
        }}
      >
        Reload
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <UseStateComp searchParams={searchParams} />

        {urlState.showForm && (
          <UseStateComp showCheckbox={false} searchParams={searchParams} />
        )}
      </div>

      <div data-testid="updates-array">{JSON.stringify(updates.current)}</div>
    </div>
  );
}
