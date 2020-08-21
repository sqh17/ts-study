### class 类
传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎来了 class。  
TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

#### 类的概念

* 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
* 对象（Object）：类的实例，通过 new 生成
* 面向对象（OOP）的三大特性：封装、继承、多态
* 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
* 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
* 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
* 存取器（getter & setter）：用以改变属性的读取和赋值行为
* 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
* 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
* 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

#### 类的基本实现

js的实现方式

  class Person{
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    say(){
      alert(this.name)
    }
  }
  var peter = new Person('peter',25);

ts的实现方式

  class Person_Class{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
    say(){
      alert(this.name)
    }
  }
  var peter_class = new Person_Class('peter',25); 

#### 类的定义及说明

在ts中，定义类时，一般有三种成员，比如上述代码的name，constructor，以及say，分别代表着属性，构造函数，以及方法。其中this代表访问这个类的所有成员。
按照ts的定义的方式，属性，方法都需要声明类型,包括参数也是如此。

#### 继承

js中class 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
在ts中，和js的操作方式一样

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

__派生类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数。 而且，在构造函数里访问this的属性之前，我们一定要调用super()。 这个是TypeScript强制执行的一条重要规则。__

#### 修饰符
什么是修饰符？修饰符是用于限定类型以及类型成员的声明的一种符号，修饰符用来定义类、方法或者变量，现在来学习的是访问修饰符，  
ts中有三种访问修饰符：public，private，protected  
* public 修饰的属性或方法是公有的，可以在任何地方被访问到，__默认所有的属性和方法都是 public 的__
* private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
* protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

1. public 例子：

  class Animal {
    public name;
    constructor(name) {
      this.name = name;
    }
  }

  let a = new Animal('Jack');
  console.log(a.name); // Jack
  a.name = 'Tom';
  console.log(a.name); // Tom

该例子中，name 被设置为了 public，所以直接访问实例的 name 属性是允许的。

2. private 例子：

  class Class_Person {
    private name:string;
    constructor(name:string){
      this.name = name;
    }
  }
  class Class_Male extends Class_Person{
    constructor(name:string){
      super(name);
      console.log(this.name) // Property 'name' is private and only accessible within class 'Class_Person'.ts(2341)
    }
  }
  let class_a = new Class_Person('Jack');
  console.log(class_a.name) // Property 'name' is private and only accessible within class 'Class_Person'.ts(2341)

从上述代码可知：
1. 虽然在ts文件报错了，但不影响编译成js文件后读取,因为js并没有限制 private 属性在外部的可访问性。
2. 父类设置了private后，子类访问不到父类的变量。

3. protected 例子

    class Class_Person {
      protected name:string;
      constructor(name:string){
        this.name = name;
      }
    }
    class Class_Male extends Class_Person{
      constructor(name:string){
        super(name);
        console.log(this.name)
      }
    }
    let class_a = new Class_Person('Jack');
    console.log(class_a.name) 

将父类的name设置为protected，子类就可以访问到父类的属性，不管继承与否，外部不能访问到受proteed的属性。

4. 构造函数的例子
构造函数也可以使用访问修饰符，只不过不同的修饰符影响不同。
 * 当构造函数修饰为 private 时，该类不允许被继承或者实例化

  class Class_Person {
    protected name:string;
    private constructor(name:string){
      this.name = name;
    }
  }
  class Class_Male extends Class_Person{ // Cannot extend a class 'Class_Person'. Class constructor is marked as private.ts(2675)
    constructor(name:string){
      super(name);
      console.log(this.name,'111') 
    }
  }

  let class_a = new Class_Person('Jack'); // Constructor of class 'Class_Person' is private and only accessible within the class declaration.ts(2673)

  * 当构造函数修饰为 protected 时，该类只允许被继承：

    class Class_Person {
      protected name:string;
      protected constructor(name:string){
        this.name = name;
      }
    }
    class Class_Male extends Class_Person{
      constructor(name:string){
        super(name);
        console.log(this.name,'111')
      }
    }

    let class_a = new Class_Person('Jack');// Constructor of class 'Class_Person' is protected and only accessible within the class declaration.ts(2674)

另外还有只读修饰符readonly，readonly将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

  class Class_Animal {
    readonly type:string;
    readonly name:string = 'cat';
    constructor(type?:string){
      this.type = 'cat';
    }
  }
  let cat = new Class_Animal();
  cat.name = 'catt' // Cannot assign to 'name' because it is a read-only property.ts(2540)

__注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。__

参数属性
修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。通俗的说，把声明和赋值合并为一处

  class Class_Animal1{
    constructor(private name:string = 'peter'){}
  }
  // 等价于
  class Class_Animal2{
    private name:string;
    constructor(name:string = 'tom'){
      this.name = name
    }
  }

#### 存取器
TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

  class Animal {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return 'Jack';
    }
    set name(value) {
      console.log('setter: ' + value);
    }
  }

  let a = new Animal('Kitty'); // setter: Kitty
  a.name = 'Tom'; // setter: Tom
  console.log(a.name); // Jack

#### 静态属性
使用 static 修饰符修饰的属性和方法称为静态属性和静态方法，它们不需要实例化，实例化后的对象也不能调用静态属性和静态方法，而是直接通过类来调用.  
__静态属性和静态方法在构造器中不能通过this直接调用，只能用类的方式来调用__

  
  class Class_Animal3 {
    static myname:string = 'tome'
    Myname:string;
    constructor(Myname:string){
      this.Myname = Myname
      console.log(this.myname)// Property 'myname' is a static member of type 'Class_Animal3
      console.log(Class_Animal3.myname) // ‘tome’
    }
    static isAnimal(a:any) {
      return a instanceof Animal;
    }
  }

  let class_a = new Class_Animal3('Jack');
  class_a.myname = '1'; // // Property 'myname' is a static member of type 'Class_Animal3
  Class_Animal3.myname = '2'; // 2
  class_a.isAnimal(class_a); // Property 'isAnimal' does not exist on type 'Animal'.ts(2339)
  Class_Animal3.isAnimal(class_a); // true
  console.log(Class_Animal3.myname) // tome

  
#### 抽象类

在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。  
抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。

由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。（抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。）

abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

  abstract class Abstract_Person{
    name:string;
    constructor(name:string) {
      this.name = name;
    }
    abstract sayHi():void;
  }
  let abstract_peter = new Abstract_Person('peter') // 无法创建抽象类的实例
* 在上述例子中，定义了一个抽象类Abstract_Person，并且定义了一个抽象方法sayHi。在实例化抽象类的时候报错了。抽象类不能用于实例化，只有继承才能使用
* 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。

  class Abstract_Child extends Abstract_Person{
    age:number;
    constructor(name:string,age:number = 10){
      super(name) // 在派生类的构造函数中必须调用 super()
      this.name = name
      this.age = age;
    }
    sayHi(){ // 父类定义的抽象方法必须在子类实现
      console.log(`${this.age}岁的${this.name}说你好`)
    }
  }
  let abstract_tom = new Abstract_Child('tom',18);
  abstract_tom.sayHi(); //18岁的tom说你好

#### 类与接口

类定义会创建两个东西：类的实例类型和一个构造函数

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
  let greeterMaker: typeof Greeter = Greeter; // 取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数
  greeterMaker.standardGreeting = "Hey there!";
  let greeter2 = new greeterMaker()
  console.log(greeter2.greet()) //Hey there!