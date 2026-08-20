/**
 * Block until every demo app answers through the portless proxy. The specs are
 * parameterised by origin, and `webServer.url` can only wait for one of the
 * seven.
 *
 * That single `url` is also why this has to be loud. `reuseExistingServer`
 * accepts the set as soon as that one app answers, so a half-running set — what
 * a killed run tends to leave behind — is reused rather than replaced, and
 * nothing ever starts the missing app. Waiting silently for it looks exactly
 * like a frozen `pnpm run test`, so name what is missing while waiting and say
 * how to fix it when giving up.
 */
const URLS = [
  'http://example-nextjs14.localhost:1355',
  'http://example-nextjs15.localhost:1355',
  'http://example-nextjs16.localhost:1355',
  'http://example-react.localhost:1355',
  'http://example-react-router6.localhost:1355',
  'http://example-remix2.localhost:1355',
  'http://example-react-router7.localhost:1355',
];
// By the time this runs, `webServer` has already seen one app answer, so the
// rest are seconds behind it — not the three minutes a cold boot once needed.
const TIMEOUT_MS = 60_000;
const RETRY_MS = 250;
const PROBE_TIMEOUT_MS = 2_000;
const REPORT_EVERY_MS = 5_000;

// A TCP connect proves nothing here: all seven share the proxy's port, which is
// listening long before any app has registered a route behind it.
//
// Neither does a request for `/`. Portless answers an unregistered hostname with
// its own 404 page, and example-nextjs14/15 answer 404 there themselves — so a
// run passed this gate with example-remix2 never registered, and every one of
// its tests then failed against that 404 page. Probe a route all seven serve
// and demand a 200: that is the app answering, not the proxy apologising.
//
// Hostnames are safe now where they were not before: the proxy binds 127.0.0.1
// and ::1 both, so `localhost` resolving to the family the app did not pick —
// which is how CI once failed on 5180 for a full three minutes — cannot happen.
const PROBE_PATH = '/test-ssr-usp';

const answers = async (url: string) => {
  try {
    const response = await fetch(url + PROBE_PATH, {
      // Node's fetch has no default timeout, and this runs inside a deadline
      // loop — one request that hangs would hang the whole suite past it.
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    });
    return response.status === 200;
  } catch {
    return false;
  }
};

async function whoIsDown() {
  const states = await Promise.all(
    URLS.map(async (url) => [url, await answers(url)] as const),
  );
  return states.filter(([, up]) => !up).map(([url]) => url);
}

export default async function globalSetup() {
  const deadline = Date.now() + TIMEOUT_MS;
  let nextReport = Date.now() + REPORT_EVERY_MS;
  let down = await whoIsDown();

  while (down.length && Date.now() < deadline) {
    if (Date.now() >= nextReport) {
      console.log(
        `Waiting for ${down.length} demo server(s): ${down.join(', ')}`,
      );
      nextReport = Date.now() + REPORT_EVERY_MS;
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_MS));
    down = await whoIsDown();
  }

  if (!down.length) return;

  throw new Error(
    `Demo server(s) never came up at ${down.join(', ')}. ` +
      'A previous run can leave the other six behind, and Playwright reuses ' +
      'those without noticing the gap — `pnpm run kill` clears them, then retry.',
  );
}
