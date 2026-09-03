import { highlight } from './highlighter';
import type { Matcher, RenderedMatcher, Tooltip } from './types';

const rendered = new Map<string, Promise<string>>();

function render({ text, lang }: Tooltip) {
  const key = `${lang} ${text}`;
  let html = rendered.get(key);
  if (!html) {
    html = highlight(text, { lang });
    rendered.set(key, html);
  }
  return html;
}

/**
 * Highlight the fake-IDE tooltips on the server.
 *
 * They are authored as constants, so the browser has no reason to carry Shiki
 * to produce them: the core, the tsx and markdown grammars and the oniguruma
 * WASM came to 1,025 KB of eagerly-loaded client JS for markup that never
 * changes. Memoized — the same handful of tooltips is passed to every code
 * block on the page.
 */
export async function renderTooltips(
  matchers: Matcher[] = [],
): Promise<RenderedMatcher[]> {
  return Promise.all(
    matchers.map(async ([word, nodes]) => {
      const html = await Promise.all(nodes.map(render));
      return [word, html] as RenderedMatcher;
    }),
  );
}
