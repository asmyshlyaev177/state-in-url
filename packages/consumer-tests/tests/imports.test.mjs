// ESM view of the package. Static imports on purpose — a dynamic import()
// can be rewritten by a bundler, a static one is what a consumer writes and
// what the resolver has to answer.
import { useUrlState as useUrlStateAstro } from 'state-in-url/astro';
import { decode, encode } from 'state-in-url/encoder';
import { decodeState, encodeState } from 'state-in-url/encodeState';
import { useUrlState as useUrlStateReact } from 'state-in-url/react';
import { useUrlState as useUrlStateRouter } from 'state-in-url/react-router';
import { useLinkProps } from 'state-in-url/useLinkProps';
import { useSharedState } from 'state-in-url/useSharedState';
import { useUrlEncode } from 'state-in-url/useUrlEncode';
import { useUrlStateBase } from 'state-in-url/useUrlStateBase';
import { filterUnknownParams, typeOf } from 'state-in-url/utils';
import * as root from 'state-in-url';

const hooks = {
  'state-in-url/astro': useUrlStateAstro,
  'state-in-url/react': useUrlStateReact,
  'state-in-url/react-router': useUrlStateRouter,
  'state-in-url/useLinkProps': useLinkProps,
  'state-in-url/useSharedState': useSharedState,
  'state-in-url/useUrlEncode': useUrlEncode,
  'state-in-url/useUrlStateBase': useUrlStateBase,
};

describe('every subpath imports as ESM', () => {
  test.each(Object.entries(hooks))('%s exports a hook', (_specifier, hook) => {
    expect(typeof hook).toBe('function');
  });

  test('helpers round-trip', () => {
    expect(decode(encode({ a: 1, b: 'x' }))).toEqual({ a: 1, b: 'x' });
    expect(decodeState(encodeState({ n: 2 }), { n: 0 })).toEqual({ n: 2 });
    expect(typeOf(1)).toBe('number');
    expect(typeof filterUnknownParams).toBe('function');
  });

  test('the root subpath exports exactly the router-agnostic surface', () => {
    expect(Object.keys(root).sort()).toEqual([
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
