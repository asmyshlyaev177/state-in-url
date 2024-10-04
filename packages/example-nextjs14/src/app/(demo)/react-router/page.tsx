import dynamicImport from 'next/dynamic';
import React from 'react';

import { DemoPart } from '../../DemoPart';
import { Description } from '../../components/Description';

const CodeBlocks = dynamicImport(
  () => import('../../components/CodeBlocksRR').then((mod) => mod.CodeBlocksRR),
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

      <Description/ >
    </>
  );
}
