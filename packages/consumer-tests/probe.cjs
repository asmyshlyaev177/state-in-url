// CJS half of the resolution probe. The package is ESM-only, so a CommonJS
// consumer reaches the .mjs through Node's require(esm) (unflagged since
// 22.12) — this checks that path still hands back working named exports.
const { readFileSync } = require('node:fs');
const path = require('node:path');

const { subpaths } = JSON.parse(
  readFileSync(path.join(__dirname, 'subpaths.json'), 'utf8'),
);

// Each consumer installs one framework, so it probes the framework-agnostic
// subpaths plus its own; PROBE_SUBPATHS says which.
const only = process.env.PROBE_SUBPATHS
  ? new Set(process.env.PROBE_SUBPATHS.split(','))
  : null;
const selected = Object.entries(subpaths).filter(([s]) => !only || only.has(s));

const failures = [];

for (const [subpath, expected] of selected) {
  const specifier =
    subpath === '.' ? 'state-in-url' : `state-in-url/${subpath.slice(2)}`;

  try {
    const resolved = require.resolve(specifier);
    if (!resolved.endsWith('.mjs')) {
      failures.push(
        `${specifier}: require resolved to ${resolved}, expected the .mjs build`,
      );
    }

    const mod = require(specifier);
    const missing = expected.filter((name) => typeof mod[name] === 'undefined');
    if (missing.length) {
      failures.push(`${specifier}: missing export(s) ${missing.join(', ')}`);
    }
  } catch (error) {
    failures.push(`${specifier}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(`CJS probe failed:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`CJS probe ok (${selected.length} subpaths)`);
