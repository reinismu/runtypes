import { Runtype, Static } from '../runtype';
declare type RecordStaticType<O extends {
    [_: string]: Runtype;
}, Part extends boolean, RO extends boolean> = Part extends true ? RO extends true ? {
    readonly [K in keyof O]?: Static<O[K]>;
} : {
    [K in keyof O]?: Static<O[K]>;
} : RO extends true ? {
    readonly [K in keyof O]: Static<O[K]>;
} : {
    [K in keyof O]: Static<O[K]>;
};
export interface InternalRecord<O extends {
    [_: string]: Runtype;
}, Part extends boolean, RO extends boolean, EX extends boolean> extends Runtype<RecordStaticType<O, Part, RO>> {
    tag: 'record';
    fields: O;
    isPartial: Part;
    isReadonly: RO;
    isExact: EX;
    asPartial(): InternalRecord<O, true, RO, EX>;
    asReadonly(): InternalRecord<O, Part, true, EX>;
    exact(): InternalRecord<O, Part, RO, true>;
    pick<K extends keyof O>(keys: K[]): InternalRecord<Pick<O, K>, Part, RO, EX>;
    omit<K extends keyof O>(keys: K[]): InternalRecord<Omit<O, K>, Part, RO, EX>;
}
export declare type Record<O extends {
    [_: string]: Runtype;
}, RO extends boolean, EX extends boolean> = InternalRecord<O, false, RO, EX>;
export declare type ExactRecord<O extends {
    [_: string]: Runtype;
}, RO extends boolean, EX extends boolean> = InternalRecord<O, false, RO, EX>;
export declare type Partial<O extends {
    [_: string]: Runtype;
}, RO extends boolean, EX extends boolean> = InternalRecord<O, true, RO, EX>;
/**
 * Construct a record runtype from runtypes for its values.
 */
export declare function InternalRecord<O extends {
    [_: string]: Runtype;
}, Part extends boolean, RO extends boolean, EX extends boolean>(fields: O, isPartial: Part, isReadonly: RO, isExact: EX): InternalRecord<O, Part, RO, EX>;
export declare function Record<O extends {
    [_: string]: Runtype;
}>(fields: O): Record<O, false, false>;
export declare function ExactRecord<O extends {
    [_: string]: Runtype;
}>(fields: O): Record<O, false, true>;
export declare function Partial<O extends {
    [_: string]: Runtype;
}>(fields: O): Partial<O, false, false>;
export {};
