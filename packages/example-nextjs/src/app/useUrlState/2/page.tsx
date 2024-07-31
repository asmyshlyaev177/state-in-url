import Link from 'next/link';
import { ParsedUrlQueryInput } from 'querystring';

import { Comp1 } from '../Comp1';
import LinkClient from '../LinkClient';

// TODO: note in Readme about sp leads to dynamic rendering
export default async function Page({ searchParams }: { searchParams: object }) {
  return (
    <div className="flex flex-col gap-4" data-testid="wrapper">
      <h1>Page 2</h1>

      <Comp1 searchParams={searchParams} />

      <Link href="1" className="text-lg" data-testid="link">
        To Page 1
      </Link>
      <Link
        href={{
          pathname: '1',
          query: searchParams as ParsedUrlQueryInput,
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
