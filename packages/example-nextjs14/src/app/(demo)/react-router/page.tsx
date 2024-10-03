import dynamicImport from 'next/dynamic';
import React from 'react';

import { DemoPart } from '../../DemoPart';

const CodeBlocks = dynamicImport(
  () => import('../../components/CodeBlocksNext').then((mod) => mod.CodeBlocks),
  {
    loading: () => <div className="codeBlock-wrapper codeBlock-loader"></div>,
  },
);

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <DemoPart searchParams={searchParams}/>

      <section className="codeBlock-wrapper">
        <CodeBlocks />
      </section>
    </>
  );
}
