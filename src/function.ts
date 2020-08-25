function sum(x:number,y:number):number{
  return x+y
}
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

let myName :(firstName:string,lastName?:string)=>void = function(firstName:string,lastName?:string):void{
  if (lastName) {
    console.log(firstName + ' ' + lastName);
  } else {
    console.log(firstName);
  }
}

function buildName(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat1 = buildName(undefined, 'Cat');

function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a_function:number[] = [1,2,3];
push(a_function, 1, 2, 3);

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: any): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: any) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);
          console.log(this)
          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: any): any{
  if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
  }
}