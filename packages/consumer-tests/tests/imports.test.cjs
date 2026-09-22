// CommonJS view of the package, run by both Vitest and Jest. Each runner has
// its own `exports` resolver, which is the point of running the same file
// twice. The package ships no CJS build, so every require() here goes through
// Node's require(esm) — under Jest that needs --experimental-vm-modules, which
// is exactly the consumer burden the README documents.
const { readFileSync } = require('node:fs');
const path = require('node:path');

const { subpaths } = JSON.parse(
  readFileSync(path.join(__dirname, '..', 'subpaths.json'), 'utf8'),
);

const specifierFor = (subpath) =>
  subpath === '.' ? 'state-in-url' : `state-in-url/${subpath.slice(2)}`;

// Only this consumer's framework is installed; the rest get their own consumer.
const FRAMEWORK_SUBPATHS = ['./next', './react-router6', './remix'];

const cases = Object.entries(subpaths)
  .filter(([subpath]) => !FRAMEWORK_SUBPATHS.includes(subpath))
  .map(([subpath, expected]) => [specifierFor(subpath), expected]);

describe('require() reaches every subpath through require(esm)', () => {
  test.each(cases)('%s resolves to the ESM build', (specifier) => {
    expect(require.resolve(specifier)).toMatch(/\.mjs$/);
  });

  test.each(cases)('%s exports %p', (specifier, expected) => {
    const mod = require(specifier);
    for (const name of expected) {
      expect(typeof mod[name]).not.toBe('undefined');
    }
  });
});

describe('the package behaves when required', () => {
  test('encode/decode round-trips', () => {
    const { decode, encode } = require('state-in-url/encoder');
    expect(decode(encode({ a: 1, b: 'x' }))).toEqual({ a: 1, b: 'x' });
  });

  test('encodeState/decodeState round-trips', () => {
    const { decodeState, encodeState } = require('state-in-url/encodeState');
    expect(decodeState(encodeState({ n: 2 }), { n: 0 })).toEqual({ n: 2 });
  });

  // No `useUrlState` on the root: it is router-specific, so it lives on the
  // adapter subpaths only.
  test('the root subpath exports exactly the router-agnostic surface', () => {
    expect(Object.keys(require('state-in-url')).sort()).toEqual([
      'decode',
      'decodeState',
      'encode',
      'encodeState',
      'isSSR',
      'typeOf',
      'useLinkProps',
      'useSharedState',
      'useUrlEncode',
      'useUrlStateBase',
    ]);
  });
});
