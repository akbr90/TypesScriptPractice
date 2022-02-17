var fname:string = "Akbar";
var lname:string = "Ali";
var str:string = "I love typescript";

console.log(fname.concat(lname))
console.log(str.split(' '));
console.log(str.split(' ',2));
console.log(fname.toUpperCase())
console.log(lname.toLowerCase())
console.log(str.substring(0,5))
console.log(fname.charAt(2))

var a:number = 10;
var b:number = 7;
var c:number = 12;

var max:number = Math.max(a, b, c);
var min:number = Math.min(a,b,c);
var mid:number = (a+b+c) - (max+min);
console.log( min, mid, max);
