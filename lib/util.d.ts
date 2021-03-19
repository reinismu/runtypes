export declare function hasKey<K extends string>(k: K, o: {}): o is {
    [_ in K]: {};
};
export declare function pick<O extends Record<string, unknown>, K extends keyof O>(obj: O, keys: K[]): Pick<O, K>;
export declare function omit<O extends Record<string, unknown>, K extends keyof O>(obj: O, omitKeys: K[]): Omit<O, K>;
