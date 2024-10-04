import dynamicImport from 'next/dynamic';
import React from 'react';

import { DemoPart } from '../DemoPart';
import { Description } from '../components/Description';

const CodeBlocks = dynamicImport(
  () => import('../components/CodeBlocksNext')
    .then((mod) => mod.CodeBlocks),
  {
    loading: () => <div className="codeBlock-wrapper codeBlock-loader"></div>,
  },
);

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <DemoPart searchParams={searchParams} />
      <section className="codeBlock-wrapper">
        {/* TODO:Shiki is a little shitty https://github.com/vercel/next.js/issues/64434
         try https://codehike.org/docs/code/twoslash */}
        <CodeBlocks />
      </section>

      <Description />
    </>
  );
}
