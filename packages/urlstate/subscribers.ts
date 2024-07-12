import { type JSONCompatible } from './utils';

const _stateMap = new WeakMap<JSONCompatible, JSONCompatible>();
export const subscribers = new WeakMap<JSONCompatible, Cb[]>();

export type Cb = () => void;

export const stateMap = {
  get: function <T extends JSONCompatible>(objKey: T) {
    return _stateMap.get(objKey) as T;
  },
  set: function <T extends JSONCompatible>(objKey: T, value: T) {
    _stateMap.set(objKey, value);
  },
};
