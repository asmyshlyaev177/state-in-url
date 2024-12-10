import { type JSONCompatible } from "./utils";
export declare const subscribers: {
    get(obj: JSONCompatible): Cb[];
    add(obj: JSONCompatible, cb: Cb): () => void;
    remove(obj: JSONCompatible, cb: Cb): void;
};
export declare const stateMap: {
    get: <T extends JSONCompatible | undefined>(objKey: T) => T | undefined;
    set: <T_1 extends JSONCompatible>(objKey: T_1, value: T_1) => void;
};
export type Cb = () => void;
