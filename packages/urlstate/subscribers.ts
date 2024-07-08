import { type JSONCompatible } from './utils';

export const stateMap = new WeakMap<
  JSONCompatible<object>,
  JSONCompatible<object>
>();
export const subscribers = new WeakMap<JSONCompatible<object>, Cb[]>();

export type Cb = () => void;
