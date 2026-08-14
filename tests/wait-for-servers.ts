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
const TIMEOUT_MS = 180_000;
const RETRY_MS = 250;

const listening = (port: number) =>
  new Promise<boolean>((resolve) => {
    const socket = net
      .connect({ port, host: '127.0.0.1' })
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

async function waitFor(port: number, deadline: number) {
  while (Date.now() < deadline) {
    if (await listening(port)) return;
    await new Promise((resolve) => setTimeout(resolve, RETRY_MS));
  }
  throw new Error(
    `Demo server on port ${port} never came up. Start it with \`pnpm run start:ci\`, ` +
      'or `pnpm run kill` first if a previous run left one wedged.',
  );
}

export default async function globalSetup() {
  const deadline = Date.now() + TIMEOUT_MS;
  await Promise.all(PORTS.map((port) => waitFor(port, deadline)));
}
