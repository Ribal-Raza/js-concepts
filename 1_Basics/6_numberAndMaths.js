/**
 * @fileoverview Number and Maths in Javascript
 */
// In JS, numbers refer to positive, negative or floating point numbers.
// As JS is a dynamically typed language, so it picks up the number data type when a variable
// is initialized
// Simple way to define a number variable is following:
// const score = 10; // JS will automatically know that data type of score variable is number
// // Number can be defined using fixed data type
// const balance = new Number(10000);
// console.log(score); // Output: 10
// // Primitives (like score variable) display their literal value.
// //Objects (like new Number()) display their type and value.
// console.log(balance); // Output: [Number: 10000]

// // Methods/Functions on Numbers
// // converting number to string
// console.log(balance.toString(), typeof balance.toString()); // Output: 10000 string
// // fixing the length of number after floating point
// // It comes very handy when you don't want client to overwhelm with lot of floating numbers
// console.log(balance.toFixed(2)); // Output: 10000.00

// // Precision
// const number1 = 12.3456;
// console.log(number1.toPrecision(3)); // Output: 12.3
// const number2 = 123.456;
// console.log(number2.toPrecision(3)); // Output: 123.5
// // The 'toPrecision()' method formats a number to a specified length, including digits before and after the decimal point.
// // It takes an argument representing the total number of significant digits, not just digits after the decimal point.
// // let's see another example if toPrecision
// const number3 = 1122.8978;
// console.log(number3.toPrecision(3)); // Output: 1.12e+3
// // See how in above example, to precision converted the whole number to scientific notation.
// // Because it only had to focus on 3 numbers.

// // Numbers/Amounts to Local strings
// const hundreds = 1000000;
// console.log(`${hundreds} in Local string is: ${hundreds.toLocaleString()}`);
// // By default 'toLocaleString()' converts a number to US standard. Like hundered thousand
// // or a million and so on.
// // But the specific country code can be defined to get amounts in local terms
// console.log(
//   `${hundreds} in Local string is: ${hundreds.toLocaleString("en-IN")}`
// );

// // Min and Max values of Number
// console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // Output: 5e-324
// console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
// console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
// console.log(Number.POSITIVE_INFINITY); // Output: Infinity
// console.log(Number.NaN); // Output: NaN (Not a Number, or a number that is not presentable)

// +++++++++++++++++++++ Maths +++++++++++++++++++++
// 'Math' is a built-in object in Javascript that provides mathematical constants and functions.
// It holds properties like PI and methods for trigonometry, exponentiation, rounding, etc.
// If you print it in console in node.js, you may not see it's functions
// But in browser's console, it provides a whole list of functions
console.log(Math); // Output: Object [Math] {} (with node.js)
// some examples using Math
console.log(`Value of PI: ${Math.PI}`); // Output: 3.141592653`
console.log(`Absolute value of -4: ${Math.abs(-4)}`); // Output: 4
console.log(`Ceiling value of 4.2: ${Math.ceil(4.2)}`); // Output: 5
console.log(`Floor value of 4.2: ${Math.floor(4.2)}`); // Output: 4
console.log(`Round value of 4.2: ${Math.round(4.2)}`); // Output: 4
console.log(`Round value of 4.7: ${Math.round(4.7)}`); // Output: 5

// Math is not only limited to numbers, it's functions can also be applied on arrays
console.log(`Maximum value of set: ${Math.max(1, 2, 3, 4, 5)}`); // Output: 5
console.log(`Minimum value of set: ${Math.min(1, 2, 3, 4, 5)}`); // Output: 1

// Getting random numbers using Math.random
console.log(
  `The default value of Math.random() revolves in between 0 and 1: ${Math.random()}`
);
// So to actually get a random number between 0 to 10
// We have to multiply the output of Math.random() by 10
// And then rounding it off, with Math.floor() or Math.round() or Math.ceil()

const randomNumber = Math.floor(Math.random() * 10);
console.log(`Random number between 0 and 10: ${randomNumber}`);
// similarly for getting a random number that is always even
const randomEvenNumber = Math.floor(Math.random() * 6) * 2;
console.log(`Random even number: ${randomEvenNumber}`);
// getting a random odd number between 0 to 10
const randomOddNumber = Math.floor(Math.random() * 5) * 2 + 1;
console.log(`Random odd number: ${randomOddNumber}`);
// even and odd random numbers generator functions with any max range
// A function to generate even numbers upto any range
function generateEvenNum(maxValue) {
  const slots = Math.floor(maxValue / 2) + 1;
  const randomEvenNum = Math.floor(Math.random() * slots) * 2;
  return randomEvenNum;
}
console.log(`Random even number upto 100: ${generateEvenNum(100)}`);
// A function to generate odd numbers upto any range
function generateOddNum(maxValue) {
  const slots = Math.ceil(maxValue / 2);
  const randomOddNum = Math.floor(Math.random() * slots) * 2 + 1;
  return randomOddNum;
}
console.log(`Random odd number upto 100: ${generateOddNum(100)}`);
// getting multiple of 10
const random10sNumber = Math.floor((Math.random() * 100) / 10) * 10;
console.log(`Random multiple of 10: ${random10sNumber}`);
// getting multiple of 100s
const random100sNumbers = Math.floor((Math.random() * 100) / 10) * 100;
console.log(`Random multiple of 100: ${random100sNumbers}`);

// Random Numbers in a range
// A template formula to remember
let min = 10;
let max = 20;
let ranNumRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Number between 10-20: ${ranNumRange}`);
// A function to generate random numbers in a range
function randomNumberInRange(min, max) {
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
    return RangeError(`Range must be a safe integer`);
  }
  if (min > max) [min, max] = [max, min]; //swapping min and max if min is greater than max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`Random Number between 100-200: ${randomNumberInRange(100, 200)}`);
console.log(
  `Random Number between 1000-2000: ${randomNumberInRange(1000, 2000)}`
);
console.log(
  `Random Number between 10000-20000: ${randomNumberInRange(10000, 20000)}`
);

// Getting Even number in a range
function randomEvenInRange(min, max) {
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
    return RangeError(`Range must be a safe integer`);
  }
  if (min > max) [min, max] = [max, min]; //swapping min and max if min is greater than max
  const first = min % 2 === 0 ? min : min + 1;
  if (first > max) throw Error(`No Even number in this range`);
  const slots = Math.floor((max - first) / 2) + 1;
  const randomNumber = Math.floor(Math.random() * slots) * 2 + first;
  return randomNumber;
}
console.log(
  `Random Even Number between 100-200: ${randomEvenInRange(100, 200)}`
);
console.log(
  `Random Even Number between 1000-2000: ${randomEvenInRange(1000, 2000)}`
);
console.log(
  `Random Even Number between 10-20: ${randomEvenInRange(10, 20)}`
);
