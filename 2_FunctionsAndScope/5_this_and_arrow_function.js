/**
 * @fileoverview THIS(this) and Arrow Functions
 */
// "this" is reserved keyword in JS. It refers to current execution context.
//
/**
 * In JavaScript, `this` is a special keyword that refers to the execution context.
 * exectuion context means the object or environment in which the current code is executed.
 * The value of `this` is determined by **how** a function is called, not where it's defined.
 */
/**
 * Example: Understanding how `this` works in different contexts (Node.js)
 */

// Case 1: `this` inside an object method
const user = {
  username: "Gamma",
  isLoggedIn: true,
  greet: function () {
    // Inside a method, `this` refers to the object that called the method
    console.log(this); // Output: { username: 'Gamma', isLoggedIn: true, greet: [Function: greet] }

    // Accessing a property using `this`
    console.log(`Welcome ${this.username}!`); // Output: Welcome Gamma!
  },
};

user.greet(); // The method is called using `user`, so `this` = `user`

/**
 * Case 2: `this` in the global scope (top-level in a Node.js file)
 *
 * In Node.js, each file is treated as a CommonJS module.
 * At the top-level of that module, `this` refers to `module.exports`, which is an empty object: {}
 *
 * In contrast, in the browser:
 * - `this` at the global level refers to the `window` object
 * - `window` contains all global variables and DOM-related functions
 */
console.log(this); // Output in Node.js: {}, because it's equivalent to module.exports

/**
 * Case 3: `this` inside a regular function (not inside an object)
 *
 * In Node.js (non-strict mode):
 * - Inside a regular function, `this` refers to the global object (`global`)
 *
 * In strict mode:
 * - `this` would be `undefined`
 *
 * Important:
 * - Variables declared using `let` or `const` inside a function are NOT attached to `this`
 * - Only `var` in global scope (in browsers) attaches properties to `window`
 */
const demo = function () {
  let username = "Gamma";
  let isLoggedIn = true;

  console.log(this); // Output: global object (Node.js non-strict mode)
  console.log(this.username); // Output: undefined → because `username` is a local variable, not a property of `this`
};

demo();

/**
 * So in short:
 * - Inside object methods, `this` refers to the object itself.
 * - In global scope (in Node.js), `this` is an empty object `{}` (module.exports).
 * - Inside a regular function, `this` refers to the global object (in non-strict mode).
 * - Variables declared with `let` or `const` are local to their scope and not attached to `this`.
 */

/**
 * Arrow Functions in JavaScript (Introduced in ES6, 2015)
 *
 * Arrow functions provide a shorter syntax for writing functions and
 * have one important behavior change: they do NOT bind their own `this`.
 * Instead, they inherit `this` from the **lexical scope** (where they were defined).
 */

// Basic Arrow Function Syntax
const sayHello = () => {
  console.log("Hello!");

  // `this` inside an arrow function does NOT refer to the global object
  // In Node.js, it refers to the surrounding module scope (`module.exports`)
  console.log(this); // Output: {} in Node.js (because top-level `this` = module.exports)
};
sayHello();

/**
 * In contrast:
 * - A traditional function declared in the global scope uses dynamic `this`
 * - In non-strict mode (Node.js REPL), `this` inside a regular function = global object
 *
 * But in an arrow function, `this` is **lexically scoped**, i.e., taken from where the function is defined.
 * In a file, that’s usually `module.exports` (which is `{}`).
 */

// Arrow Function: Implicit Return
const addTwo = (num1, num2) => num1 + num2;
// Equivalent to:
// const addTwo = (num1, num2) => { return num1 + num2 };

console.log(addTwo(3, 4)); // Output: 7

/**
 * Important Note:
 * If your arrow function body is enclosed in `{}` braces,
 * you must explicitly use the `return` keyword.
 * Without braces, the expression is returned **implicitly**.
 */

// Returning an Object with Implicit Return
const giveObject = () => ({ name: "John Doe", isLoggedIn: true });
// Must wrap object in parentheses to avoid confusion with function body

console.log(giveObject()); // Output: { name: 'John Doe', isLoggedIn: true }
