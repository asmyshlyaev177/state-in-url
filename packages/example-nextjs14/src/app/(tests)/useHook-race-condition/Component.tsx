'use client';

import React, { Suspense } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { UseStateComp } from './UseStateComp';
import { useTestState } from './useTestState';


export function Component() {
  const { urlState } = useTestState();
  const router = useRouter();
  const pathname = usePathname()

  const updates = React.useRef<boolean[]>([])

  React.useLayoutEffect(() => {
    updates.current.push(urlState.showForm)
  }, [urlState])

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Test for multiple useState hook instances and setUrl race condition
        </h1>
      </header>

      <button onClick={() => {
        router.push(pathname)
      }}>Reload</button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: "12px" }}>
        <Suspense>
          <UseStateComp />
        </Suspense>

        <Suspense>
          {urlState.showForm && <UseStateComp showCheckbox={false} />}
        </Suspense>
      </div>

      <div data-testid="updates-array">
        {JSON.stringify(updates.current)}
      </div>

    </div>
  );
}
