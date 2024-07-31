import { headers } from 'next/headers';
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
      <Comp1 searchParams={decodeState(sp, stateShape)} />
      {children}
    </div>
  );
}
