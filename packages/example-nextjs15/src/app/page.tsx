
import { DemoPart } from './DemoPart';
import { Description } from './components/Description';
import { TabsBlock } from './TabsBlock';
import { CodeBlocks } from './CodeBlocksNext';

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <DemoPart searchParams={searchParams} />

      <TabsBlock />

      <section className="codeBlock-wrapper">
        <CodeBlocks />
      </section>

      <Description />
    </>
  );
}
