import { copy } from '../../i18n/copy/en';
import {
  NUQS_ADAPTER_SAMPLE,
  NUQS_FILTERS_SAMPLE,
  SIU_FILTERS_SAMPLE,
} from '../../vsSamples';

/**
 * `/vs/nuqs.md` — the Markdown mirror of the comparison page.
 *
 * Unlike the demo pages' mirrors (which all serve public/llms.txt, one page
 * repeated per router), this page has content of its own, so its mirror is
 * built from the same copy module and code samples the page renders — the
 * mirror cannot claim a number the page does not show.
 *
 * Cacheable: one representation, nothing negotiated behind it.
 */
export const dynamic = 'force-static';

const COMPARISON_ROWS = [
  'setup',
  'stateShape',
  'reuse',
  'nested',
  'dates',
  'size',
  'deps',
  'routers',
] as const;

const ALT_ROWS = [
  ['siu', 'state-in-url'],
  ['nuqs', 'nuqs'],
  ['tanstack', 'TanStack Router'],
  ['useQueryParams', 'use-query-params'],
  ['useSearchParams', 'useSearchParams'],
] as const;

function doc(): string {
  const c = copy.comparison;
  const v = copy.vsNuqs;
  const a = v.alternatives;

  const comparisonTable = [
    `| ${c.colFeature} | state-in-url | nuqs |`,
    '| --- | --- | --- |',
    ...COMPARISON_ROWS.map(
      (k) => `| ${c.rows[k].label} | ${c.rows[k].siu} | ${c.rows[k].nuqs} |`,
    ),
  ].join('\n');

  const altTable = [
    `| ${a.colLibrary} | ${a.colSetup} | ${a.colNested} | ${a.colSize} | ${a.colPick} |`,
    '| --- | --- | --- | --- | --- |',
    ...ALT_ROWS.map(
      ([k, name]) =>
        `| ${name} | ${a.rows[k].setup} | ${a.rows[k].nested} | ${a.rows[k].size} | ${a.rows[k].pick} |`,
    ),
  ].join('\n');

  const faq = v.faq.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n');

  return `# ${c.title}

> ${copy.meta.vsNuqs.description}

Canonical: <https://state-in-url.dev/vs/nuqs>. Library reference: <https://state-in-url.dev/llms.txt>.

${c.intro}

${comparisonTable}

${c.sizeNote}

${c.outro}

## ${v.codeTitle}

${v.codeIntro}

nuqs:

\`\`\`tsx
${NUQS_ADAPTER_SAMPLE}
\`\`\`

\`\`\`tsx
${NUQS_FILTERS_SAMPLE}
\`\`\`

state-in-url:

\`\`\`tsx
${SIU_FILTERS_SAMPLE}
\`\`\`

${v.codeOutro}

## ${v.setupTitle}

${v.setupBody}

### ${v.ssrTitle}

${v.ssrLead} useSearchParams${v.ssrMid} Suspense ${v.ssrTail}

### ${v.migrateTitle}

${v.migrateBody}

## ${a.title}

${a.intro}

${altTable}

## ${v.faqTitle}

${faq}
`;
}

export async function GET() {
  return new Response(doc(), {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
