/**
 * @fileoverview IIFE (Immediately Invoked Function Expression)
 */
/**
 * 🧠 IIFE – Immediately Invoked Function Expression
 *
 * Sometimes we want to run a function immediately after defining it,
 * without having to call it separately. For this, we use an IIFE.
 *
 * ✅ Common use cases for IIFE:
 * 1. To execute setup logic right away (e.g., database connections, API calls on startup)
 * 2. To isolate variables and avoid polluting the global scope (especially in older JavaScript or Node.js modules)
 *
 * 🔧 Syntax:
 * An IIFE uses two sets of parentheses:
 * - The first wraps the function: `(function() { ... })`
 * - The second invokes it: `()`
 * Why the extra parentheses?
 * - JavaScript expects `function` declarations to have names.
 * - Wrapping in `()` turns it into a function *expression*, which can be executed immediately.
 */

// IIFE with traditional function definition
(function () {
  console.log("Hello! Welcome");
})();
// It is necessary to put semicolon ';' after IFFE because IFFE doesnot know where to end

// IFFE with Arrow function
(() => {
  console.log("Hello Welcome Again");
})();

// Passing parameters in IFFE, pass the parameter in second set of paranthesis
((yourName) => {
  console.log(`Hello ${yourName}! Welcome.`);
})("Ribal");
