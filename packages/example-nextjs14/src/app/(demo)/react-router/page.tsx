import dynamicImport from 'next/dynamic';
import React from 'react';

import { DemoPart } from '../../DemoPart';
import { Description } from '../../components/Description';
import { Tabs } from '../../components/Tabs';

const CodeBlocks = dynamicImport(
  () => import('./CodeBlocksRR').then((mod) => mod.CodeBlocksRR),
  {
    loading: () => <div className="codeBlock-wrapper codeBlock-loader"></div>,
  },
);

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <DemoPart searchParams={searchParams}/>

      <Tabs className="sticky top-1 mt-12" />

      <section className="codeBlock-wrapper">
        <CodeBlocks />
      </section>

      <Description/ >
    </>
  );
}
