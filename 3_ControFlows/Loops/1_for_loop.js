/**
 * @fileoverview For Loop in JS
 * Loops in JavaScript are control flow structures that allow you to repeatedly execute a block
 * of code as long as a specified condition remains true. They are useful for iterating over
 * sequences of data or performing repetitive tasks.
 * Each repetition of the loop is called an iteration.
 * So a more official name of loops is Iterators
 */

// for loop
// let's first print 5 numbers in console using for loop
for (let index = 0; index <= 5; index++) {
  console.log(index);
}
/**
 * Understanding the for loop from the example above:
 * In JavaScript, the for loop has block scope, which means that a variable
 * declared with `let` or `const` inside the loop cannot be accessed outside of it.
 * General syntax:
 * for (initialization; condition; increment/decrement) {code to run}
 * Let's break it down:
 * 1. **Initialization**: `let index = 0` — sets the starting point of the loop.
 * 2. **Condition**: `index <= 5` — the loop continues **as long as** this condition is true.
 * 3. **Increment/Decrement**: `index++` — updates the loop variable after each iteration.
 * Execution Flow:
 * - Step 1: Initialize `index` to 0.
 * - Step 2: Check if `index <= 5`. If true, proceed.
 * - Step 3: Run the code block → `console.log(index)`.
 * - Step 4: Increment `index` by 1 (`index++`).
 * - Step 5: Repeat from Step 2.
 * The loop stops once the condition becomes false.
 * In this example, numbers 0 through 5 are printed to the console.
 */

// Adding 'if else' inside for loop
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log(`${i} is the best`);
  }
  console.log(i);
}

// Nested for loops - For loop within for loop
for (let i = 0; i < 5; i++) {
  console.log(`Outer Loop Iteration ${i}`);
  for (let j = 0; j < 5; j++) {
    console.log(`  Inner Loop Iteration ${j}`);
  }
}
/**
 * Nested for loop example:
 * In this example, we use a `for` loop inside another `for` loop — a **nested loop**.
 * Loop Breakdown:
 * ---------------------
 * Outer loop:
 * - Runs from i = 0 to i < 5 (i.e., 5 iterations: 0, 1, 2, 3, 4).
 * - In each outer loop iteration, the inner loop runs completely.
 * Inner loop:
 * - Runs from j = 0 to j < 5 for each value of i.
 * - So, it also executes 5 times during each outer loop iteration.
 * Execution Flow:
 * - When i = 0, inner loop runs for j = 0 to 4 → 5 times
 * - When i = 1, inner loop runs for j = 0 to 4 → 5 times
 * - ...
 * - This continues until i = 4
 * Total Iterations:
 * - Outer loop runs 5 times
 * - Inner loop runs 5 times per outer loop iteration
 * - So, inner loop executes: 5 (outer) × 5 (inner) = **25 times**
 * Output:
 * - You’ll see 5 outer loop messages and 25 inner loop messages in the console.
 */

// for loops with arrays
const marvelHeroes = [
  "Ironman",
  "Captain America",
  "Doctor Strange",
  "Mr. Fantastic",
];
for (let i = 0; i < marvelHeroes.length; i++) {
  console.log(marvelHeroes[i]);
}
/**
 * Looping through an array using a for loop:
 * In JavaScript, arrays are zero-indexed — this means the first element is at index 0,
 * the second at index 1, and so on.
 * In this example:
 * - We have an array `marvelHeroes` with 4 elements.
 * - We use a `for` loop to iterate over the array using index `i`.
 * Key Points:
 * ------------
 * - `marvelHeroes.length` returns the total number of elements in the array (4).
 * - Since array indices start at 0, the valid indices are 0 to 3.
 * - That’s why the loop condition is `i < marvelHeroes.length` (not `<=`):
 *     - ✅ `i < 4` → loop runs for i = 0, 1, 2, 3 → valid
 *     - ❌ `i <= 4` → loop runs for i = 0 to 4 → causes `marvelHeroes[4]` to return `undefined`
 * Output:
 * - The loop will print each hero’s name one by one from the array.
 */

// break and continue
const items = ["bag", "jacket", "pant", "shirt", "glasses", "sunscreen"];
/** Example 1: Using 'break' to exit the loop early
 * The `break` statement is used to immediately stop the loop, even if
 * the loop condition is still true.
 * In this example:
 * - We loop through each item in the `items` array.
 * - When the item is "shirt", we print a message and use `break` to exit the loop.
 * So, once "shirt" is detected, the loop stops completely — remaining items won't be checked.
 */
for (let i = 0; i < items.length; i++) {
  if (items[i] === "shirt") {
    console.log("shirt detected");
    break;
  }
  console.log(`Loops with Break: ${items[i]}`);
}
/**
 * Example 2: Using 'continue' to skip a specific iteration
 * The `continue` statement **skips the current iteration** of the loop and moves
 * to the next one.
 * In this case:
 * - When the item is "shirt", we log that it was detected and `continue` is called.
 * - This means the `console.log(items[i])` line is skipped **for that iteration only**.
 * - All other items, including the ones after "shirt", are still processed.
 */
for (let i = 0; i < items.length; i++) {
  if (items[i] === "shirt") {
    console.log("shirt detected");
    continue;
  }
  console.log(`Loops with Continue: ${items[i]}`);
}
