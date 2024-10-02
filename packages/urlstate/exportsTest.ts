import assert from 'assert';
import fs from 'fs';
import path from 'path';

import { decode, encode } from '../../dist/encoder';
import { decodeState, encodeState } from '../../dist/encodeState';
import { useUrlState } from '../../dist/next';
import { useUrlState as useUrlStateRR } from '../../dist/react-router';
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

// React router
assert.ok(useUrlStateRR, errorMsg);

// React
assert.ok(useUrlStateBase, errorMsg);

assert.ok(useSharedState, errorMsg);

assert.ok(useUrlEncode, errorMsg);

assert.ok(encodeState, errorMsg);
assert.ok(decodeState, errorMsg);

// JS
assert.ok(encode, errorMsg);
assert.ok(decode, errorMsg);

