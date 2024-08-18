import assert from 'assert';

import { decode, encode } from '../../dist/encoder';
import { decodeState, encodeState } from '../../dist/encodeState';
import { parseSPObj, useUrlState } from '../../dist/next';
import { useSharedState } from '../../dist/useSharedState';
import { useUrlEncode } from '../../dist/useUrlEncode';
import { useUrlStateBase } from '../../dist/useUrlStateBase';

const errorMsg =
  "Export not found! Check build process and 'exports' in package.json";

// Nextjs
assert.ok(useUrlState, errorMsg);
assert.ok(parseSPObj, errorMsg);

// React
assert.ok(useUrlStateBase, errorMsg);

assert.ok(useSharedState, errorMsg);

assert.ok(useUrlEncode, errorMsg);

assert.ok(encodeState, errorMsg);
assert.ok(decodeState, errorMsg);

// JS
assert.ok(encode, errorMsg);
assert.ok(decode, errorMsg);
