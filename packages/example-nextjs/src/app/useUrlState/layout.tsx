import { headers } from 'next/headers';
import React from 'react';
import { decodeState } from 'state-in-url/encodeState';

import { Comp1 } from './Comp1';
import { stateShape } from './state';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';
  // console.log({
  //   runtime: process.env.NEXT_RUNTIME,
  //   sp,
  //   dec: decodeState(sp, stateShape)
  //  })

  return (
    <div>
      <React.Suspense>
        <Comp1 searchParams={decodeState(sp, stateShape)} />
      </React.Suspense>
      {children}
    </div>
  );
}
