"use strict";
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
//# sourceMappingURL=class.js.map