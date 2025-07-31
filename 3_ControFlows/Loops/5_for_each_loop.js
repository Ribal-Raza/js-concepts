/**
 * @fileoverview for...each loop
 */
/** `forEach()` Loop in JavaScript
 * - A built-in method available on Arrays and some array-like objects.
 * - Executes a **callback function** once for each element in the array.
 * - It does **not** return a value and cannot be stopped or broken (unlike `for`/`for...of`).
 * Why it's used:
 * - Clean and readable for applying operations on each item.
 * - Often preferred in functional-style coding.
 * Limitations:
 * - Doesn’t support `break`, `continue`, or `return` to exit early.
 * - Doesn't return anything even if you specify
 * - Doesn’t work directly on plain objects or non-array iterables (like Sets or Maps).
 * Syntax:
 *   array.forEach(callback_function);
 * Parameters:
 * - `element`: current item being processed
 * - `index` (optional): index of the element
 * - `array` (optional): the original array being iterated
 */
const programmingLanguages = [
  "Javascript",
  "Python",
  "Go",
  "Ruby",
  "Rust",
  "C++",
];
// passing conventional function as callback
console.log("______conventional function as callback______");
programmingLanguages.forEach(function (lang) {
  console.log(lang);
});
// passing arrow function as callback
console.log("______arrow function as callback______");
programmingLanguages.forEach((lang) => {
  console.log(lang);
});
// defining a function and then passing it as callback
console.log("______already defined function as callback______");
function printLang(lang) {
  console.log(lang);
}
programmingLanguages.forEach(printLang);

// in for...each loop, the callback function can accept more parameters other than item
// like index, and complete array
console.log("______callback function with more parameters______");
programmingLanguages.forEach((lang, index, arr) => {
  console.log(`"${lang}" at index ${index} of array:`, arr);
});

// In API responses, you often recieve an array of object
// like an array of users, which contains multiple objects, each object contains user info
// with for...each loop, where the item reperesent value at current index, object properties
// can also be accessed
const users = [
  {
    id: "1A1",
    name: "John",
  },
  {
    id: "1A2",
    name: "Franklin",
  },
  {
    id: "1A3",
    name: "David",
  },
  {
    id: "1A4",
    name: "Henry",
  },
];
console.log("______for...each on Array of Objects______");
users.forEach((user) => {
  console.log(`User ${user.id} is ${user.name}`);
});
