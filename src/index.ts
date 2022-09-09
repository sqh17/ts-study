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
const d:string = null;
const e:boolean = null;
const f:boolean = undefined;
let u: void;
// let g: number = u;
let bool_1:boolean = false;
// const symbol_1:symbol = Symbol(2);
// const symbol_2:symbol = Symbol(2);

// console.log(symbol_1 == symbol_2);

const arr :string[] = ['a','b','c','d'];
// console.log(arr[5].toString())
arr.push('c');
arr.concat(['q','e']);
// console.log(arr,arr.concat(['q','e']));
const arrNum :number[] = [1,2,3,4];
const arrAny :Array<number> = [1,2,3];
const arrObj :object[] = [{}]
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

let any_1:any;
any_1 = 4;
any_1 = '4'
any_1 = [1,2,3]
let any_2;
any_2 = 4;
let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');

let never_1:never;
// never_1 = 123;
// never_1 = (()=>{ throw new Error('exception')})();

let unknown_1:unknown ;
unknown_1= {
  myName:'peter'
};
// console.log(unknown_1.myName);
let any_3:any = 'tom'
// console.log(any_3.myName);

const tuple: [string, number] = ['a', 1];
tuple.push(2); // ok
// console.log(tuple); // ["a", 1, 2] -> 正常打印出来
// console.log(tuple[2])

let obj_1:object;
obj_1 = {
  name:'peter'
};
obj_1 = [1,2,3]
// obj_1 = '1';

let x: never;
		let y: number;

// 运行错误，数字类型不能转为 never 类型
// x = 123;

// 运行正确，never 类型可以赋值给 never类型
// x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
// y = (()=>{ throw new Error('exception')})();


// enum Direction {
//   Up = 1,
//   Down = 3,
//   Left = 5,
//   Right = 6
// }
// console.log(Direction['Down']) // 3
// console.log(Direction[3]) // Down
enum Direction {
  Up = 'a',
  Down = 'b',
  Left = 'c',
  Right = 'd'
}
console.log(Direction['Down']) // b
console.log(Direction.Down) // Down