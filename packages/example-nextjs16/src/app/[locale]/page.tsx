import { notFound } from 'next/navigation';

import { CodeBlocks } from '../CodeBlocksNext';
import { localeFromParam } from '../i18n';
import { copyFor } from '../i18n/copy';
import { faqPageJsonLd, jsonLdScript } from '../jsonLd';
import { DemoPage } from '../pages/DemoPage';
import { localeMetadata } from '../seoStuff';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localeMetadata({ localeDir: locale, path: '' });
}

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<object>;
}) {
  const { locale: dir } = await params;
  const locale = localeFromParam(dir);
  if (!locale) notFound();

  const copy = copyFor(locale.code);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript([faqPageJsonLd(copy.faq.items)]) }}
      />
      <DemoPage
        searchParams={searchParams}
        copy={copy}
        vsHref={`/${dir}/vs/nuqs`}
        nextjsHref={`/${dir}/nextjs`}
        codeBlocks={<CodeBlocks copy={copy.quickStart} />}
        aiSkills
        faq
      />
    </>
  );
}
