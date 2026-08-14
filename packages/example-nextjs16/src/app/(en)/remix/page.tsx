import { copy } from '../../i18n/copy/en';
import { DemoPage } from '../../pages/DemoPage';
import { pageMetadata } from '../../seoStuff';
import { CodeBlocksRR } from './CodeBlocksRR';

export const metadata = pageMetadata({
  path: '/remix',
  title: copy.meta.remix.title,
  description: copy.meta.remix.description,
});

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  return (
    <DemoPage searchParams={searchParams} copy={copy} codeBlocks={<CodeBlocksRR copy={copy.quickStart} />} />
  );
}
