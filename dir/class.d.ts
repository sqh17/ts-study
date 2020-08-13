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
