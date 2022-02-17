//Named function
function display1(){

    console.log("MY Display function");
}

display1();

function Addition(x:number, y:number):number
{
    return (x + y);
}

var sum:number = Addition(13,17);
console.log(sum);

//Anonymous function

var greeting = function(){
    console.log('Good Morning');
}
greeting();

var mul = function(x:number, y:number, z:number):number
{
    return (x*y*z);
}
console.log(mul(2,3,5));

//optional parameter
function greets(greet:string, name?:string){

    console.log(greet+' '+name);
}

greets("Good Night", "Akbar");
greets("Good Morning");

//default parameter
function defaulFun(salam:string, name:string="Akbar"){

    console.log(salam+' '+name);
}

defaulFun("Salam", "Maham");
defaulFun("Salam");

//Fat arrow function
var sub = (x:number, y:number):number =>
{
    return (x - y);
}

console.log(sub(30,20));

//parameterless Arrow function
var Print = () =>
{
console.log('Hello World')
}

Print();


var printing = () =>
console.log('Typescript learning')
printing();

function addTest(x:number,y:number):number;
function addTest(fname:string,lname:string):string;

function addTest(a:any,b:any):any
{
    return a+b;
}

console.log(addTest(-10,20));
console.log(addTest("Maham"," Ali"));

function test(x:number, y:number):number
{
    return x+y;
}
function test1(p:number, q:string):string
{
    return p+q;
}

