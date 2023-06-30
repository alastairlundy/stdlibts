import { KeyValuePair } from "../KeyValuePair"

export = HashMap

declare class HashMap<K, V>{

    constructor();

    put(key: K, value: V): void;
    putIfAbsent(key: K, value:V): void;

    get(key: K): any;
    getOrDefault(key: K, defaultValue: V) : V;

    indexOf(key: K): number;
    getKeysOf(value: V): Array<K>;
    keys() : Array<K>;
    values(): Array<V>;
    toArray() : Array<KeyValuePair<K, V>>;
}