import { copy } from '../i18n/copy/en';
import {
  CLIENT_SAMPLE,
  HISTORY_SAMPLE,
  LAYOUT_SAMPLE,
  PROXY_SAMPLE,
  SERVER_PAGE_SAMPLE,
} from '../nextjsSamples';

/**
 * `/nextjs.md` — the Markdown mirror of the Next.js guide, built from the
 * same copy and samples the page renders (the `/vs/nuqs.md` arrangement), so
 * it cannot describe a behaviour the page does not.
 */
export const dynamic = 'force-static';

const fence = (code: string) => `\`\`\`tsx\n${code}\n\`\`\``;

function doc(): string {
  const g = copy.nextjs;
  const d = copy.description;
  const suspense = `${d.suspenseLead} useSearchParams${d.suspenseAfterHook} Suspense ${d.suspenseAfterBoundary} cacheComponents ${d.suspenseAfterFlag} history.pushState ${d.suspenseTail} ${g.prerenderNote}`;
  const faq = g.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n');

  return `# ${g.title}

> ${copy.meta.nextjs.description}

Canonical: <https://state-in-url.dev/nextjs>. Library reference: <https://state-in-url.dev/llms.txt>. Comparison: <https://state-in-url.dev/vs/nuqs>.

${g.intro}

## ${g.serverTitle}

${g.serverBody}

${fence(SERVER_PAGE_SAMPLE)}

${fence(CLIENT_SAMPLE)}

## ${g.suspenseTitle}

${suspense}

## ${g.layoutTitle}

${g.layoutBody}

${fence(PROXY_SAMPLE)}

${fence(LAYOUT_SAMPLE)}

## ${g.historyTitle}

${g.historyBody}

## ${g.inputTitle}

${g.inputBody}

${fence(HISTORY_SAMPLE)}

## ${g.faq.title}

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
