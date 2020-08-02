"use strict";
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
var sentence = "Hello, my name is " + user + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
var a = undefined;
var b = null;
var c = undefined;
var d = null;
var e = null;
var f = undefined;
var u;
var bool_1 = false;
var symbol_1 = Symbol(2);
var symbol_2 = Symbol(2);
var arr = ['a', 'b', 'c', 'd'];
arr.push('c');
arr.concat(['q', 'e']);
var arrNum = [1, 2, 3, 4];
var arrAny = [1, 2, 3];
var arr_1 = ['a', 1];
var arr_2 = [1, 2, 3, 'a', 'b'];
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 2] = "B";
    Enum[Enum["C"] = 3] = "C";
})(Enum || (Enum = {}));
var enum_1 = Enum.B;
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
var never_1;
var unknown_1;
unknown_1 = {
    myName: 'peter'
};
var any_3 = 'tom';
var tuple = ['a', 1];
tuple.push(2);
var obj_1;
obj_1 = {
    name: 'peter'
};
obj_1 = [1, 2, 3];
var x;
var y;
var Direction;
(function (Direction) {
    Direction["Up"] = "a";
    Direction["Down"] = "b";
    Direction["Left"] = "c";
    Direction["Right"] = "d";
})(Direction || (Direction = {}));
console.log(Direction['Down']);
console.log(Direction.Down);
//# sourceMappingURL=index.js.map