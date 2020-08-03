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
