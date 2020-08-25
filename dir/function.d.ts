declare function sum(x: number, y: number): number;
declare let mySum: (x: number, y: number) => number;
declare let myName: (firstName: string, lastName?: string) => void;
declare function buildName(firstName: string, lastName: string): string;
declare let tomcat: string;
declare let cat1: string;
declare function push(array: any[], ...items: any[]): void;
declare let a_function: number[];
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: any): () => Card;
}
declare let deck: Deck;
declare let cardPicker: () => Card;
declare let pickedCard: Card;
declare function reverse(x: number): number;
declare function reverse(x: string): string;
