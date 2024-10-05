import { type JSONCompatible } from "./utils";

const _stateMap = new WeakMap<JSONCompatible, JSONCompatible>();
const _subscribers = new WeakMap<JSONCompatible, Cb[]>();

// TODO: refactor to clarify how it works ?
// could use useSyncExternalStore, but better to support react 17 for now
export const subscribers = {
  get(obj: JSONCompatible) {
    return _subscribers.get(obj) || [];
  },
  add(obj: JSONCompatible, cb: Cb) {
    const cbs = this.get(obj);
    _subscribers.set(obj, cbs.concat(cb));

    return () => this.remove(obj, cb);
  },
  remove(obj: JSONCompatible, cb: Cb) {
    const cbs = this.get(obj);
    const newCbs = cbs.filter((_cb) => _cb !== cb);
    if (newCbs.length) {
      _subscribers.set(obj, newCbs);
    } else {
      _subscribers.delete(obj);
    }
  },
};

export const stateMap = {
  get: function <T extends JSONCompatible>(objKey: T) {
    return _stateMap.get(objKey) as T;
  },
  set: function <T extends JSONCompatible>(objKey: T, value: T) {
    _stateMap.set(objKey, value);
  },
};

export type Cb = () => void;
