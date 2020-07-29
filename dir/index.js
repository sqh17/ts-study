"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var isDone = false;
var createdByNewBoolean = Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
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
var obj = {
    name: 'peter'
};
//# sourceMappingURL=index.js.map