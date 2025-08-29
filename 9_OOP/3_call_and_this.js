/** `this` & Execution Contexts
 * The engine creates a Global Execution Context (GEC) first and Function Execution Contexts (FECs) as functions run.
 * The call stack is LIFO; the GEC is removed when the program finishes.
 * `this` is not chosen by “who is on top of the stack.”
 * It depends on how the function is called.
 * (arrow functions are the exception—they capture this lexically).
 * Top-level this:
 * - Browser script (non-module): this === window
 * - ES modules (browser & Node): this === undefined
 * - Node CommonJS file: this === module.exports
 * - Node REPL: this === global
 * Inside regular functions:
 * - Plain call fn() → sloppy: global object; strict: undefined
 * - Method call obj.fn() → this === obj
 * Arrow functions:
 * - No own this; they use the this of the surrounding (defining) scope.
 */

// Let's find out where does `this` refers in function within function
function setUsername(username) {
  this.username = username;
}
function createUser(username, email, password) {
  // setting user name with another constructor
  setUsername(username);
  this.email = email;
  this.password = password;
}
const user1 = new createUser("John", "john@js.js", "123");
console.log(user1); // {email: 'john@js.js', password: '123' }
console.log(user1.username); // Undefined
// user1.username is missing because setUsername() was called as a plain function,
// so inside it `this` was the global (or undefined in strict mode), not the new user object.
// As a result, `this.username` didn’t write to user1 (it set a global or threw in strict mode).

// To fix this issuse, explicitly bind `this` when calling constructor, using call()
// Understanding with another example
function setProductName(productName) {
  this.productName = productName;
}
function createProduct(productName, price, quantity) {
  // now explicitly binding `this` with call()
  setProductName.call(this, productName);
  this.price = price;
  this.quantity = quantity;
}
const product1 = new createProduct("Laptop", 1000, 5);
console.log(product1); // {productName: 'Laptop', price: 1000, quantity: 5}
console.log(product1.productName); // Laptop
