import React from 'react';

import { AiSkills } from '../components/AiSkills';
import { Description } from '../components/Description';
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
 * The AI-skills section is homepage-only, as it was before: the skills are
 * router-agnostic and the two router pages are variants of the same demo, not
 * places to repeat it.
 */
export async function DemoPage({
  searchParams,
  copy,
  codeBlocks,
  aiSkills = false,
}: {
  searchParams: Promise<object>;
  copy: SiteCopy;
  codeBlocks: React.ReactNode;
  aiSkills?: boolean;
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

      <Description copy={copy} />
    </>
  );
}
