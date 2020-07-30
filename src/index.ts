function greeter(person:string) {
  return "Hello, " + person
}


let isDone: boolean = false;
let createdByNewBoolean: boolean = Boolean(1);

let decLiteral:number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const binaryLiteral_1:number = 0b0001;
const binaryLiteral_2:number = 0o1234;
const octalLiteral: number = 0o744;
const num_2 :undefined = undefined;

const book: string = '深入浅出 Typescript'
const user:string = "Jane User"
const age:number = 18;
// const sentence:string = `my name is ${user}`
let sentence: string = "Hello, my name is " + user + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
const a:void = undefined;
const b:null = null;
const c:number = undefined;
let bool_1:boolean = false;
const symbol_1:symbol = Symbol(2);
const symbol_2:symbol = Symbol(2);

// console.log(symbol_1 == symbol_2);

const arr :string[] = ['a','b','c','d'];
// console.log(arr[5].toString())
arr.push('c');
arr.concat(['q','e']);
// console.log(arr,arr.concat(['q','e']));
const arrNum :number[] = [1,2,3,4];
const arrAny :Array<number> = [1,2,3];
let arr_1 :[string,number] = ['a',1];
// let arr_2 :[string,number] = ['a',1,'a'];
let arr_2 :any[] = [1,2,3,'a','b']
// const bigInt_1:bigint = BigInt(Number.MAX_SAFE_INTEGER);
enum Enum {A = 1,B,C }
let enum_1: Enum = Enum.B;
// console.log(enum_1)
// console.log(Enum); 
function foo():void{
  console.log('this is peter')
}
function foo1():void{
  console.log('今天天气不错')
}
let fo_1:void = null;
let a_1 :number | undefined | null = 2
let obj :object = {
  name:'peter'
}