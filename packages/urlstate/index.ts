import { decode, encode } from './encoder';
import { decodeState, encodeState } from './encodeState';
import { useUrlState } from './next';
import { useLinkProps } from './useLinkProps';
import { useSharedState } from './useSharedState';
import { useUrlEncode } from './useUrlEncode';
import { useUrlStateBase } from './useUrlStateBase';
import { isSSR, type JSONCompatible, type Type, typeOf } from './utils';
export {
  decode,
  decodeState,
  encode,
  encodeState,
  isSSR,
  typeOf,
  useLinkProps,
  useSharedState,
  useUrlEncode,
  useUrlState,
  useUrlStateBase,
};
export type { JSONCompatible, Type };
