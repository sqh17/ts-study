let senior_Type:string | number;
let str_senior = 'abc';
let num_senior = 123;
 
// function getLength(something: string | number): number {
//   return something.length;
// }

// // index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
// //   Property 'length' does not exist on type 'number'.

interface myInter1 {
  name:string;
  fun1():void
}
interface myInter2 {
  fun2?():void
}

// 此时定义的jcType是myInter1和myInter2的交叉类型，其中必须包含这两个接口中定义的属性
let jcType :myInter1 & myInter2 = {
  name:'haha',
  fun1() {},
  fun2() {},
}

interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}

function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

function isCat(pet: Fish | Cat): pet is Cat {
  return (<Cat>pet).run !== undefined;
}
function getLength_typeof(something: string | number): number {
  if (typeof something == 'string') {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
type Name = string;
let a_type:Name = '1111';
// let b_type:Name = 111;//不能将类型“111”分配给类型“string”

type type_senior = 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'symbol'
function showType(type:type_senior):void{
  if(type == 'string'){
    console.log('字符串')
  }else{
    console.log('不是字符串')
  }
}
showType('null')
// showType('object') // 类型“"object"”的参数不能赋给类型“type_senior”的参数。

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
  }
}

class Query {
  public whereCon: Array<string> = [];

  public constructor(protected tableName: string = '') { }

  public andWhere(key: string, value: string) {
    this.whereCon.push(`${key}=${value}`);
    return this;
  }

  public orWhere(key: string, value: string) {
    this.whereCon.push(`OR ${key}=${value}`);
    return this;
  }
  
  public inWhere(key: string, value: string) {
    this.whereCon.push(`AND ${key} IN (${value})`);
    return this;
  }

  public getSQL(): string {
    return `SELECT * FROM ${this.tableName} WHERE ${this.whereCon.join(' ')}`;
  }

  // ... 其他的操作
}
class TQuery extends Query {
  public constructor(tableName: string = '') {
    super(tableName);
  }

  public getUpdateSql(key: string, value: string) {
    return `UPDATE ${this.tableName} SET ${key}=${value} WHERE ${this.whereCon.join(' ')}`;
  }

  // ... 其他的操作
}
let generateSQL = new Query('table_name')
.andWhere('key1', 'value1')
.orWhere('key2','value2')
.inWhere('key3','value3')
.getSQL();

console.log(generateSQL); // SELECT * FROM table_name WHERE key1=value1 OR key2=value2 AND key3 IN (value3)

let generateSQL1 = new TQuery('table_name')
  .andWhere('key1', 'value1')
  .orWhere('key2', 'value2')
  .inWhere('key3', 'value3')
  .getUpdateSql('key4', 'value4');

console.log(generateSQL1); // UPDATE table_name SET key4=value4 WHERE key1=value1 OR key2=value2 AND key3 IN (value3)

interface senior_Person {
  name: string;
  age: number;
}
let personProps: keyof senior_Person;

interface Itest{
  webName:string;
  age:number;
  address:string
}
type ant=keyof Itest;
interface _Map<T> {
  [key: string]: T;
}
let keys: keyof _Map<number>; //string
let value: _Map<number>['antzone']; //number

class Images {
  public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  public alt: string = '谷歌'
  public width: number = 500
}

type propsNames = keyof Images

type propsType = Images[propsNames]

class senior_User{
  name:string;
  age:number;
  isMan:boolean
}
type partial<T> = { [K in keyof T]?: T[K] }
type partialUser = partial<senior_User> 
// type partialUser = {
//   name?: string;
//   age?: number;
//   isMan?: boolean;
// }

declare function senior_f<T extends boolean>(x: T): T extends true ? string : number;

const senior_x = senior_f(Math.random() < 0.5) // const senior_x: string | number
const senior_y = senior_f(false) // const senior_x: number
const senior_z = senior_f(true) //const senior_x: string

// 裸类型参数,没有被任何其他类型包裹即T
type NakedUsage<T> = T extends boolean ? "YES" : "NO"
// 类型参数被包裹的在元组内即[T]
type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";

type Distributed = NakedUsage<number | boolean> //  = NakedUsage<number> | NakedUsage<boolean> =  "NO" | "YES"
type NotDistributed = WrappedUsage<number | boolean > // "NO"


type Diff<T, U> = T extends U ? never : T;
type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}
type FunctionPropertyNames< T > = {[k in keyof T] : T[k] extends Function ? k : never}[keyof T]
type _R = FunctionPropertyNames<Part>; // updatePart


interface __People {
  id: string
  name: string
  age?: number
  from?: string
}
// type NullableKeys<T> = {
//   [K in keyof T]?: K;
//  };
type NullableKeys<T> = {
  [K in keyof T]-?: '' extends T[K] ? 1:2
 };
type RRR = NullableKeys<__People> // type R = "age" | "from"