import { copy } from '../../i18n/copy/en';
import { DemoPage } from '../../pages/DemoPage';
import { pageMetadata } from '../../seoStuff';
import { CodeBlocksRR } from './CodeBlocksRR';

export const metadata = pageMetadata({
  path: '/react-router',
  title: copy.meta.reactRouter.title,
  description: copy.meta.reactRouter.description,
});

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  return (
    <DemoPage searchParams={searchParams} copy={copy} codeBlocks={<CodeBlocksRR copy={copy.quickStart} />} />
  );
}
