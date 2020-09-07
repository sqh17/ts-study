"use strict";
function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var myName = function (firstName, lastName) {
    if (lastName) {
        console.log(firstName + ' ' + lastName);
    }
    else {
        console.log(firstName);
    }
};
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var cat1 = buildName(undefined, 'Cat');
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a_function = [1, 2, 3];
push(a_function, 1, 2, 3);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            console.log(_this);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function bar_function() {
    console.log(this);
}
var Bar = (function () {
    function Bar(Name) {
        if (Name === void 0) { Name = '10'; }
        this.name = Name;
    }
    Bar.prototype.bar_function1 = function () {
        console.log(this.name);
    };
    return Bar;
}());
//# sourceMappingURL=function.js.map