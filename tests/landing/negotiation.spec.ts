import { expect, test } from '@playwright/test';

/**
 * What the landing serves, and to whom.
 *
 * `src/proxy.ts` sends an agent — `Accept: text/markdown`, or a user-agent on
 * the reader list — from `/` to `/index.md`, and renders the page for everyone
 * else. A redirect rather than a body, so `/` keeps one representation; see
 * the note on that test.
 *
 * Everything here is asserted over HTTP through the `request` fixture, so no
 * browser is involved and one project is enough. `request.get` follows
 * redirects unless told not to, so a test about the *hop* passes
 * `maxRedirects: 0` and one about the *document* does not.
 */
test.describe('Landing content negotiation (landing only)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  const BROWSER = {
    'user-agent':
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  };

  test('`/` answers an agent with a redirect, never with a body', async ({
    request,
  }) => {
    // The one rule that matters. Shared caches key on the URL, Vercel's edge
    // store ignores `Vary`, and Next overwrites `Vary` on App Router responses
    // — the HTML at `/` varies on `rsc, next-router-state-tree, …` with no
    // `Accept` in sight. A Markdown *body* under `/` is therefore one cacheable
    // response away from being served to every reader, at 200, with nothing to
    // alert on. Do not turn this back into a body.
    const response = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/markdown' },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(307);
    expect(new URL(response.headers()['location'], 'http://x').pathname).toBe(
      '/index.md',
    );

    // A 308 would be heuristically cacheable under RFC 9111, and one held
    // under `/` would send readers to the mirror.
    expect(response.headers()['cache-control']).toBe('no-store');
  });

  test('the Markdown variant carries the same terms as robots.txt', async ({
    request,
  }) => {
    // A crawler that never fetched robots.txt has no other way to learn them.
    const response = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/markdown' },
    });

    const signal = response.headers()['content-signal'];
    expect(signal).toBeDefined();

    const robots = await (await request.get('/robots.txt')).text();
    expect(robots).toContain(`Content-Signal: ${signal}`);
  });

  test('a coding agent gets Markdown from its user-agent alone', async ({
    request,
  }) => {
    // Most agents never send `Accept: text/markdown`; they arrive as a plain
    // HTTP client and take what comes back — and mostly not under their own
    // name either: Cursor is `got`, Windsurf is `colly`, Claude Code is
    // `axios`. The library signature is the only thing on the request.
    for (const ua of [
      'curl/8.15.0',
      'Claude-User/1.0',
      'python-requests/2.32',
      'axios/1.8.4',
      'got (https://github.com/sindresorhus/got)',
      'colly - https://github.com/gocolly/colly',
      'DuckAssistBot/1.0',
      'MistralAI-User/1.0',
    ]) {
      const response = await request.get('/', {
        headers: { 'user-agent': ua, accept: '*/*' },
      });
      expect(
        response.headers()['content-type'],
        `${ua} should be served Markdown`,
      ).toContain('text/markdown');
    }
  });

  test('crawlers and headless browsers are always served HTML', async ({
    request,
  }) => {
    // A crawler and a reader must be served the same representation — that is
    // the line between a Markdown variant and cloaking. The Anthropic entries
    // are the interesting ones: every bulk crawler whose name contains a token
    // from the reader list has to be named in HTML_ONLY to be caught, and
    // Claude-Web and anthropic-ai once weren't.
    for (const ua of [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/141.0.0.0 Safari/537.36',
      'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
      'Claude-Web/1.0',
      'anthropic-ai',
      'Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)',
      'facebookexternalhit/1.1',
    ]) {
      const response = await request.get('/', {
        headers: { 'user-agent': ua, accept: '*/*' },
      });
      expect(
        response.headers()['content-type'],
        `${ua} should be served HTML`,
      ).toContain('text/html');
    }
  });

  test('`text/plain` counts only when it outranks `text/html`', async ({
    request,
  }) => {
    // Answered with `text/markdown` rather than the `text/plain` asked for:
    // the redirect goes to one URL, and `/index.md` declares Markdown. Same
    // bytes either way.
    const preferred = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/plain, text/html;q=0.9' },
    });
    expect(preferred.headers()['content-type']).toContain('text/markdown');

    // A browser lists text/plain too, below text/html. That is not a request
    // for Markdown, and reading it as one would hand every Firefox user a wall
    // of text.
    const incidental = await request.get('/', {
      headers: {
        ...BROWSER,
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5',
      },
    });
    expect(incidental.headers()['content-type']).toContain('text/html');
  });

  test('a browser gets the rendered page', async ({ request }) => {
    const response = await request.get('/', { headers: BROWSER });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');
    expect(await response.text()).toContain('<!DOCTYPE html>');
  });

  test('the HTML is CDN-cacheable while the Markdown is not', async ({
    request,
  }) => {
    // `/` is dynamic — it renders the demo from the query string — but
    // Vercel's CDN key is the full request URL, so each distinct state gets
    // its own entry and caching it cannot serve the wrong one.
    for (const path of ['/', '/?name=cached']) {
      const html = await request.get(path, { headers: BROWSER });
      const cacheControl = html.headers()['cache-control'] ?? '';

      expect(cacheControl, `${path} should be CDN-cacheable`).toContain(
        's-maxage',
      );
      expect(cacheControl).not.toContain('no-store');
    }

    // Nothing under `/` may ever be a cacheable Markdown body — the whole
    // reason agents are redirected off it. Asserted for every client that
    // could plausibly ask, not just one.
    for (const accept of ['text/markdown', 'text/plain', '*/*']) {
      const response = await request.get('/', {
        headers: { 'user-agent': 'curl/8.15.0', accept },
        maxRedirects: 0,
      });

      if (response.status() === 200) {
        expect(
          response.headers()['content-type'],
          `a 200 at / must be HTML, not a second representation`,
        ).toContain('text/html');
        continue;
      }

      expect(response.status()).toBe(307);
      expect(response.headers()['cache-control']).toBe('no-store');
    }
  });

  test('only `/` is negotiated', async ({ request }) => {
    // The proxy matches `/` and the fixture routes, nothing else. A demo page
    // asked for Markdown is still a demo page; its mirror is `<route>.md`.
    for (const path of ['/react-router', '/remix', '/ja', '/vs/nuqs']) {
      const response = await request.get(path, {
        headers: { ...BROWSER, accept: 'text/markdown' },
        maxRedirects: 0,
      });

      expect(response.status(), `${path} should not negotiate`).toBe(200);
      expect(response.headers()['content-type']).toContain('text/html');
    }
  });

  test('the agent is sent to the real document', async ({ request }) => {
    // The redirect is only worth anything if what it lands on is the llms.txt.
    const response = await request.get('/', {
      headers: { ...BROWSER, accept: 'text/markdown' },
    });
    const body = await response.text();

    expect(body).toContain('# state-in-url');
    expect(body).toContain('## For AI coding agents — preferred path');
    expect(body).toBe(await (await request.get('/llms.txt')).text());
  });

  test('the .md mirrors are single-representation, and so do cache', async ({
    request,
  }) => {
    // Unlike `/`, these URLs have one representation each: nothing behind them
    // can be handed to the wrong caller, so they are ordinary static assets.
    for (const path of ['/index.md', '/react-router.md', '/remix.md']) {
      const response = await request.get(path, { headers: BROWSER });

      expect(response.status(), `${path} should exist`).toBe(200);
      expect(response.headers()['content-type']).toContain('text/markdown');
      expect(response.headers()['cache-control']).not.toContain('no-store');
    }
  });
});
