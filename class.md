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

#### 存取器

#### 静态属性

#### 抽象类

#### 类与接口