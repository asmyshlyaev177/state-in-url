import { CodeBlocks } from '../CodeBlocksNext';
import { copy } from '../i18n/copy/en';
import { faqPageJsonLd, jsonLdScript } from '../jsonLd';
import { DemoPage } from '../pages/DemoPage';

export default async function Home({ searchParams }: { searchParams: Promise<object> }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript([faqPageJsonLd(copy.faq.items)]) }}
      />
      <DemoPage
        searchParams={searchParams}
        copy={copy}
        codeBlocks={<CodeBlocks copy={copy.quickStart} />}
        aiSkills
        faq
      />
    </>
  );
}
