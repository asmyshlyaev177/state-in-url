import { DemoPart } from '../DemoPart';
import { Description } from '../components/Description';
import { pageMetadata } from '../seoStuff';
import { TabsBlock } from '../TabsBlock';
import { CodeBlocksRR } from './CodeBlocksRR';

export const metadata = pageMetadata({
  path: '/remix',
  title: 'state-in-url for Remix — typed URL state in Remix v2',
  description:
    'Store nested, typed state in the query string with Remix v2. Live demo and setup for the state-in-url useUrlState hook.',
});

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  const resolvedSearchParams = await searchParams;
  return (
    <>
      <DemoPart searchParams={resolvedSearchParams}/>

      <div className="instructions">
        <TabsBlock />

        <section className="codeBlock-wrapper">
          <CodeBlocksRR />
        </section>
      </div>

      <Description />
    </>
  );
}
