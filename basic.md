#### 开头
--------------
ts的基本类型学习

#### 一 string 字符串
 和js的声明方式一样，只不过在声明变量之前定义数据类型而已  
__声明方式是小写，不是大写__

	let name :string = 'peter'
	let str :string = \`my name is ${name}\`

#### 二 number 数字
TypeScript里的所有数字都是浮点数。这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量，它会把二进制，八进制自动转化为十进制  
__以0b开头的数是二进制，以数字0或者0o开头，由0~7组成的数是八进制。以0X或0x开头，由0\~9，A\~F或a\~f 组成是十六进制__  
__声明方式是小写，不是大写__

	let num:number = 10;
	let num_1:number = 0b0001;// 二进制转十进制为1；
	let num_2:number = 0o744;// 八进制转十进制为284；
	let num_3:number = 0xf00d; // 十六进制还是十六进制为0xf00d；
  
#### 三 boolean 布尔值
只有两种值，false/true  
__声明方式是小写，不是大写__

	let bool_1:boolean = false;
	let bool_2:boolean = true;

#### 注意点----
-----
很多 TypeScript 的原始类型比如 boolean、number、string等等，在JavaScript中都有类似的关键字 Boolean、Number、String，后者是 JavaScript 的构造函数，比如我们用 Number 用于数字类型转化或者构造 Number 对象用的，而 TypeScript 中的 number 类型仅仅是表示类型，两者完全不同。

#### 四 void 空值
JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数。
void它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void。声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null，但是不推荐设置，可以使用联合类型(`let a :number | undefined | null = 2`)

	function foo():void{
		console.log('今天天气不错')
	}
	let a :void = undefined;
	let b :void = null;// 记得将tsconfig的strictNullChecks设置为false
    
#### 五 null / undefined
在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型，我觉得不怎么常用

	let u:undefined = undefined;
	let n:null = null;
	
与 void 的区别是，undefined 和 null 是所有类型的子类型。意思就是任何原始类型的变量可以用undefined和null。但是void不行，会报错

	let a:number = undefined;
	let b:string = null;
	let c:boolean = undefined;
	let e:void;
	let d:string = e; // 报错

#### 六 any 任意值
任意值（Any）用来表示允许赋值为任意类型。  
如果是一个普通类型，在赋值过程中改变类型是不被允许的，但是any可以改变类型，但是违反了严谨的说法。  

	let a:any;
	a = 4;
	a = '4'
	a = [4]

* 在任意值上访问任何属性都是允许的,也允许调用任何方法,可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。虽然有可能编译成js时会报错

	let anyThing: any = 'hello';
	console.log(anyThing.myName);
	console.log(anyThing.myName.firstName);

* 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

	let a; // 等价于let a:any
	a = 4;
	a='4';

#### 七 unknown 
unknown 是 TypeScript 3.0 引入了新类型,是 any 类型对应的安全类型。
unknown 和 any 的主要区别是 unknown 类型会更加严格:在对unknown类型的值执行大多数操作之前,我们必须进行某种形式的检查,而在对 any 类型的值执行操作之前,我们不必进行任何检查。
普通的声明可以参考第六any的例子，最大的区别如下：

	let unkonwn_1:unknown;
	console.log(unkonwn_1.myName); // 标红报错Property 'myName' does not exist on type 'unknown'
	let anyThing: any = 'hello';
	console.log(anyThing.myName); // 不报错

就是 unknown 与 any 的不同之处,虽然它们都可以是任何类型,但是当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等。

#### 八 never 
never类型表示的是那些永不存在的值的类型。  
例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；  
变量也可能是never类型，当它们被永不为真的类型保护所约束时

	// 返回never的函数必须存在无法达到的终点
	function error(message: string): never {
		throw new Error(message);
	}
	// 返回值为 never 的函数可以是无限循环这种无法被执行到的终止点的情况
	function loop(): never {
		while (true) {}
	}

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。(编译后js可能会报错)

	let x: never;
	let y: number;

	// 运行错误，数字类型不能转为 never 类型
	x = 123;

	// 运行正确，never 类型可以赋值给 never类型
	x = (()=>{ throw new Error('exception')})();

	// 运行正确，never 类型可以赋值给 数字类型
	y = (()=>{ throw new Error('exception')})();

#### 九 数组
TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。

	let arr_1:number[] = [1,2,3];
	let arr_2:Array<number> = [1,2,3]

数组一旦声明了数据类型，就只能填写对应类型的数据，比如是number类型，那么就只填number。

#### 十 Tuple 元组
元组类型与数组类型非常相似，表示一个已知元素数量和类型的数组，各元素的类型不必相同，元组的类型如果多出或者少于规定的类型是会报错的，必须严格跟事先声明的类型一致才不会报错，同时也要保证顺序一致

	let x: [string, number];
	x = ['hello', 10, false] // Error
	x = ['hello'] // Error
	x = ['peter',2];
	x.push(3);
	console.log(x) //不报错， ['peter',2,3]
	console.log(x[3])// 报错，Tuple type '[string, number]' of length '2' has no element at index '2'.

#### 十一 对象
object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。如果声明了原始类型的数据，则报错

	let obj_1:object;
	obj_1 = {
		name:'peter'
	};
	obj_1 = [1,2,3];
	obj_1 = '1'; // Type '"1"' is not assignable to type 'object'

#### 十二 枚举 enum
enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

	enum Direction {
		Up,
		Down,
		Left,
		Right
	}
	console.log(Direction['Down']) // 1
	console.log(Direction[1]) // Down

以把枚举类型看成一个JavaScript对象，而由于其特殊的构造，导致其拥有正反向同时映射的特性。通俗的说：可以通过下角标获取值，也可以通过值获取下角标,如果设置字符串的话，没法获取下角标。  
可以手动赋值，数字，字符串

	enum Direction {
		Up = 1,
		Down = 3,
		Left = 5,
		Right = 6
	}
	console.log(Direction['Down']) // 3
	console.log(Direction[3]) // Down

	enum Direction {
		Up = 'a',
		Down = 'b',
		Left = 'c',
		Right = 'd'
	}
	console.log(Direction['Down']) // b


