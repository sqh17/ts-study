#### 高级类型 senior type

高级类型，就是在类型基础上并合成一个满足要求的类型。

##### 联合类型
取值可以为多种类型中的一种。  
使用 | 分隔每个类型。

  let senior_Type:string | number;
  let str_senior = 'abc';
  let num_senior = 123;

上述例子说明，senior_Type的类型可以取字符串或者数字，类似于交集。

__当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法__

  function getLength(something: string | number): number {
      return something.length;
  }

  // index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
  //   Property 'length' does not exist on type 'number'.
此报错的原因是number类型没有length的属性，要联合类型时，必须是联合类型共同拥有的属性才行。

##### 交叉类型

将多个类型合并成一个类型，该类型具有所有类型的特性（取他们类型的合集）

  interface myInter1 {
    name:string;
    fun1():void
  }
  interface myInter2 {
    fun2():void
  }

  // 此时定义的jcType是myInter1和myInter2的交叉类型，其中必须包含这两个接口中定义的属性
  let jcType :myInter1 & myInter2 = {
    name:'haha',
    fun1() {},
    fun2() {},
  }

##### 类型断言，类型保护
联合类型可以让一个值可以为不同的类型，但随之带来的问题就是访问非共同方法时会报错。那么该如何区分值的具体类型，以及如何访问共有成员？

* 使用类型断言
类型断言（Type Assertion）可以用来手动指定一个值的类型。  
类型断言有两种语法 <类型>值 和 值 as 类型

  function getLength(something: string | number): number {
    if ((<string>something).length) {
      return (<string>something).length;
    } else {
      return something.toString().length;
    }
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
    // 如果按照正常animal.swim==='function'时，会报错，报cat本身没有swim方法
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
  }

需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误，

  interface Cat {
    name: string;
    run(): void;
  }
  interface Fish {
    name: string;
    swim(): void;
  }
  function swim(animal: Cat | Fish) {
      (animal as Fish).swim();
  }

  const tom: Cat = {
      name: 'Tom',
      run() { console.log('run') }
  };
  swim(tom);  // Uncaught TypeError: animal.swim is not a function

这情况就是swim传的时Cat类型的数据，但是本身没有swim方法。
  
* 使用类型保护
类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型
  * is保护
  要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词。

    function isCat(pet: Fish | Cat): pet is Cat {
      return (<Cat>pet).run !== undefined;
    }
    if (!isCat(pet)) {
      pet.swim();
    }else {
      pet.run();
    }
  __谓词为 parameterName is Type这种形式， parameterName必须是来自于当前函数签名里的一个参数名。__

  * typeof类型保护
  就是js中那种判断基本类型一样的方式。

    function getLength_typeof(something: string | number): number {
      if (typeof something == 'string') {
        return (<string>something).length;
      } else {
        return something.toString().length;
      }
    }
  
  这些* typeof类型保护*只有两种形式能被识别： typeof v === "typename"和 typeof v !== "typename"， "typename"必须是 "number"， "string"， "boolean"或 "symbol"。 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

  * instanceof类型保护
  同上
  instanceof类型保护是通过构造函数来细化类型的一种方式，主要方式是类，通过判断是否为类的实例。

##### 类型别名

类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。

  type Name = string;
  let a_type:Name = '1111';
  let b_type:Name = 111;//不能将类型“111”分配给类型“string”

同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入

  type Container<T> = { value: T };


类型别名与接口的区别

* interface 只能用于定义对象类型。interface有其特定的用处：
  1. interface 方式可以实现接口的 extends 和 implements
  2. interface 可以实现接口合并声明
* type 的声明方式除了对象之外还可以定义交叉、联合、原始类型等，类型声明的方式适用范围显然更加广泛。
* 接口创建了一个新的名字,可以在其它任何地方使用,类型别名并不创建新名字,比如,错误信息就不会使用别名

##### 字符串字面量类型
字符串字面量类型允许你指定字符串必须的固定值。

  type type_senior = 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'symbol'
  function showType(type:type_senior):void{
    if(type == 'string'){
      console.log('字符串')
    }else{
      console.log('不是字符串')
    }
  }
  showType('null')
  showType('object') // 类型“"object"”的参数不能赋给类型“type_senior”的参数。

##### 数字字面量类型
同上

##### 可辨识联合
通过单例类型，联合类型，类型保护和类型别名来创建一个叫做 可辨识联合的高级模式。  
可辨识联合在函数式编程很有用处。  
一些语言会自动地为你辨识联合；而TypeScript则基于已有的JavaScript模式。 它具有3个要素：  
1. 具有普通的单例类型属性 — 可辨识的特征。
2. 一个类型别名包含了那些类型的联合— 联合。
3. 此属性上的类型保护。

  interface Square { // 可辨识的特征
    kind: "square";
    size: number;
  }
  interface Rectangle { // 可辨识的特征
    kind: "rectangle";
    width: number;
    height: number;
  }
  interface Circle { // 可辨识的特征
    kind: "circle";
    radius: number;
  }

  type Shape = Square | Rectangle | Circle; // 联合
  function area(s: Shape) {
    switch (s.kind) { // 类型保护
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
  }

##### 多态的 this类型
多态的 this类型表示的是某个包含`类或接口`的 子类型。 这被称做 F-bounded多态性。 它能很容易的表现连贯接口间的继承
最好的例子就是官网上的例子...

  class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
  }
  class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
  }

  let v = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();

如果没有 this类型， ScientificCalculator就不能够在继承 BasicCalculator的同时还保持接口的连贯性。 multiply将会返回 BasicCalculator，它并没有 sin方法。 然而，使用 this类型， multiply会返回 this，在这里就是 ScientificCalculator。

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

  #### 索引类型查询操作符与索引访问操作符
  keyof索引类型查询操作符是 获取操作数的可访问索引字符串字面量类型
  假设T是一个类型，那么keyof T产生的类型是T的属性名称字符串字面量类型构成的联合类型。  
  特别说明:T是数据类型，并非数据本身。

    interface Itest{
      webName:string;
      age:number;
      address:string
    }
    type ant=keyof Itest; // 等价于 type ant = "webName" | "age" | "address"

  如果T是一个带有字符串索引签名的类型，那么keyof T是string类型，并且T[string]为索引签名的类型，这就是索引访问操作符

    interface Map<T> {
      [key: string]: T;
    }
    let keys: keyof Map<number>; //string
    let value: Map<number>['antzone']; //number

    class Images {
      public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      public alt: string = '谷歌'
      public width: number = 500
    }

    type propsNames = keyof Images //  等价于type propsNames = "src" | "alt" | "width"

    type propsType = Images[propsNames] // 等价于type propsType = string | number

#### 映射类型
一个场景：有一个User接口，现在有一个需求是把User接口中的成员全部变成可选的，我们应该怎么做？难道要重新一个个:前面加上?,有没有更便捷的方法？  
映射类型就派上用场了，映射类型的语法是[K in Keys]
* K：类型变量，依次绑定到每个属性上，对应每个属性名的类型
* Keys：字符串字面量构成的联合类型，表示一组属性名（的类型）

首先，我们得找到Keys，即字符串字面量构成的联合类型，假设我们传入的类型是泛型T，得到keyof T，即传入类型T的属性名的联合类型。

然后我们需要将keyof T的属性名称一一映射出来[K in keyof T]，如果我们要把所有的属性成员变为可选类型，那么需要T[K]取出相应的属性值，最后我们重新生成一个可选的新类型{ [K in keyof T]?: T[K] }。
  
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

