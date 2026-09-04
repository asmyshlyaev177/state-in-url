import { copy } from '../../i18n/copy/en';
import { DemoPage } from '../../pages/DemoPage';
import { pageMetadata } from '../../seoStuff';
import { CodeBlocksAstro } from './CodeBlocksAstro';

export const metadata = pageMetadata({
  path: '/astro',
  title: copy.meta.astro.title,
  description: copy.meta.astro.description,
});

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  return (
    <DemoPage searchParams={searchParams} copy={copy} codeBlocks={<CodeBlocksAstro copy={copy.quickStart} />} />
  );
}
