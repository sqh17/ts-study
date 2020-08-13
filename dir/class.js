"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person_Class = (function () {
    function Person_Class(name, age) {
        this.name = name;
        this.age = age;
        console.log('this', this);
    }
    Person_Class.prototype.say = function () {
        alert(this.name);
    };
    return Person_Class;
}());
var peter_class = new Person_Class('peter', 25);
var Animal = (function () {
    function Animal(thename) {
        this.name = thename;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " \u79FB\u52A8\u4E86 " + distance + "\u7C73");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(thename) {
        var _this = this;
        console.log(thename);
        _this = _super.call(this, thename) || this;
        return _this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(thename) {
        return _super.call(this, thename) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 30; }
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var snake = new Snake('snake');
snake.move();
var horse = new Horse('horse');
horse.move(100);
var Class_Person = (function () {
    function Class_Person(name) {
        this.name = name;
    }
    return Class_Person;
}());
var Class_Male = (function (_super) {
    __extends(Class_Male, _super);
    function Class_Male(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name, '111');
        return _this;
    }
    return Class_Male;
}(Class_Person));
var Class_Animal = (function () {
    function Class_Animal(type) {
        this.name = 'cat';
        this.type = 'cat';
    }
    return Class_Animal;
}());
var cat = new Class_Animal();
cat.name = 'catt';
//# sourceMappingURL=class.js.map