declare function returnItem<T>(val: T): T;
declare function getLen<T>(val: T[]): void;
declare function swap<T, U>(tuple: [T, U]): [U, T];
interface Lengthwise {
    length: number;
}
declare function loggingIdentity<T extends Lengthwise>(arg: T): T;
interface ConfigFn {
    <T>(value: T): T;
}
declare var getData: ConfigFn;
declare class GetMin<T> {
    arr: T[];
    add(ele: T): void;
    min(): T;
}
declare var gm1: GetMin<number>;
