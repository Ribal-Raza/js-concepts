/**
 * @fileoverview Lexical Scope, Nested Functions, and a Step Toward Closures
 */
/**
 * In JavaScript, functions create their own local scope.
 * Inner (child) functions have access to variables in their outer (parent) functions due to
 * lexical scoping. This is the foundation for closures.
 * However, outer (parent) functions do NOT have access to variables declared inside inner (child) functions.
 */

function parent() {
  const username = "Henry";

  function child() {
    const platform = "Social Media";
    // ✅ Accessing 'username' from parent scope — allowed due to lexical scoping
    console.log(username); // Output: Henry
  }
  // Accessing 'platform' from child scope will throw: ReferenceError: platform is not defined
  // console.log(platform);
  child(); // Child function will execute normally unless an uncaught error occurs above
}

parent(); // Output: Henry

// Same concepts and behaviour of scope can be seen in conditionals and loops
// For example:
if (true) {
  const name = "Flame";
  if (name === "Flame") {
    const mode = "ON";
    console.log(`${name} is ${mode}!`);
  }
  // console.log(mode); // ReferenceError: mode is not defined
}
// console.log(name); // ReferenceError: name is not defined

/**
 * Lexical Scope:
 * In JavaScript, scope is determined by the physical location of your code — this is called lexical (static) scoping.
 * Inner (child) functions can access variables defined in their outer (parent) functions,
 * because they are "lexically enclosed" within those outer scopes — regardless of where they are called from.
 */

/**
 * Closure:
 * A closure is created when a function is defined inside another function,
 * and the inner function "remembers" variables from the outer function — even after the outer function has finished running.
 * This allows the inner function to keep using those variables later on.
 */

/**
 * TL;DR:
 * Lexical Scope = inner function can access outer variables based on where it’s defined (not where it's called).
 * Closure = inner function retains access to outer variables even after the outer function completes.
 */

// Example of a Closure:
function outer() {
  const message = "I am from outer scope!";

  // inner() is defined inside outer(), so it has access to outer's variables
  return function inner() {
    console.log(message); // message is remembered due to closure
  };
}

const sayMessage = outer(); // outer() runs and returns inner()
// At this point, outer() has finished. But inner() still "remembers" message
sayMessage(); // Output: I am from outer scope!

/**
 * Explanation:
 * 1. outer() defines a variable `message` and returns the inner() function.
 * 2. After outer() finishes, it returns inner(), which is saved in `sayMessage`.
 * 3. When we call `sayMessage()`, we're actually calling the inner() function.
 * 4. Even though outer() has finished, inner() still has access to the `message` variable — this is what makes it a closure.
 */

/**
 * Mini Hoisting Example
 * In JavaScript, you can define functions in two main ways:
 * 
 * Function Declaration:
 *    Example: 
 *    function greet() { ... }
 *    - Can be called before it's defined in the code (thanks to hoisting).
 * 
 * Function Expression:
 *    Example:
 *    const greet = function () { ... }
 *    - Treated like a variable assignment, so it's **not hoisted** the same way.
 * 
 * The difference lies in how JavaScript's **hoisting** works.
 * We'll study hoisting in depth later, but here’s a quick demo:
 */

// Function Declaration - HOISTED
console.log(addOne(3)); // Output: 4 (works even though defined below)

function addOne(num) {
  return num + 1;
}

console.log(addOne(2)); // Output: 3

// ❌ Function Expression - NOT HOISTED
// console.log(addTwo(3)); // ❗ ReferenceError: Cannot access 'addTwo' before initialization
// This happens because `const` variables are not initialized until their line is reached

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(2)); // Output: 4

