/**
 * @fileoverview Global and Local Scope
 */
/**
 * Scope in JavaScript defines the visibility and accessibility of variables and functions
 * within different parts of the code. It depends on where a variable is declared.
 */

/**
 * Global Scope:
 * Variables declared outside any function or block are in the global scope.
 * They are accessible from anywhere in your script (unless shadowed).
 */
const aGlobal = 10;
let bGlobal = 20;
var cGlobal = 30; // Not recommended

console.log(
  `Global Constants:\naGlobal: ${aGlobal}\nbGlobal: ${bGlobal}\ncGlobal (var): ${cGlobal}`
);

/**
 * Local Scope:
 * Variables declared inside a function or block are only accessible within that scope.
 * This includes both function scope and block scope (e.g., inside if/for blocks).
 */
function localScope() {
  let aLocal = 10;
  const bLocal = 20;
  return aLocal + bLocal;
}
// console.log(aLocal); // ReferenceError: aLocal is not defined

if (true) {
  let aBlock = 10;
  const bBlock = 20;
  const result = aBlock + bBlock;
  console.log(`Block result: ${result}`);
}
// console.log(bBlock); // ReferenceError: bBlock is not defined

/**
 * 'var' Pitfall:
 * 'var' is function-scoped, not block-scoped.
 * So a variable declared with var inside a block is accessible outside that block.
 */
if (true) {
  let letVar = 100;
  const constVar = 200;
  var varVar = 300; // Hoisted to function/global scope
}
// console.log(letVar);   // ReferenceError
// console.log(constVar); // ReferenceError
console.log(varVar); // Output: 300
// Using var can lead to confusing bugs and is generally discouraged in modern JavaScript.

/**
 * Global Variables Inside Local Scopes:
 * A globally declared variable can be accessed inside functions.
 */
let price = 350;
function printPrice() {
  console.log(`This item's price is ${price}`);
}
printPrice(); // Output: This item's price is 350

/**
 * Variable Shadowing:
 * If a local variable has the same name as a global one,
 * the local one is used within that scope, and global remains unchanged.
 */
const myName = "John";

function printName() {
  const myName = "David"; // Shadows global myName
  console.log(`Local name: ${myName}`); // David
}
printName();
console.log(`Global name: ${myName}`); // John
