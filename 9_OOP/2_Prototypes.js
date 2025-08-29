/** Prototypes in JavaScript
 * =========================
 * Prototype is an object that other objects can inherit properties and methods from.
 * - JavaScript uses prototype-based inheritance.
 * - Every ordinary object has an internal [[Prototype]] whose value is
 *   either another object or null.
 * Property lookup:
 * 1) JS looks for the property on the object itself.
 * 2) If not found, it follows the [[Prototype]] chain.
 * 3) The chain stops at [[Prototype]] === null.
 * Example (Array instance in devtools):
 * const dcHeros = ["batman", "flash"];
 * - dcHeros → [[Prototype]]: Array.prototype (built-in array methods like push, map, …)
 * - Array.prototype → [[Prototype]]: Object.prototype (toString, hasOwnProperty, …)
 * - Object.prototype → [[Prototype]]: null (end of chain)
 * Notes:
 * - Primitives (string, number, boolean, bigint, symbol) are not objects,
 *   but when you access a method like "abc".toUpperCase(), JS temporarily
 *   wraps the value (String object) and uses String.prototype.
 * - Functions are objects too; a function object’s [[Prototype]] is
 *   Function.prototype (separate from its .prototype property used for
 *   instances created via `new`).
 * In short:
 * Prototypes let JavaScript share behavior via a chain, instead of copying
 * methods onto every object.
 */

// Let's understand with interesting scenerios
// we create a simple function that accepts a number and multiply it by 2
function multiplyByTwo(num) {
  return num * 2;
}
console.log(multiplyByTwo(5)); //Ouptut: 10
// Functions in JS are objects (callable objects).
// That means we can set properties on them like we do on normal objects:
multiplyByTwo.power = 2;
console.log(multiplyByTwo.power); // Output: 2

// Every normal function in JS automatically has a .prototype property.
// This is an object that will be used if the function is called with `new`.
console.log(multiplyByTwo.prototype); // Output: {}
// Why empty?
// Because we haven’t added anything to it yet.
// By default, it only contains a hidden "constructor" property linking back to the function.
// If we plan to use the function as a constructor, we put shared methods on its .prototype.
// Let's check if hidden constructor in prototype links back to function
console.log(multiplyByTwo.prototype.constructor == multiplyByTwo); // Output: true
console.log(multiplyByTwo.prototype.constructor); // Output: [Function: multiplyByTwo] { power: 2 }

// Constructor function for creating new users
function CreateUser(username, score) {
  // 'this' refers to the new object being created (when using 'new')
  // username is just a parameter.
  // this.username assigns the parameter value to the new object's property.
  this.username = username; // set property 'username'
  this.score = score; // set property 'score'
}

// Shared method defined on the prototype:
// This way all instances of CreateUser share ONE copy of incrementScore
CreateUser.prototype.incrementScore = function () {
  // Always use 'this.score' to access the score of the current object
  this.score++;
};

// ------------------------
// Using the constructor with 'new'
// ------------------------
const user1 = new CreateUser("John", 20);
console.log(user1); // { username: 'John', score: 20 }

user1.incrementScore();
console.log(user1); // { username: 'John', score: 21 }

/** How `new` works behind the scenes:
 * 1. Creates a fresh empty object (newInstance).
 * 2. Sets newInstance.[[Prototype]] = Constructor.prototype.
 * 3. Calls the constructor with `this = newInstance` (passing arguments).
 * 4. If constructor returns an object → that object is returned.
 *    Otherwise → newInstance is returned.
 */

// ------------------------
// What happens if we forget 'new'
// ------------------------
const user2 = CreateUser("Alice", 15);
// Without 'new', 'this' inside CreateUser does NOT refer to a new object.
// In strict mode → 'this' is undefined → TypeError
// In sloppy mode → 'this' refers to the global object (window in browsers).
// So instead of creating a user object, it pollutes the global scope!

console.log(user2); // undefined (because CreateUser doesn't return anything)

// ===============================================
// Prototypes in JavaScript (Practice + Challenge)
// ===============================================

// Challenge: Extend all strings with a method trueLength()
// This should trim spaces and return the length without extra spaces.
// (In real projects you’d just use str.trim().length, but here the goal
// is to understand prototypes.)

// --- Exploring prototypes ---
const heros = ["spiderman", "thor"];
const herosPowers = {
  thor: "Hammer",
  spiderman: "Web",
};
// 1. All objects eventually inherit from Object.prototype.
// So if we add a method there, it's available everywhere.
Object.prototype.abc = function () {
  console.log(`abc is present in all objects`);
};
// Note: Extending Object like this is not recommended in real projects because it pollutes all objects.
herosPowers.abc(); // Output: abc is present in all objects
heros.abc(); // Output: abc is present in all objects (array → Array.prototype → Object.prototype)

// 2. But if we add to Array.prototype, it’s only for arrays:
Array.prototype.heyAbc = function () {
  console.log(`heyAbc is present in all arrays`);
};
// Now let's try
heros.heyAbc(); // Output: heyAbc is present in all arrays
// herosPowers.heyAbc(); // Error: not available on plain objects

// --- Prototype inheritance ---
const User = { username: "abc", email: "abc@cba.com" };
const Teacher = { workingHours: "9AM-5PM" };
const TeachingSupport = { isAvailable: true };

// Legacy way (not recommended): __proto__
const TASupport = {
  createAssignments: "New Assignment",
  fullTime: true,
  __proto__: TeachingSupport, // inherits isAvailable
};
console.log(TASupport.isAvailable); // true

// Linking prototypes dynamically:
Teacher.__proto__ = User; // legacy style
console.log(Teacher.username); // abc

// Modern, preferred syntax:
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.workingHours); // 9AM-5PM
console.log(TeachingSupport.email); // abc

// --- Custom prototype method on String ---
String.prototype.trueLength = function () {
  console.log(`True Length of string is ${this.trim().length}.`);
};
const hey = "Hi there         ";
console.log(`Apparent Length: ${hey.length}`); // 17
hey.trueLength(); // 8

// --- Key Take Aways ---
// - Object.prototype is the root of most objects.
// - Extending Object.prototype affects ALL objects (use with caution).
// - Prototypes let you share methods across instances.
// - Legacy: __proto__ ; Modern: Object.setPrototypeOf / Object.create.
// - You can safely extend built-in prototypes in practice code, but avoid in production.
