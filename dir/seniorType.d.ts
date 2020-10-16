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
