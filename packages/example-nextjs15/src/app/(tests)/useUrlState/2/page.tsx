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
      <h1>Page 2</h1>

      <React.Suspense>
        <Comp1 searchParams={params} />
      </React.Suspense>

      <Link href="1" className="text-lg" data-testid="link">
        To Page 1
      </Link>
      <Link
        href={{
          pathname: '1',
          query: params as ParsedUrlQueryInput,
        }}
        className="text-lg"
        data-testid="link-sp"
      >
        To Page 1 with QS
      </Link>
      <LinkClient pathname="1">To Page 1 with QS Client</LinkClient>
    </div>
  );
}
