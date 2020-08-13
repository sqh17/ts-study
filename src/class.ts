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
cat.name = 'catt'