### 接口 interface

此接口非彼接口，在ts中只是对象的一种，用来定义对象的类型

#### 什么是接口

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
ts的接口-interfaces经常用于对对象的形状，特点进行描述。

#### 小试牛刀

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

从例子可以看到，所谓的接口，还是按照对象形式+类型定义的方式，然后在定义变量时运用起来，并添加其约束。  
__一般声明接口时，首字母大写__

#### 接口定义
在用interface声明变量时，若没有其他的特殊情况，比如任意属性，可选属性，只读属性等，数量不能多也不能少，顺序倒是无所谓，多了未知的属性不行，少了已知的属性也不行，否则会报错。

    interface Person{
      id:number,
      name:string,
      isMale:boolean
    }

    let peter:Person = {
      id:123456,
      name:'peter',
    } // 报错，缺少属性isMale

    let tom:Person = {
      name:'tom',
      id:1111111,
      isMale:false,
      age:20
    } // 报错，age不在Person属性中

#### 可选属性

可选属性，意思就是不是必须要填写的属性，就在该属性后面加上？即可。仍然不允许添加未定义的属性

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
      isBig:true
    }// 报错，isBig不在Animal类型中

#### 只读属性

只读属性，意思就是，在第一次创建后，就不能再赋值。
__只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候__

    interface Flower{
      readonly name:string,
      color:string
    }

    let red_flower:Flower = {
      name:'red_flower',
      color:'red'
    }
    red_flower.name = 'green_flower' // 报错，无法分配到“name”，因为它是常数或只读属性。

#### 任意类型

在js中，对象就有无限声明赋值的特性，ts也可以设置接口的任意类型来无限声明赋值。使用 [propName: string]或者[propName: number] 定义了任意属性取 string或number 类型的值。

    interface Person_1{
      id:number
      name:string,
      [propName:string]:string,
    } //报错 类型“number”的属性“id”不能赋给字符串索引类型“string”
    let Lily:Person_1 = {
      id:12345,
      name:'Lily',
      age:18,
    } // 报错，不能将类型“number”分配给类型“string”。

一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集，就拿上面的例子说，一旦声明了任意类型为string，那么就不能定义属性number和boolean了，同样的道理，在应用的时候，未知的属性也必须是string类型。  
解决这个办法就将任意类型的类型设置为any或者unknown，或者采用联合类型。除非有万不得已的情况，不建议采用此方法

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

TypeScript支持两种索引签名：字符串和数字。 可以同时使用`两种类型的索引`， 简称：可索引类型。 
  
可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。  
__都是说明属性是字符串还是数字，一般对象中字符串居多，数组数字居多，在数组中，可以通过数字索引类型获取对应的值。__
，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

    interface StringArray {
      [index: number]: string;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];


#### 函数接口

给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

    interface encrypt {
      (key: string, value: string): string;
    }

    // 对传入的参数以及返回值进行约束
    let md1: encrypt = function (key: string, value: string): string {
      return key + value;
    }
    console.log(md1('张三', '初一一班'));

#### 继承接口

所谓的继承，就是一个接口能够拥有另一个接口的属性和类型,并且在拥有的基础上再添加自己的属性和类型。  
继承不可以覆盖父接口的属性和类型  
__继承接口可以继承多个父接口__

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

