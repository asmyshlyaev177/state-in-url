// Pins the README's no-flag Jest recipe. The .cjs build is emitted but not in
// the exports map, so only an explicit path like this mapper reaches it — which
// substitutes it for the whole process rather than adding a second copy.
test('the root subpath maps to the CJS build', () => {
  expect(typeof require('state-in-url').useUrlStateBase).toBe('function');
});

test('a helper subpath maps', () => {
  const { decode, encode } = require('state-in-url/encoder');
  expect(decode(encode({ a: 1 }))).toEqual({ a: 1 });
});

test('an adapter subpath maps', () => {
  expect(typeof require('state-in-url/react').useUrlState).toBe('function');
});

// ./utils is dist/utils.cjs, not dist/utils/index.cjs — hence its own rule.
test('the flat utils subpath maps', () => {
  expect(typeof require('state-in-url/utils').typeOf).toBe('function');
});
