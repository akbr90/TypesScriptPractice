"use strict";
exports.__esModule = true;
exports.myclass = exports.myfun = exports.x = void 0;
exports.x = "welcome";
function myfun() {
    console.log("This is my function");
}
exports.myfun = myfun;
var myclass = /** @class */ (function () {
    function myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return myclass;
}());
exports.myclass = myclass;
