import { notFound } from 'next/navigation';

import { localeFromParam } from '../../i18n';
import { copyFor } from '../../i18n/copy';
import { DemoPage } from '../../pages/DemoPage';
import { localeMetadata } from '../../seoStuff';
import { CodeBlocksRR } from '../../(en)/remix/CodeBlocksRR';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localeMetadata({ localeDir: locale, path: '/remix' });
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
    <DemoPage searchParams={searchParams} copy={copy} codeBlocks={<CodeBlocksRR copy={copy.quickStart} />} />
  );
}
