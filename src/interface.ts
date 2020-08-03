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