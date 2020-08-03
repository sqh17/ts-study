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

在js中，对象就有无限声明赋值的特性，ts也可以设置接口的任意类型来无限声明赋值。

