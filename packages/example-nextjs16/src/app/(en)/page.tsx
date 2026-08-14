import { CodeBlocks } from '../CodeBlocksNext';
import { copy } from '../i18n/copy/en';
import { DemoPage } from '../pages/DemoPage';

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  return (
    <DemoPage
      searchParams={searchParams}
      copy={copy}
      codeBlocks={<CodeBlocks copy={copy.quickStart} />}
      aiSkills
    />
  );
}
