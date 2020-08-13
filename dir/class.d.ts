declare class Person_Class {
    name: string;
    age: number;
    constructor(name: string, age: number);
    say(): void;
}
declare var peter_class: Person_Class;
declare class Animal {
    name: string;
    constructor(thename: string);
    move(distance: number): void;
}
declare class Snake extends Animal {
    constructor(thename: string);
    move(distance?: number): void;
}
declare class Horse extends Animal {
    constructor(thename: string);
    move(distance?: number): void;
}
declare let snake: Snake;
declare let horse: Horse;
declare class Class_Person {
    protected name: string;
    protected constructor(name: string);
}
declare class Class_Male extends Class_Person {
    constructor(name: string);
}
declare class Class_Animal {
    readonly type: string;
    readonly name: string;
    constructor(type?: string);
}
declare let cat: Class_Animal;
declare class Class_Animal1 {
    private name;
    constructor(name?: string);
}
declare let class_peter: Class_Animal1;
declare class Class_Animal2 {
    private name;
    constructor(name?: string);
}
declare let class_tom: Class_Animal2;
declare class Class_Animal3 {
    static myname: string;
    constructor(myname: string);
    static isAnimal(a: any): boolean;
}
declare class Son_Animal3 extends Class_Animal3 {
    constructor(name: string);
}
declare let class_a: Animal;
