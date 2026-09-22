import assert from 'assert';
import fs from 'fs';
import path from 'path';

import { useUrlState as useUrlStateAstro } from '../../dist/astro';
import { decode, encode } from '../../dist/encoder';
import { decodeState, encodeState } from '../../dist/encodeState';
import { useUrlState } from '../../dist/next';
import { useUrlState as useUrlStateReact } from '../../dist/react';
import { useUrlState as useUrlStateRR6 } from '../../dist/react-router6';
import { useUrlState as useUrlStateRR } from '../../dist/react-router';
import { useUrlState as useUrlStateRemix } from '../../dist/remix';
import { useLinkProps } from '../../dist/useLinkProps';
import { useSharedState } from '../../dist/useSharedState';
import { useUrlEncode } from '../../dist/useUrlEncode';
import { useUrlStateBase } from '../../dist/useUrlStateBase';

const errorMsg =
  "Export not found! Check build process and 'exports' in package.json";

const loadFile = (pathStr) => fs.readFileSync(path.join(__dirname, '../../dist/', pathStr), { encoding: 'utf8' })

// TS definitions
assert(loadFile('index.d.ts').length > 15, errorMsg)
assert(loadFile('/next/useUrlState/index.d.ts').length > 15, errorMsg)
assert(loadFile('/next/useUrlState/useUrlState.d.ts').length > 15, errorMsg)
assert(loadFile('/react-router/useUrlState/index.d.ts').length > 15, errorMsg)
assert(loadFile('/react-router/useUrlState/useUrlState.d.ts').length > 15, errorMsg)


// Nextjs
assert.ok(useUrlState, errorMsg);
assert(loadFile('/next/useUrlState/useUrlState.d.ts').length > 15, errorMsg);


// React router 6
assert.ok(useUrlStateRR6, errorMsg);
assert(loadFile('/react-router6/useUrlState/useUrlState.d.ts').length > 15, errorMsg);

// React router
assert.ok(useUrlStateRR, errorMsg);
assert(loadFile('/react-router/useUrlState/useUrlState.d.ts').length > 15, errorMsg);

// Remix
assert.ok(useUrlStateRemix, errorMsg);
assert(loadFile('/remix/useUrlState/useUrlState.d.ts').length > 15, errorMsg);

// Astro
assert.ok(useUrlStateAstro, errorMsg);
assert.ok(useUrlStateReact, errorMsg);
assert(loadFile('/astro/useUrlState/useUrlState.d.ts').length > 15, errorMsg);
assert(loadFile('/react/useUrlState/useUrlState.d.ts').length > 15, errorMsg);

// React
assert.ok(useUrlStateBase, errorMsg);
assert(loadFile('/useUrlStateBase/useUrlStateBase.d.ts').length > 15, errorMsg);


assert.ok(useSharedState, errorMsg);
assert(loadFile('/useSharedState/useSharedState.d.ts').length > 15, errorMsg);

assert.ok(useUrlEncode, errorMsg);
assert(loadFile('/useUrlEncode/useUrlEncode.d.ts').length > 15, errorMsg);

assert.ok(useLinkProps, errorMsg);
assert(loadFile('/useLinkProps/useLinkProps.d.ts').length > 15, errorMsg);

assert.ok(encodeState, errorMsg);
assert(loadFile('/encodeState/encodeState.d.ts').length > 15, errorMsg);
assert.ok(decodeState, errorMsg);


// JS
assert.ok(encode, errorMsg);
assert(loadFile('/encoder/encoder.d.ts').length > 15, errorMsg);
assert.ok(decode, errorMsg);

// next ships no `exports` map, so Node resolves `next/navigation` as a file
// path and ESM does no extension guessing. The source and the .d.ts keep the
// bare specifier — every bundler wants that, and it survives next adding an
// exports map — and rollup's `output.paths` adds the extension to the emitted
// ESM alone. Lose that mapping and nothing fails until a consumer loads this
// build through Node instead of a bundler.
assert.match(
  loadFile('/next/useUrlState/useUrlState.mjs'),
  /next\/navigation\.js/,
  "The ESM build must import 'next/navigation.js'; check rollup output.paths",
);

// Conditions are matched in declaration order, so the order is the contract:
// 'types' anywhere but first is shadowed by whichever condition matches (TS
// then falls back to guessing), and 'default' anywhere but last shadows every
// condition after it.
//
// The absent 'require' is the ESM-only decision. A .cjs build is still emitted
// for manual use, so this assertion is what keeps it off the resolution path:
// two builds reachable in one consumer's graph means two copies of the
// module-scoped WeakMaps in subscribers.ts, and useSharedState silently stops
// sharing.
const packageJsonPath = path.join(__dirname, '../../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const exports = packageJson.exports;

Object.keys(exports).forEach(exportPath => {
  const exportObj = exports[exportPath];
  if (typeof exportObj === 'object' && exportObj.default) {
    const keys = Object.keys(exportObj);
    const lastKey = keys[keys.length - 1];
    assert.strictEqual(lastKey, 'default',
      `Export '${exportPath}': 'default' field should be last, but found '${lastKey}' as last field`);
    assert.strictEqual(keys[0], 'types',
      `Export '${exportPath}': 'types' field should be first, but found '${keys[0]}' as first field`);
    assert.ok(!exportObj.require,
      `Export '${exportPath}': this package is ESM-only, so it must declare no 'require' condition`);
    assert.ok(exportObj.default.endsWith('.mjs'),
      `Export '${exportPath}': 'default' should point at the ESM build, got '${exportObj.default}'`);
  }
});


