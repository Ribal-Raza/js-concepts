/* 1- "use strict" it is used to tell the engine/browser (Node.js or v8 or others) to treat code as newer version of JS
2-  alert("Hello"), this line of code will produce error while running script on Node.js, but in browser console this line will generate a browser alert popup*/

/* JS doesnot provides any specification to add to the variable which shows it's data type.
It infers the data-type from the value assigned to variable */
let name = "Ribal"; // 1- "string" data type
let age = "24"; // 2- "number" data type
let isAdult = true; // 3- "boolean" data type, it's value can be true or false

/* 4- 'BigInt' is also a data type in JS to represent large number. BigInt values are similar to Number values in some ways, but also differ in a few key matters. The can be defined using 
BigInt(9007199254740991) or putting an 'n' at the end of value like 9007199254740991n */
// 5- 'null' a data type and it is representation of empty value. It itself is an Object
// 6- 'undefined' is representation of value not defined
// 7- 'symbol' is used for showing uniquness of a component
// 8- 'object' is a collection of different types with Key-Value pairs or functions

console.log(typeof isAdult); // 'typeof' is used to find data type
console.log(typeof null); //typeof null is an object, some people say that this an error of JS
