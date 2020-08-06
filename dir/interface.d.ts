interface Person {
    id: number;
    name: string;
    isMale: boolean;
}
declare let peter: Person;
declare let tom: Person;
interface Animal {
    type: string;
    color?: string;
}
declare let tiger: Animal;
declare let lion: Animal;
declare let shark: Animal;
interface Flower {
    readonly name: string;
    color: string;
}
declare let red_flower: Flower;
interface Person_1 {
    id: number;
    name: string;
    isMale: boolean;
    [propName: string]: unknown;
}
declare let Lily: Person_1;
interface StringArray {
    [index: number]: string;
}
declare let myArray: StringArray;
declare let myStr: string;
interface Foo {
    (str: string, num: number): void;
}
declare let foo_1: Foo;
interface Person {
    id: number;
    name: string;
    isMale: boolean;
}
interface Male extends Person {
    isMale: boolean;
    hobby: string;
    eat: (val: string) => string;
}
declare let Got: Male;
