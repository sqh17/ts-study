### 函数 function 
在ts中，函数是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。

#### 声明方式
在 JavaScript 中，有两种常见的定义函数的方式——函数声明和函数表达式

##### 函数声明

一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到。

    function sum(x:number,y:number):number{
      return x+y
    }

##### 函数表达式

    let mySum = function (x: number, y: number): number {
        return x + y;
    };

这两者是等价的，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的

    let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };

注意：
* 输入多余的（或者少于要求的）参数，是不被允许的，会报错
* 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

##### 可选参数

与接口中的可选属性类似，我们用 ? 表示可选的参数。__需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了__

    let myName :(firstName:string,lastName?:string)=>void = function(firstName:string,lastName?:string):void{
      if (lastName) {
        console.log(firstName + ' ' + lastName);
      } else {
        console.log(firstName);
      }
    }

##### 默认参数

可以按照平常的js给参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数，同时这样也不受‘可选参数必须接在必需参数后面’的限制了。

    function buildName(firstName: string = 'Tom', lastName: string) {
      return firstName + ' ' + lastName;
    }
    let tomcat = buildName('Tom', 'Cat');
    let cat = buildName(undefined, 'Cat');

##### 剩余参数

在js中，arguments可以代表函数的所有的参数，可以在函数内获取所有参数。ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）。同样的，ts也是支持...rest的方式。

    function push(array: any[], ...items: any[]) {
      items.forEach(function(item) {
          array.push(item);
      });
    }

    let a_function:number[] = [1,2,3];
    push(a_function, 1, 2, 3);

__剩余参数本身就是个数组，也需要进行类型声明。__

##### 函数重载

什么是函数重载：两个以上的函数，具有相同的函数名，但是形参的个数或者类型不同，编译器根据实参和形参的类型及个数的最佳匹配，自动确定调用哪一个函数，这就是函数的重载。

    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: any): any{
      if (typeof x === 'number') {
          return Number(x.toString().split('').reverse().join(''));
      } else if (typeof x === 'string') {
          return x.split('').reverse().join('');
      }
    }

上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
__注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。__

##### this

在js中this可以通过上下文得知this的指向，在ts中，若不表明类型则容易报错。

* 在普通的函数里，可以在参数列表里最前面添加this:any，指定假的参数，不影响
* 在class中，可以在参数列表中this可以指定当前的class类