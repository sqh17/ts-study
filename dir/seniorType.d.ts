declare let senior_Type: string | number;
declare let str_senior: string;
declare let num_senior: number;
interface myInter1 {
    name: string;
    fun1(): void;
}
interface myInter2 {
    fun2?(): void;
}
declare let jcType: myInter1 & myInter2;
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
declare function isFish(animal: Cat | Fish): boolean;
declare function getLength(something: string | number): number;
declare function isCat(pet: Fish | Cat): pet is Cat;
declare function getLength_typeof(something: string | number): number;
declare type Name = string;
declare let a_type: Name;
declare type type_senior = 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'symbol';
declare function showType(type: type_senior): void;
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
declare type Shape = Square | Rectangle | Circle;
declare function area(s: Shape): number;
declare class Query {
    protected tableName: string;
    whereCon: Array<string>;
    constructor(tableName?: string);
    andWhere(key: string, value: string): this;
    orWhere(key: string, value: string): this;
    inWhere(key: string, value: string): this;
    getSQL(): string;
}
declare class TQuery extends Query {
    constructor(tableName?: string);
    getUpdateSql(key: string, value: string): string;
}
declare let generateSQL: string;
declare let generateSQL1: string;
interface senior_Person {
    name: string;
    age: number;
}
declare let personProps: keyof senior_Person;
interface Itest {
    webName: string;
    age: number;
    address: string;
}
declare type ant = keyof Itest;
interface _Map<T> {
    [key: string]: T;
}
declare let keys: keyof _Map<number>;
declare let value: _Map<number>['antzone'];
declare class Images {
    src: string;
    alt: string;
    width: number;
}
declare type propsNames = keyof Images;
declare type propsType = Images[propsNames];
declare class senior_User {
    name: string;
    age: number;
    isMan: boolean;
}
declare type partial<T> = {
    [K in keyof T]?: T[K];
};
declare type partialUser = partial<senior_User>;
declare function senior_f<T extends boolean>(x: T): T extends true ? string : number;
declare const senior_x: string | number;
declare const senior_y: number;
declare const senior_z: string;
declare type NakedUsage<T> = T extends boolean ? "YES" : "NO";
declare type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";
declare type Distributed = NakedUsage<number | boolean>;
declare type NotDistributed = WrappedUsage<number | boolean>;
declare type Diff<T, U> = T extends U ? never : T;
declare type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;
interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}
declare type FunctionPropertyNames<T> = {
    [k in keyof T]: T[k] extends Function ? k : never;
}[keyof T];
declare type _R = FunctionPropertyNames<Part>;
interface __People {
    id: string;
    name: string;
    age?: number;
    from?: string;
}
declare type NullableKeys<T> = {
    [K in keyof T]-?: '' extends T[K] ? 1 : 2;
};
declare type RRR = NullableKeys<__People>;
