interface Person{
  id:number,
  name:string,
  isMale:boolean
}

let peter:Person = {
  id:123456,
  name:'peter',
  isMale:true
}
let tom:Person = {
  name:'tom',
  id:1111111,
  isMale:false,
  // age:20
}
interface Animal{
  type:string,
  color?:string
}

let tiger:Animal = {
  type:'cat',
  color:'yellow'
}
let lion:Animal = {
  type:'dog'
}
let shark:Animal = {
  type:'fish',
  // isBig:true
}

interface Flower{
  readonly name:string,
  color:string
}

let red_flower:Flower = {
  name:'red_flower',
  color:'red'
}
// red_flower.name = 'green_flower' // 报错


interface Person_1{
  id:number
  name:string,
  isMale:boolean,
  [propName:string]:unknown,
}
let Lily:Person_1 = {
  id:12345,
  name:'Lily',
  isMale:false,
  age:18,
  like:'dance'
}
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)

interface Foo {
  (str:string,num:number):void
}

let foo_1:Foo = (str1:string,num1:number)=>{
  console.log(`${str1},${num1}`)
}

interface Person{
  id:number,
  name:string,
  isMale:boolean
}
interface Male extends Person {
  isMale:boolean,
  hobby:string,
  eat:(val:string)=>string
}
let Got:Male = {
  isMale:true,
  id:1111,
  name:'Got',
  hobby:'basketball',
  eat:(apple)=>{
    return apple
  }
}