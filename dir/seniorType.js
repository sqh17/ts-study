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
var senior_Type;
var str_senior = 'abc';
var num_senior = 123;
var jcType = {
    name: 'haha',
    fun1: function () { },
    fun2: function () { },
};
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function isCat(pet) {
    return pet.run !== undefined;
}
function getLength_typeof(something) {
    if (typeof something == 'string') {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
var a_type = '1111';
function showType(type) {
    if (type == 'string') {
        console.log('字符串');
    }
    else {
        console.log('不是字符串');
    }
}
showType('null');
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
var Query = (function () {
    function Query(tableName) {
        if (tableName === void 0) { tableName = ''; }
        this.tableName = tableName;
        this.whereCon = [];
    }
    Query.prototype.andWhere = function (key, value) {
        this.whereCon.push(key + "=" + value);
        return this;
    };
    Query.prototype.orWhere = function (key, value) {
        this.whereCon.push("OR " + key + "=" + value);
        return this;
    };
    Query.prototype.inWhere = function (key, value) {
        this.whereCon.push("AND " + key + " IN (" + value + ")");
        return this;
    };
    Query.prototype.getSQL = function () {
        return "SELECT * FROM " + this.tableName + " WHERE " + this.whereCon.join(' ');
    };
    return Query;
}());
var TQuery = (function (_super) {
    __extends(TQuery, _super);
    function TQuery(tableName) {
        if (tableName === void 0) { tableName = ''; }
        return _super.call(this, tableName) || this;
    }
    TQuery.prototype.getUpdateSql = function (key, value) {
        return "UPDATE " + this.tableName + " SET " + key + "=" + value + " WHERE " + this.whereCon.join(' ');
    };
    return TQuery;
}(Query));
var generateSQL = new Query('table_name')
    .andWhere('key1', 'value1')
    .orWhere('key2', 'value2')
    .inWhere('key3', 'value3')
    .getSQL();
console.log(generateSQL);
var generateSQL1 = new TQuery('table_name')
    .andWhere('key1', 'value1')
    .orWhere('key2', 'value2')
    .inWhere('key3', 'value3')
    .getUpdateSql('key4', 'value4');
console.log(generateSQL1);
//# sourceMappingURL=seniorType.js.map