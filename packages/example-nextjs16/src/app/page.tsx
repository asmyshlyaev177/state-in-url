import { DemoPart } from './DemoPart';
import { AiSkills } from './components/AiSkills';
import { Description } from './components/Description';
import { TabsBlock } from './TabsBlock';
import { CodeBlocks } from './CodeBlocksNext';

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  const resolvedSearchParams = await searchParams;
  return (
    <>
      <DemoPart searchParams={resolvedSearchParams} />

      <div className="instructions">
        <TabsBlock />

        <section className="codeBlock-wrapper">
          <CodeBlocks />
        </section>
      </div>

      <AiSkills />

      <Description />
    </>
  );
}
