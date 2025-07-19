import { headers } from 'next/headers';
import React from 'react';
import { decodeState } from 'state-in-url/encodeState';

import { stateShape } from './state';

import dynamic from 'next/dynamic';

const Comp1 = dynamic(() => import('./Comp1').then(mod => mod.Comp1))

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';

  return (
    <div>
      <React.Suspense>
        <Comp1 searchParams={decodeState(sp, stateShape)} />
      </React.Suspense>
      {children}
    </div>
  );
}
