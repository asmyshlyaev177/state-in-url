import React from 'react';

import { AiSkills } from '../components/AiSkills';
import { Comparison } from '../components/Comparison';
import { Description } from '../components/Description';
import { Faq } from '../components/Faq';
import { DemoPart } from '../DemoPart';
import type { SiteCopy } from '../i18n/copy/types';
import { TabsBlock } from '../TabsBlock';

/**
 * The body every public page shares: the live demo, the router tabs, that
 * router's code samples, and the prose.
 *
 * The three English routes and their eight translations are eleven times three
 * pages rendering this. Only two things differ — which language the copy is in,
 * and which router's samples are shown — so both arrive as props and there is
 * one implementation to keep correct.
 *
 * `codeBlocks` is a node rather than a router name because each variant is a
 * separate module of highlighted samples, and passing the element keeps this
 * component from importing all three into every route chunk.
 *
 * The AI-skills section and the FAQ are homepage-only, as the skills always
 * were: both are router-agnostic and the router pages are variants of the same
 * demo, not places to repeat them — a FAQ repeated on four URLs is four
 * candidates for the same rich result.
 */
export async function DemoPage({
  searchParams,
  copy,
  codeBlocks,
  aiSkills = false,
  faq = false,
  vsHref = '/vs/nuqs',
  nextjsHref = '/nextjs',
}: {
  searchParams: Promise<object>;
  copy: SiteCopy;
  codeBlocks: React.ReactNode;
  aiSkills?: boolean;
  faq?: boolean;
  /** Locale-aware href of the full comparison page. */
  vsHref?: string;
  /** Locale-aware href of the Next.js guide. */
  nextjsHref?: string;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <>
      <DemoPart searchParams={resolvedSearchParams} copy={copy} />

      <div className="instructions">
        <TabsBlock copy={copy.tabs} />

        <section className="codeBlock-wrapper">{codeBlocks}</section>
      </div>

      {aiSkills && <AiSkills copy={copy} />}

      <Comparison copy={copy.comparison} fullComparisonHref={vsHref} />

      {faq && <Faq copy={copy.faq} id="home-faq-title" />}

      <Description copy={copy} nextjsHref={nextjsHref} />
    </>
  );
}
