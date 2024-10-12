import { type JSONCompatible } from "./utils";
export declare const subscribers: {
    get(obj: JSONCompatible): Cb[];
    add(obj: JSONCompatible, cb: Cb): () => void;
    remove(obj: JSONCompatible, cb: Cb): void;
};
export declare const stateMap: {
    get: <T extends JSONCompatible>(objKey: T) => T;
    set: <T extends JSONCompatible>(objKey: T, value: T) => void;
};
export type Cb = () => void;
