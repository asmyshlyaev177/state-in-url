import { Suspense } from 'react';

import { StatusUsp } from '../../Status-for-test-usp';

export default async function Home() {
  return (
    <Suspense fallback={null}>
      <StatusUsp />
    </Suspense>
  );
}

export const runtime = 'edge';
