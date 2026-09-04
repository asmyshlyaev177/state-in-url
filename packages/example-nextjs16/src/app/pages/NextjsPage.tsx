import React from 'react';

import { Faq } from '../components/Faq';
import { File } from '../components/File';
import { Link } from '../components/Link';
import { Word } from '../components/Word';
import type { SiteCopy } from '../i18n/copy/types';
import {
  CLIENT_SAMPLE,
  HISTORY_SAMPLE,
  LAYOUT_SAMPLE,
  PROXY_SAMPLE,
  SERVER_PAGE_SAMPLE,
} from '../nextjsSamples';

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

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-ink mb-2 mt-8 text-lg font-bold">
    {children}
  </h3>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-ink2 max-w-[640px] text-base leading-relaxed">
    {children}
  </p>
);

/**
 * The `/nextjs` guide body, shared by the English route and its translations
 * the way `VsNuqsPage` is. It carries what the demo pages do not: the
 * App-Router-specific mechanics — Server Components, prerendering, layouts,
 * history — that the "url state management nextjs" searches ask about, so the
 * page is its own document rather than the home demo under a second URL.
 *
 * The Suspense paragraph is `copy.description.suspense*`, the same one the
 * home page renders: one translation, one place to correct it.
 */
export function NextjsPage({
  copy,
  homeHref,
  vsHref,
}: {
  copy: SiteCopy;
  homeHref: string;
  vsHref: string;
}) {
  const guide = copy.nextjs;
  const d = copy.description;

  return (
    <div className="flex w-full flex-col items-center">
      <section
        className="flex w-full max-w-[980px] flex-col items-start"
        aria-labelledby="nextjs-title"
      >
        <SectionTitle id="nextjs-title">{guide.title}</SectionTitle>
        <Body>{guide.intro}</Body>
        <p className="text-ink2 mt-3 text-base leading-relaxed">
          {guide.demoLead}{' '}
          <Link
            href={homeHref}
            className="font-semibold text-[var(--accent-on-soft)] hover:underline"
          >
            {guide.demoLinkText}
          </Link>
          {guide.demoTail}
        </p>

        <SubTitle>{guide.serverTitle}</SubTitle>
        <Body>{guide.serverBody}</Body>
        <div className="mt-4 grid w-full gap-4 md:grid-cols-2">
          <File name="page.tsx" content={SERVER_PAGE_SAMPLE} className="h-auto" />
          <File name="JobsList.tsx" content={CLIENT_SAMPLE} className="h-auto" />
        </div>

        <SubTitle>{guide.suspenseTitle}</SubTitle>
        <Body>
          {d.suspenseLead} <Word>useSearchParams</Word>
          {d.suspenseAfterHook} <Word>Suspense</Word> {d.suspenseAfterBoundary}{' '}
          <Word>cacheComponents</Word> {d.suspenseAfterFlag}{' '}
          <Word>history.pushState</Word> {d.suspenseTail} {guide.prerenderNote}
        </Body>

        <SubTitle>{guide.layoutTitle}</SubTitle>
        <Body>{guide.layoutBody}</Body>
        <div className="mt-4 grid w-full gap-4 md:grid-cols-2">
          <File name="proxy.ts" content={PROXY_SAMPLE} className="h-auto" />
          <File name="layout.tsx" content={LAYOUT_SAMPLE} className="h-auto" />
        </div>

        <SubTitle>{guide.historyTitle}</SubTitle>
        <Body>{guide.historyBody}</Body>

        <SubTitle>{guide.inputTitle}</SubTitle>
        <Body>{guide.inputBody}</Body>
        <div className="mt-4 w-full max-w-[640px]">
          <File name="useJobsState — usage" content={HISTORY_SAMPLE} className="h-auto" />
        </div>

        <p className="text-ink2 mt-8 text-base leading-relaxed">
          <Link
            href={vsHref}
            className="font-semibold text-[var(--accent-on-soft)] hover:underline"
          >
            {copy.comparison.fullLink}
          </Link>
        </p>
      </section>

      <Faq copy={guide.faq} id="nextjs-faq-title" />
    </div>
  );
}
