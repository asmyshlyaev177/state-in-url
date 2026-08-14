import net from 'node:net';

/**
 * Block until every demo app is listening. The specs are parameterised by
 * origin, and `webServer.url` can only wait for one of the seven.
 *
 * A port list rather than one `webServer` entry per app: six `start:*:ci`
 * scripts depend on `kill-services`, which `kill -9`s every `.next`, vite and
 * remix-serve process. Wireit runs it once per graph; seven separate
 * invocations kill each other.
 */
const PORTS = [3000, 3001, 3002, 5180, 5181, 5182, 5183];
// Both loopback families, never a hostname. `vite preview` binds loopback only
// ("use --host to expose"), and a container whose `localhost` resolves to the
// family it did not pick makes a listening server look dead for the full
// timeout — which is how CI failed on 5180 three minutes after vite announced
// it. Next binds `0.0.0.0` and was never affected.
const HOSTS = ['127.0.0.1', '::1'];
const TIMEOUT_MS = 180_000;
const RETRY_MS = 250;

const connects = (port: number, host: string) =>
  new Promise<boolean>((resolve) => {
    const socket = net
      .connect({ port, host })
      .setTimeout(1000)
      .on('connect', () => {
        socket.destroy();
        resolve(true);
      })
      .on('error', () => resolve(false))
      .on('timeout', () => {
        socket.destroy();
        resolve(false);
      });
  });

const listening = async (port: number) =>
  (await Promise.all(HOSTS.map((host) => connects(port, host)))).some(Boolean);

async function waitFor(port: number, deadline: number) {
  while (Date.now() < deadline) {
    if (await listening(port)) return true;
    await new Promise((resolve) => setTimeout(resolve, RETRY_MS));
  }
  return false;
}

export default async function globalSetup() {
  const deadline = Date.now() + TIMEOUT_MS;
  const states = await Promise.all(
    PORTS.map(async (port) => [port, await waitFor(port, deadline)] as const),
  );

  const down = states.filter(([, up]) => !up).map(([port]) => port);
  if (!down.length) return;

  const up = states.filter(([, isUp]) => isUp).map(([port]) => port);
  throw new Error(
    `Demo server(s) never came up on port(s) ${down.join(', ')} — up: ${up.join(', ') || 'none'}. ` +
      'Start them with `pnpm run start:ci`, or `pnpm run kill` first if a previous run left one wedged.',
  );
}
