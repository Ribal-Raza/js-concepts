/**
 * @fileoverview reduce() method
 */
/** `reduce()` Method in JavaScript
 * - A built-in higher-order array method used to reduce an array to a single value.
 * - Executes a callback function (reducer) on each element, carrying forward an accumulator (result so far).
 * - Optionally accepts an initial value for the accumulator.
 * Why it's used:
 * - Ideal for summarizing, calculating totals, merging values, or building new data structures (objects, arrays, strings).
 * - Powerful for data aggregation and functional programming patterns.
 * Limitations:
 * - Slightly more complex to grasp than `map()` or `filter()` at first.
 * - The reducer function must return the updated accumulator each time.
 * Syntax:
 *   array.reduce(callback_function, initialValue);
 * Parameters:
 * - `accumulator`: result from the previous iteration (or the initial value on the first run)
 * - `currentValue`: current item being processed in the array
 * - `index` (optional): index of the current item
 * - `array` (optional): the original array being processed
 * Return:
 * - A single final value after all iterations
 */

const arr = [2, 3, 4];
let initialVal1 = 0; // 0 doesn’t affect the sum (neutral element for sum).
const sumOfArray = arr.reduce(
  // At each step, add the current value to the running total (accumulator)
  // callback, traditional function
  function (accumulator, currentValue) {
    // we can see the current value of accumulator with a console log
    console.log(
      `Accumulator value: ${accumulator} + Current Value: ${currentValue}`
    );
    return accumulator + currentValue;
  },
  initialVal1
);
console.log(sumOfArray); // Output: 9
// Step-by-step:
// accumulator = 0 (initial), currentValue = 2 → returns 2
// accumulator = 2, currentValue = 3 → returns 5
// accumulator = 5, currentValue = 4 → returns 9

const arr2 = [2, 3, 4];
let initialValue2 = 1; // multiplying by 1 doesn’t affect the result (neutral element for multiplication).
const productOfArray = arr2.reduce(
  // call back, arrow function
  (accumulator, currentValue) => {
    return accumulator * currentValue;
  },
  initialValue2
);
console.log(productOfArray); // Output: 24

const words = ["I", "love", "JavaScript"];
// empty string because we want to build a sentence from scratch.
const sentence = words.reduce(
  // Concatenate each word followed by a space
  // callback, arrow function implicit return
  (accumulator, currentValue) => accumulator + currentValue + " ",
  "" // initial value is an empty string
  // we can directly pass the initial value without storing it in a variable
);
console.log(sentence); // Output: I love JavaScript

// more smart code
const numbers = [1, 2, 3, 4, 5, 6];
const resultSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(resultSum);

// So finally an close to real world example
// calculating total price of items in a cart
const shoppingCart = [
  { item: "Toothpaste", price: 50 },
  { item: "Skin Soap", price: 80 },
  { item: "Shampoo", price: 150 },
  { item: "Detergent", price: 175 },
  { item: "Dish Soap", price: 20 },
  { item: "Shoe Shiner", price: 70 },
  { item: "Cooking Oil", price: 750 },
  { item: "Sugar", price: 60 },
];
const totalPrice = shoppingCart.reduce(
  (accumulator, currentItem) => accumulator + currentItem.price,
  0
);
console.log(`Total price of items in the cart: ${totalPrice}`);
