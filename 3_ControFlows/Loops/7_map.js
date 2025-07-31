/**
 * @fileoverview map() method
 */
/** `map()` Method in JavaScript
 * - A built-in higher-order array method used to transform each element in an array.
 * - Executes a callback function once for each element and creates a new array with the transformed values.
 * - Does not modify the original array.
 * Why it's used:
 * - Ideal for converting, changing, or remapping the values of an array.
 * - Clean, readable, and functional approach to data transformation.
 * Limitations:
 * - Always returns a new array of the **same length** as the original.
 * - Cannot skip elements — every item gets processed.
 * Syntax:
 *   array.map(callback_function);
 * Parameters:
 * - `element`: current item being processed
 * - `index` (optional): index of the current item
 * - `array` (optional): the original array being processed
 * Return:
 * - A new array with the results of calling the provided function on every element.
 */
// `filter()` vs `map()`
// - `filter()` is used to return **only** those items that satisfy a condition (removes others).
// - `map()` keeps **all** items and transforms each one based on the callback logic.
const numbers = [1, 2, 3, 4, 5];
const addTen = numbers.map((num) => num + 10);
console.log(addTen); // Output: [11, 12, 13, 14, 15]

// map() on array of objects
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];
const userIds = users.map((user) => (user.id));
console.log(userIds); // [ '1', '2', '3' ]

// Chaining Array methods
const myNums = [1.5, 2.7, 3.15, 4.09, 5.765];
const plainTripplededNums = myNums
  .map((num) => num * 3)
  .map((num) => Math.floor(num));
// After first map, the new array [ 4.5, 8.100000000000001, 9.45, 12.27, 17.294999999999998 ] was returned
// that new array then got mapped again and each item got rounded off, and final output
// [ 4, 8, 9, 12, 17 ]
console.log(plainTripplededNums); // Output: [ 4, 8, 9, 12, 17 ]

// chaining filter() and map()
const myNums2 = [11, 21.5, 31, 4, 5.09];
const multipliedEvenNumbers = myNums2
  .map((num) => num * 2)
  .map((num) => {
    num += 1;
    return Math.floor(num);
  });
//   .filter((num) => num % 2 === 0);
console.log(multipliedEvenNumbers); // Output: [44]
// first map returned array [ 22, 43, 62, 8, 10.18 ]
// second map returned array [ 23, 44, 63, 9, 11 ]
// at last, filter() checked that array which second map returned, and it returned [44]
