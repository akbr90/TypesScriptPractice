//Named function
function display1() {
    console.log("MY Display function");
}
display1();
function Addition(x, y) {
    return (x + y);
}
var sum = Addition(13, 17);
console.log(sum);
//Anonymous function
var greeting = function () {
    console.log('Good Morning');
};
greeting();
var mul = function (x, y, z) {
    return (x * y * z);
};
console.log(mul(2, 3, 5));
//optional parameter
function greets(greet, name) {
    console.log(greet + ' ' + name);
}
greets("Good Night", "Akbar");
greets("Good Morning");
//default parameter
function defaulFun(salam, name) {
    if (name === void 0) { name = "Akbar"; }
    console.log(salam + ' ' + name);
}
defaulFun("Salam", "Maham");
defaulFun("Salam");
//Fat arrow function
var sub = function (x, y) {
    return (x - y);
};
console.log(sub(30, 20));
//parameterless Arrow function
var Print = function () {
    console.log('Hello World');
};
Print();
var printing = function () {
    return console.log('Typescript learning');
};
printing();
function addTest(a, b) {
    return a + b;
}
console.log(addTest(-10, 20));
console.log(addTest("Maham", " Ali"));
function test(x, y) {
    return x + y;
}
function test(p, q) {
    return p + q;
}
