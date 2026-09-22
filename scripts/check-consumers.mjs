// Installs the packed tarball into throwaway projects and checks that every
// subpath resolves, in ESM and in CJS, under each package manager, plus a
// Vitest and a Jest run against the same files.
//
// A tarball, not the workspace: `workspace:*` symlinks state-in-url outside
// node_modules, which changes both pnpm's peer resolution and Vitest's
// externalization — the two things this is meant to measure.
//
// One consumer per framework, not one holding all of them: npm resolves peers
// strictly, and @remix-run/react@2 pins react@^18 while next@16 wants 19, so a
// combined project cannot install at all.
import { execFileSync } from 'node:child_process';
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixture = path.join(repoRoot, 'packages', 'consumer-tests');

const react19 = { react: '^19.2.6', 'react-dom': '^19.2.6' };
const react18 = { react: '^18.3.1', 'react-dom': '^18.3.1' };

// Framework-agnostic subpaths: every consumer checks these, plus its own.
const CORE = [
  '.',
  './react',
  './astro',
  './encodeState',
  './encoder',
  './useSharedState',
  './useLinkProps',
  './useUrlEncode',
  './useUrlStateBase',
  './utils',
];

// The highest supported major of each framework. Older supported majors are
// driven end to end by the Playwright suite against packages/example-*.
const CONSUMERS = [
  { name: 'react-only', deps: react19, subpaths: CORE },
  {
    name: 'next@16',
    // typescript and the @types are declared so `next build` does not stop to
    // auto-install them mid-run.
    deps: {
      ...react19,
      next: '^16.3.0',
      typescript: '^5.9.2',
      '@types/react': '^19.2.14',
      '@types/node': '^24',
    },
    subpaths: [...CORE, './next'],
    // Builds a real App Router app against the tarball. packages/example-* cannot
    // stand in for this: the Vite and Astro examples alias state-in-url to the
    // library source, and the Next examples reach it through a workspace:*
    // symlink, so neither resolves the published exports map out of node_modules.
    nextApp: true,
  },
  {
    name: 'react-router@7',
    deps: { ...react19, 'react-router': '^7.17.0' },
    subpaths: [...CORE, './react-router'],
    // react-router 7 needs the documented workaround; this config carries it.
    runners: 'vitest.config.mjs',
  },
  {
    name: 'react-router-dom@6',
    deps: { ...react18, 'react-router-dom': '^6.30.4' },
    subpaths: [...CORE, './react-router6'],
  },
  {
    name: 'react-router@8',
    deps: { ...react19, 'react-router': '^8.0.0' },
    subpaths: [...CORE, './react-router'],
    // No workaround: react-router 8 must work out of the box.
    runners: 'vitest.noinline.config.mjs',
  },
  {
    name: 'remix@2',
    deps: { ...react18, '@remix-run/react': '^2.17.5' },
    subpaths: [...CORE, './remix'],
  },
];

const RUNNERS = {
  vitest: '^4.1.6',
  jest: '^30.2.0',
  'jest-environment-jsdom': '^30.2.0',
  'happy-dom': '^20.0.2',
  // bun test has no `environment` switch; bun.setup.mjs registers the globals.
  '@happy-dom/global-registrator': '^20.0.2',
  '@testing-library/react': '^16.3.0',
};

// Build scripts are skipped everywhere: nothing here needs a postinstall, and
// pnpm 10 exits non-zero on unapproved ones (ERR_PNPM_IGNORED_BUILDS).
//
// yarn appears twice on purpose. Berry defaults to Plug'n'Play, which resolves
// `exports` far more strictly than a node_modules tree and is the one linker
// that rejects a subpath the map does not name — but most projects set
// nodeLinker: node-modules, so both are worth a column. Under PnP a bare
// `node probe.mjs` cannot resolve anything; it has to go through `yarn node`.
const MANAGERS = {
  pnpm: {
    bin: 'pnpm',
    install: ['install', '--ignore-workspace', '--ignore-scripts'],
  },
  npm: {
    bin: 'npm',
    install: ['install', '--no-audit', '--no-fund', '--ignore-scripts'],
  },
  yarn: {
    bin: 'yarn',
    install: ['install', '--no-immutable', '--mode=skip-build'],
    rc: 'nodeLinker: node-modules\nenableTelemetry: false\n',
  },
  'yarn-pnp': {
    bin: 'yarn',
    install: ['install', '--no-immutable', '--mode=skip-build'],
    rc: 'nodeLinker: pnp\nenableTelemetry: false\npnpEnableEsmLoader: true\n',
    probe: (bin, file) => [bin, ['node', file]],
  },
  bun: { bin: 'bun', install: ['install', '--ignore-scripts'] },
};

const run = (cmd, args, cwd, env) =>
  execFileSync(cmd, args, {
    cwd,
    encoding: 'utf8',
    stdio: 'pipe',
    env: { ...process.env, ...env },
  });

// yarn and bun are devDependencies so the matrix is the same everywhere; fall
// back to PATH for a machine that has them installed some other way.
const binFor = (cmd) => {
  const vendored = path.join(repoRoot, 'node_modules', '.bin', cmd);
  for (const candidate of [vendored, cmd]) {
    try {
      run(candidate, ['--version'], repoRoot);
      return candidate;
    } catch {
      /* try the next one */
    }
  }
  return null;
};

const BIN = Object.fromEntries(
  Object.entries(MANAGERS).map(([name, m]) => [name, binFor(m.bin)]),
);

const pack = () => {
  // prepack separately, then pack with --ignore-scripts: npm interleaves the
  // build's stdout with the --json payload otherwise.
  run('pnpm', ['run', 'prepack'], repoRoot);
  const out = run(
    'npm',
    ['pack', '--pack-destination', tmpdir(), '--json', '--ignore-scripts'],
    repoRoot,
  );
  return path.join(tmpdir(), JSON.parse(out)[0].filename);
};

const makeConsumer = (tarball, consumer) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'state-in-url-consumer-'));
  writeFileSync(
    path.join(dir, 'package.json'),
    JSON.stringify(
      {
        name: 'consumer',
        private: true,
        version: '0.0.0',
        dependencies: {
          ...consumer.deps,
          ...(consumer.runners ? RUNNERS : {}),
          'state-in-url': `file:${tarball}`,
        },
      },
      null,
      2,
    ),
  );
  for (const file of ['subpaths.json', 'probe.mjs', 'probe.cjs']) {
    cpSync(path.join(fixture, file), path.join(dir, file));
  }
  if (consumer.nextApp) {
    cpSync(path.join(fixture, 'next-app'), dir, { recursive: true });
  }
  if (consumer.runners) {
    cpSync(path.join(fixture, 'tests'), path.join(dir, 'tests'), { recursive: true });
    // Each consumer names its own vitest config; it lands as vitest.config.mjs.
    cpSync(path.join(fixture, consumer.runners), path.join(dir, 'vitest.config.mjs'));
    for (const cfg of [
      'jest.config.mjs',
      'jest.setup.cjs',
      'jest.cjs-fallback.config.mjs',
      'bunfig.toml',
      'bun.setup.mjs',
    ]) {
      cpSync(path.join(fixture, cfg), path.join(dir, cfg));
    }
    cpSync(path.join(fixture, 'tests-cjs'), path.join(dir, 'tests-cjs'), {
      recursive: true,
    });
  }
  return dir;
};

const results = [];
const record = (name, fn) => {
  try {
    fn();
    results.push({ name, ok: true });
    return true;
  } catch (error) {
    const detail = [error.stdout, error.stderr, error.message]
      .filter(Boolean)
      .join('\n')
      .trim();
    results.push({ name, ok: false, detail });
    return false;
  }
};

const tarball = pack();
console.log(`packed ${path.basename(tarball)}\n`);

const managers = Object.keys(MANAGERS).filter((m) => BIN[m]);
const missing = Object.keys(MANAGERS).filter((m) => !BIN[m]);

for (const consumer of CONSUMERS) {
  for (const manager of managers) {
    const label = `${consumer.name} + ${manager}`;
    // Runners are a property of the runner's resolver, not the installer's:
    // running them once, under pnpm, is the whole signal.
    const runnerConfig = manager === 'pnpm' ? consumer.runners : null;
    const spec = MANAGERS[manager];
    const dir = makeConsumer(tarball, { ...consumer, runners: runnerConfig });
    const probeEnv = { PROBE_SUBPATHS: consumer.subpaths.join(',') };
    if (spec.rc) writeFileSync(path.join(dir, '.yarnrc.yml'), spec.rc);
    const probeCmd = (file) =>
      spec.probe ? spec.probe(BIN[manager], file) : [process.execPath, [file]];

    try {
      if (!record(`${label}: install`, () => run(BIN[manager], spec.install, dir))) {
        continue;
      }
      record(`${label}: ESM import`, () => run(...probeCmd('probe.mjs'), dir, probeEnv));
      record(`${label}: CJS require`, () => run(...probeCmd('probe.cjs'), dir, probeEnv));

      if (consumer.nextApp && manager === 'pnpm') {
        record(`${consumer.name}: real Next app builds`, () =>
          run(path.join(dir, 'node_modules', '.bin', 'next'), ['build'], dir));
      }

      if (runnerConfig) {
        record(`${consumer.name} vitest: ESM + CJS suites`, () =>
          run(path.join(dir, 'node_modules', '.bin', 'vitest'), ['--run'], dir));
        // The .bin entry is a shell shim, so it runs as the executable, not
        // through node; --experimental-vm-modules reaches jest via NODE_OPTIONS.
        record(`${consumer.name} jest: CJS suite`, () =>
          run(path.join(dir, 'node_modules', '.bin', 'jest'), [], dir, {
            NODE_OPTIONS: '--experimental-vm-modules',
          }));
        // Deliberately no flag: this is the mapper route onto the .cjs build.
        record(`${consumer.name} jest: CJS-fallback suite (no flag)`, () =>
          run(
            path.join(dir, 'node_modules', '.bin', 'jest'),
            ['-c', 'jest.cjs-fallback.config.mjs'],
            dir,
          ));
        // A third resolver, beside Node/Vite and Jest's vm, on the same files
        // and with no workaround of its own: bun reads the exports map itself.
        record(`${consumer.name} bun test: ESM + CJS suites`, () =>
          run(BIN.bun, ['test', 'tests/'], dir));
      }
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
}

rmSync(tarball, { force: true });

for (const { name, ok, detail } of results) {
  console.log(`${ok ? 'ok  ' : 'FAIL'}  ${name}`);
  if (!ok) {
    console.log(
      detail
        .split('\n')
        .slice(-60)
        .map((line) => `        ${line}`)
        .join('\n'),
    );
  }
}
if (missing.length) {
  console.log(`\nskipped (not installed): ${missing.join(', ')}`);
}

const failed = results.filter((r) => !r.ok);
if (failed.length) {
  console.error(`\n${failed.length} of ${results.length} checks failed`);
  process.exit(1);
}
// A manager that isn't installed shrinks the matrix without failing it, so CI
// would report a pass for a fraction of the coverage. yarn and bun are
// devDependencies there, so an absence is a broken install, not a local choice.
if (process.env.CI && missing.length) {
  console.error(`\nmissing on CI: ${missing.join(', ')}`);
  process.exit(1);
}
console.log(`\nall ${results.length} checks passed`);
