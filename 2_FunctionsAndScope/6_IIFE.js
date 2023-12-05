/* IIFE (Immediately Invoked Function Expressions) 
Sometimes we need to invoke/execute a function immediatly. There can be many reasons behind writing
IIFE but following reasons are the common.
1- We want to make a database connection or api call as soon as application starts, so we write
   IFFE to achieve this.
2- We don't want our scope to be polluted by Node.js or some other engine's global object.

Two write IFFE, we write two sets of paranthesis, like this ()(), in first paranthesis we write our
function and the second paranthesis denotes immediately invoked execution of the
function declared in first set of paranthesis
*/

// IFFE with regular function
(function greet1() {
  console.log("Hello Welcome");
})(); // It is necessary to put semicolon ';' after IFFE because IFFE doesnot know where to end

// IFFE with Arrow function
(() => {
  console.log("Hello Welcome Again");
})();

// Passing parameters in IFFE, pass the parameter in second set of paranthesis
((yourName) => {
  console.log(`Hello ${yourName}! Welcome.`);
})("Ribal");
