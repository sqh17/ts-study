function greeter(person) {
    return "Hello, " + person;
}
var isDone = false;
var createdByNewBoolean = Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var binaryLiteral_1 = 1;
var binaryLiteral_2 = 668;
var octalLiteral = 484;
var num_2 = undefined;
var book = '深入浅出 Typescript';
var user = "Jane User";
var age = 18;
// const sentence:string = `my name is ${user}`
var sentence = "Hello, my name is " + user + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
var a = undefined;
var b = null;
var c = undefined;
var d = null;
var e = null;
var f = undefined;
var u;
// let g: number = u;
var bool_1 = false;
// const symbol_1:symbol = Symbol(2);
// const symbol_2:symbol = Symbol(2);
// console.log(symbol_1 == symbol_2);
var arr = ['a', 'b', 'c', 'd'];
// console.log(arr[5].toString())
arr.push('c');
arr.concat(['q', 'e']);
// console.log(arr,arr.concat(['q','e']));
var arrNum = [1, 2, 3, 4];
var arrAny = [1, 2, 3];
var arrObj = [{}];
var arr_1 = ['a', 1];
// let arr_2 :[string,number] = ['a',1,'a'];
var arr_2 = [1, 2, 3, 'a', 'b'];
// const bigInt_1:bigint = BigInt(Number.MAX_SAFE_INTEGER);
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 2] = "B";
    Enum[Enum["C"] = 3] = "C";
})(Enum || (Enum = {}));
var enum_1 = Enum.B;
// console.log(enum_1)
// console.log(Enum); 
function foo() {
    console.log('this is peter');
}
function foo1() {
    console.log('今天天气不错');
}
var fo_1 = null;
var a_1 = 2;
var obj = {
    name: 'peter'
};
var any_1;
any_1 = 4;
any_1 = '4';
any_1 = [1, 2, 3];
var any_2;
any_2 = 4;
var anyThing = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');
var never_1;
// never_1 = 123;
// never_1 = (()=>{ throw new Error('exception')})();
var unknown_1;
unknown_1 = {
    myName: 'peter'
};
// console.log(unknown_1.myName);
var any_3 = 'tom';
// console.log(any_3.myName);
var tuple = ['a', 1];
tuple.push(2); // ok
// console.log(tuple); // ["a", 1, 2] -> 正常打印出来
// console.log(tuple[2])
var obj_1;
obj_1 = {
    name: 'peter'
};
obj_1 = [1, 2, 3];
// obj_1 = '1';
var x;
var y;
// 运行错误，数字类型不能转为 never 类型
// x = 123;
// 运行正确，never 类型可以赋值给 never类型
// x = (()=>{ throw new Error('exception')})();
// 运行正确，never 类型可以赋值给 数字类型
// y = (()=>{ throw new Error('exception')})();
// enum Direction {
//   Up = 1,
//   Down = 3,
//   Left = 5,
//   Right = 6
// }
// console.log(Direction['Down']) // 3
// console.log(Direction[3]) // Down
var Direction;
(function (Direction) {
    Direction["Up"] = "a";
    Direction["Down"] = "b";
    Direction["Left"] = "c";
    Direction["Right"] = "d";
})(Direction || (Direction = {}));
console.log(Direction['Down']); // b
console.log(Direction.Down); // Down
