/**
 * @fileoverview Confusions in Data Types Conversion
 */
/** In JS, conversion of datatype is often confusing because it leads to some unwanted or surprise behaviours.
 * Let's get started and check different data types conversions and some surprise cases.
 */
// A- Conversion of Other Data types to Numbers
// 1. String to number:
let value1 = "23";
// To convert string to number, 'Number' keyword is used. Basically Number() converts string to number. Similar for other datatypes. Like Boolean() converts a type to boolean. String() converts a type to string.
let value1InNumber = Number(value1);
// to check datatype of a value or variable, 'typeof' keyword is used.
console.log(value1InNumber, typeof value1InNumber); // Output: 23 and type 'number'
// Last example was easy. But what if there are some characters with the numbers in a string.
// let's check it
let value2 = "23gh/";
let value2InNumber = Number(value2);
console.log(value2InNumber, typeof value2InNumber); // Output: NAN and type 'number'
// It's printing data type as 'number' but the value is 'NAN'(Not A Number)
/**Let's break down this behaviour.
 * "23gh/" is a string that contains numbers and characters.
 * When Number() tries to convert "23gh/" string into number, it fails to do. So it gives NAN.
 * NAN is a special numeric value that does mean that type is number but it's undefined or unpresentable
 */

// Now let's convert some other data types to Number and check their results
// 2. 'null' to number
let temperatue1 = null;
let temperature1InNumber = Number(temperatue1); // it will convert null into 0
console.log(temperature1InNumber, typeof temperature1InNumber); // Output: 0 and type 'number'

// 3. 'undefined' to number
let temperatue2; // its value is not specified so its current value is undefined
let temperature2InNumber = Number(temperatue2); // it will convert 'undefined' into NAN
console.log(temperature2InNumber, typeof temperature2InNumber); // Output: NAN and type 'number'

// 4. 'boolean' to number
let isTemp0 = true;
let isTemp0InNum = Number(isTemp0); // it will convert 'true' to 1 and 'false' to 0
console.log(isTemp0InNum, typeof isTemp0InNum); // Output: 1 and type 'number'

// B- Conversion other data types to Boolean
/** Truthy and Falsy Values
 * Any value which is considered as true when converted to boolean is Truthy.
 * Any value which is considered as false when converted to boolean is Falsy.
 */
// 1. 'number' to boolean
let num1 = 22;
let num1InBoolean = Boolean(num1); // will convert into true
console.log(num1InBoolean, typeof num1InBoolean); // Output: true and type 'boolean'
// The reason is that any number other than 0 is truthy value.

// 2. number 0 to boolean
let num2 = 0;
let num2InBoolean = Boolean(num2);
console.log(num2InBoolean, typeof num2InBoolean); // Output: false and type 'boolean'
// The reason is that 0 is falsy value.

// 3. negative number to boolean
let num3 = -22;
let num3InBoolean = Boolean(num3);
console.log(num3InBoolean, typeof num3InBoolean); // Output: true and type 'boolean'
// The reason is that any number other than 0 is truthy value.

// 4. empty 'string' to boolean
let name1 = "";
let name1InBoolean = Boolean(name1);
console.log(name1InBoolean, typeof name1InBoolean); // Output: false and type 'boolean'
// The reason is that empty string is falsy value.

// 5. non-empty 'string' to boolean
let name2 = "Ribal";
let name2InBoolean = Boolean(name2);
console.log(name2InBoolean, typeof name2InBoolean); // Output: true and type 'boolean'
// Reason is that non-empty string is a truthy value

// 6. 'null' to boolean
let name3 = null;
let name3InBoolean = Boolean(name3);
console.log(name3InBoolean, typeof name3InBoolean); // Output: false and type 'boolean'
// Reason is that null is falsy value

// 7. 'undefined' to boolean
let name4;
let name4InBoolean = Boolean(name4);
console.log(name4InBoolean, typeof name4InBoolean); // Output: false and type 'boolean'
// Reason is that undefined is falsy value

// C- Conversion of Other Data types to String
// 1. 'number' to string
let anyNumber = 25;
let anyNumberInString = String(anyNumber);
console.log(anyNumberInString, typeof anyNumberInString); // Output: 25 and type 'string'

// 2. 'boolean' to string
let anyBool = true;
let anyBoolInString = String(anyBool);
console.log(anyBoolInString, typeof anyBoolInString); // Output: true and type 'string'

// 3. 'null' to string
let anyNull = null;
let anyNullInString = String(anyNull);
console.log(anyNullInString, typeof anyNullInString); // Output: null and type 'string'

// 4. 'undefined' to string
let anyUndefined;
let anyUndefinedInString = String(anyUndefined);
console.log(anyUndefinedInString, typeof anyUndefinedInString); // Output: undefined and type 'string'

// Demonstrating type coercion with the addition operator in JavaScript
console.log(1 + 2); // Adding two numbers results in their sum (3)
console.log("1" + 2); // Adding a string and a number results in string concatenation (converts 2 to string and appends) ("12")
console.log(1 + "2"); // Adding a number and a string also results in string concatenation (converts 1 to string and appends) ("12")
console.log("1" + 2 + 2); // When a string is the first operand, all subsequent additions are treated as string concatenations ("122")
console.log(1 + 2 + "2"); // When numbers are the first operands, they are added numerically before concatenating with a string ("32")

// prefix and postfix with incremental and decremental values
//'++' is short hand of adding/incrementing 1 to value
//'--' is short hand for subtracting/decrementing 1 from value
let counterPost = 10;
let counterPre = 10;
counterPost++; // This is Postfix increment, It adds 1 to value after variable call.
++counterPre; //This is Prefix increment, It adds 1 to value before variable call
console.log(counterPost, counterPre);
counterPost--; // This is Postfix decrement, It subtracts 1 to value after variable call.
--counterPre; // This is Prefix decrement, It dubtracts 1 to value after variable call.
console.log(counterPost, counterPre);
