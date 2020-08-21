class Person_Class{
  name:string;
  age:number;
  constructor(name:string,age:number){
      this.name = name;
      this.age = age;
      console.log('this',this)
  }
  say():void{
      alert(this.name)
  }
}
var peter_class = new Person_Class('peter',25); 

class Animal {
  name:string;
  constructor(thename:string){
    this.name = thename;
  }
  move(distance:number):void{
    console.log(`${this.name} 移动了 ${distance}米`)
  }
}

class Snake extends Animal {
  constructor(thename:string){
    console.log(thename)
    super(thename)
  }
  move(distance:number = 5):void{
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(thename:string){
    super(thename)
  }
  move(distance:number = 30):void{
    super.move(distance);
  }
}

let snake = new Snake('snake');
snake.move();
let horse = new Horse('horse');
horse.move(100)

class Class_Person {
  protected name:string;
  protected constructor(name:string){
    this.name = name;
  }
}
class Class_Male extends Class_Person{
  constructor(name:string){
    super(name);
    console.log(this.name,'111') // Property 'name' is private and only accessible within class 'Class_Person'.ts(2341)
  }
}

// let class_a = new Class_Person('Jack');
// console.log(class_a.name)
class Class_Animal {
  readonly type:string;
  readonly name:string = 'cat';
  constructor(type?:string){
    this.type = 'cat';
  }
}
let cat = new Class_Animal();
// cat.name = 'catt'

class Class_Animal1{
  constructor(private name:string = 'peter'){}
}
let class_peter = new Class_Animal1();
console.log(class_peter)
class Class_Animal2{
  private name:string;
  constructor(name:string = 'tom'){
    this.name = name
  }
}
let class_tom = new Class_Animal2();
// console.log(class_tom)


class Class_Animal3 {
  static myname:string = 'tome'
  Myname:string;
  constructor(Myname:string){
    this.Myname = Myname
    // console.log(this.myname)// Property 'myname' is a static member of type 'Class_Animal3
    console.log(Class_Animal3.myname)
  }
  static isAnimal(a:any) {
    return a instanceof Animal;
  }
}
class Son_Animal3 extends Class_Animal3{
  constructor(name:string){
    super(name)
  }
}
let class_a = new Class_Animal3('Jack');
// class_a.myname = '1'; // Property 'myname' is a static member of type 'Class_Animal3
Class_Animal3.myname = '2';
// class_a.isAnimal(class_a); // Property 'isAnimal' does not exist on type 'Animal'.ts(2339)
Class_Animal3.isAnimal(class_a); // true
console.log(Class_Animal3.myname) // tome

abstract class Abstract_Person{
  name:string;
  constructor(name:string) {
    this.name = name;
  }
  abstract sayHi():void;
}

// let abstract_peter = new Abstract_Person('peter')
class Abstract_Child extends Abstract_Person{
  age:number;
  constructor(name:string,age:number = 10){
    super(name)
    this.name = name
    this.age = age;
  }
  sayHi(){
    console.log(`${this.age}岁的${this.name}说你好`)
  }
}
let abstract_tom = new Abstract_Child('tom',18);
abstract_tom.sayHi(); //18岁的tom说你好

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  constructor(message?:string){
    this.greeting = message
  }
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter.standardGreeting;
      }
  }
}

let greeter1: Greeter; // 意思是 Greeter类的实例的类型是 Greeter
greeter1 = new Greeter("world");
console.log(greeter1.greet()); // Hello, world
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker()
console.log(greeter2.greet()) //Hey there!