import React from 'react';

import { Alternatives } from '../components/Alternatives';
import { Comparison } from '../components/Comparison';
import { File } from '../components/File';
import type { SiteCopy } from '../i18n/copy/types';
import { siteUrl } from '../domain';
import {
  NUQS_ADAPTER_SAMPLE,
  NUQS_FILTERS_SAMPLE,
  SIU_FILTERS_SAMPLE,
} from '../vsSamples';

// Inline code, same treatment as AiSkills: identifier-dense prose where the
// shared <Word> chip would read as noise.
const Mono = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-[0.9em]">{children}</span>
);

const SectionTitle = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <h2 id={id} className="font-display text-ink mb-4 mt-12 text-3xl font-bold">
    {children}
  </h2>
);

/**
 * The `/vs/nuqs` body, shared by the English route and its eight
 * translations, the same split as `DemoPage`: copy arrives as a prop, one
 * implementation to keep correct.
 *
 * Sections lead with a direct answer and the FAQ block doubles as FAQPage
 * JSON-LD (emitted by the routes via `faqJsonLd`) — comparison pages are the
 * most-cited content shape in AI answers, and extractability is what gets a
 * passage quoted.
 */
export function VsNuqsPage({ copy }: { copy: SiteCopy }) {
  const vs = copy.vsNuqs;

  return (
    <div className="flex w-full flex-col items-center">
      <Comparison copy={copy.comparison} />

      <section
        className="flex w-full max-w-[980px] flex-col items-start"
        aria-labelledby="vs-code-title"
      >
        <SectionTitle id="vs-code-title">{vs.codeTitle}</SectionTitle>
        <p className="text-ink2 max-w-[640px] text-base leading-relaxed">
          {vs.codeIntro}
        </p>

        <div className="mt-6 grid w-full gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <File
              name="app/layout.tsx (nuqs)"
              content={NUQS_ADAPTER_SAMPLE}
              className="h-auto"
            />
            <File
              name="filters.tsx (nuqs)"
              content={NUQS_FILTERS_SAMPLE}
              className="h-auto"
            />
          </div>
          <div className="flex flex-col gap-4">
            <File
              name="filters.tsx (state-in-url)"
              content={SIU_FILTERS_SAMPLE}
              className="h-auto"
            />
          </div>
        </div>

        <p className="text-ink2 mt-4 max-w-[640px] text-base leading-relaxed">
          {vs.codeOutro}
        </p>
      </section>

      <section
        className="flex w-full max-w-[640px] flex-col items-start"
        aria-labelledby="vs-setup-title"
      >
        <SectionTitle id="vs-setup-title">{vs.setupTitle}</SectionTitle>
        <p className="text-ink2 text-base leading-relaxed">{vs.setupBody}</p>

        <h3 className="font-display text-ink mb-2 mt-8 text-lg font-bold">
          {vs.ssrTitle}
        </h3>
        <p className="text-ink2 text-base leading-relaxed">
          {vs.ssrLead} <Mono>useSearchParams</Mono>
          {vs.ssrMid} <Mono>Suspense</Mono> {vs.ssrTail}
        </p>

        <h3 className="font-display text-ink mb-2 mt-8 text-lg font-bold">
          {vs.migrateTitle}
        </h3>
        <p className="text-ink2 text-base leading-relaxed">{vs.migrateBody}</p>
      </section>

      <Alternatives copy={copy.vsNuqs.alternatives} />

      <section
        className="flex w-full max-w-[640px] flex-col items-start"
        aria-labelledby="vs-faq-title"
      >
        <SectionTitle id="vs-faq-title">{vs.faqTitle}</SectionTitle>
        <dl className="w-full">
          {vs.faq.map((item) => (
            <div
              key={item.q}
              className="border-b border-[var(--line)] py-4 last:border-b-0"
            >
              <dt className="text-ink font-semibold">{item.q}</dt>
              <dd className="text-ink2 mt-2 text-base leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

/** FAQPage JSON-LD for this page, built from the same copy the DOM renders. */
export function faqJsonLd(copy: SiteCopy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.vsNuqs.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** BreadcrumbList JSON-LD, mirroring the visible breadcrumbs. */
export function breadcrumbJsonLd(copy: SiteCopy, homeHref: string) {
  const prefix = homeHref === '/' ? '' : homeHref;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: copy.chrome.home,
        item: `${siteUrl}${prefix}` || siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: copy.comparison.title,
        item: `${siteUrl}${prefix}/vs/nuqs`,
      },
    ],
  };
}
