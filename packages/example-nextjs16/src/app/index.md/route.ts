import { llmsTxtResponse } from '../llmsTxtResponse';

/**
 * `/index.md` — the homepage's Markdown mirror, under the name an agent
 * guesses when it appends `.md` to a site root. See llmsTxtResponse.ts.
 */
export const dynamic = 'force-static';

export const GET = llmsTxtResponse;
