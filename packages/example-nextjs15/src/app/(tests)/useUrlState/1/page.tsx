import Link from 'next/link';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react';

import { Comp1 } from '../Comp1';
import LinkClient from '../LinkClient';

import { type SearchParams } from '../../../types';

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams

  return (
    <div className="flex flex-col gap-4" data-testid="wrapper">
      <h1>Page 1</h1>

      <React.Suspense>
        <Comp1 searchParams={params} />
      </React.Suspense>

      <Link href="2" className="text-lg" data-testid="link">
        To Page 2
      </Link>
      <Link
        href={{
          pathname: '2',
          query: params as ParsedUrlQueryInput,
        }}
        className="text-lg"
        data-testid="link-sp"
      >
        To Page 2 with QS
      </Link>
      <LinkClient pathname="2">To Page 2 with QS Client</LinkClient>
    </div>
  );
}
