// ESM half of the resolution probe: plain Node, no test runner, so it reports
// what the package manager's layout actually produced rather than what a
// bundler could paper over. Exits non-zero with a list of failures.
import { readFileSync } from 'node:fs';

const { subpaths } = JSON.parse(
  readFileSync(new URL('./subpaths.json', import.meta.url), 'utf8'),
);

// Each consumer installs one framework, so it probes the framework-agnostic
// subpaths plus its own; PROBE_SUBPATHS says which.
const only = process.env.PROBE_SUBPATHS
  ? new Set(process.env.PROBE_SUBPATHS.split(','))
  : null;
const selected = Object.entries(subpaths).filter(([s]) => !only || only.has(s));

const failures = [];

const check = async (subpath, expected) => {
  const specifier = subpath === '.' ? 'state-in-url' : `state-in-url/${subpath.slice(2)}`;

  const resolved = import.meta.resolve(specifier);
  if (!resolved.endsWith('.mjs')) {
    failures.push(`${specifier}: import resolved to ${resolved}, expected the .mjs build`);
  }

  const mod = await import(specifier);
  const missing = expected.filter((name) => typeof mod[name] === 'undefined');
  if (missing.length) {
    failures.push(`${specifier}: missing export(s) ${missing.join(', ')}`);
  }
};

for (const [subpath, expected] of selected) {
  try {
    await check(subpath, expected);
  } catch (error) {
    failures.push(`${subpath}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(`ESM probe failed:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`ESM probe ok (${selected.length} subpaths)`);
