// javaScript automatically understand the number is number or string 
// but if we want to speciffy it then we can use new keyword through which it acts as an object of number datatype
const integer=100
const val=new Number('100')
console.log(val);
console.log(typeof val);
//we can convert it to string using .toString() function
console.log(val.toString().length);
console.log(integer.toString().length);
//with the help of toFixed Function we can fix the decimal places to n digits by passing n as argument
const val1=1000.999
console.log(val1.toFixed(2));
// we can also say it first do round of then give the n decimal places
// their is one more function toPrecision() function 
console.log(val1.toPrecision(1));
console.log(val1.toPrecision(4));
console.log(val1.toPrecision(5));






