import { llmsTxtResponse } from '../llmsTxtResponse';

/**
 * `/astro.md` — the Markdown mirror of the Astro demo page.
 * See llmsTxtResponse.ts for why all three mirrors serve the same document.
 */
export const dynamic = 'force-static';

export const GET = llmsTxtResponse;
