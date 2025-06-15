
import { DemoPart } from '../../DemoPart';
import { Description } from '../../components/Description';
import { TabsBlock } from '../TabsBlock';
import { CodeBlocksRR } from './CodeBlocksRR';

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <DemoPart searchParams={searchParams}/>

      <TabsBlock />

      <section className="codeBlock-wrapper">
        <CodeBlocksRR />
      </section>

      <Description/ >
    </>
  );
}
