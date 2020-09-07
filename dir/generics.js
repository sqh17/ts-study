"use strict";
function returnItem(val) {
    return val;
}
returnItem([1, 2, 3, 4]);
function getLen(val) {
    console.log(val.length);
}
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var getData = function (val) {
    return val;
};
var GetMin = (function () {
    function GetMin() {
        this.arr = [];
    }
    GetMin.prototype.add = function (ele) {
        this.arr.push(ele);
    };
    GetMin.prototype.min = function () {
        var min = this.arr[0];
        this.arr.forEach(function (value) {
            if (value < min) {
                min = value;
            }
        });
        return min;
    };
    return GetMin;
}());
var gm1 = new GetMin();
gm1.add(5);
gm1.add(3);
gm1.add(2);
gm1.add(9);
console.log(gm1.min());
//# sourceMappingURL=generics.js.map