function greeter(person:string) {
  return "Hello, " + person
}


let isDone: boolean = false;
let createdByNewBoolean: boolean = Boolean(1);

let decLiteral:number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;

const book: string = '深入浅出 Typescript'
const user:string = "Jane User"

const a:void = undefined;
const b:null = null;
const c:undefined = undefined;

const symbol_1:symbol = Symbol(2);
const symbol_2:symbol = Symbol(2);

console.log(symbol_1 == symbol_2);

// const bigInt_1:bigint = BigInt(Number.MAX_SAFE_INTEGER);
enum Enum {A,B,C }
console.log(Enum); 