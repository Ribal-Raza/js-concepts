/**
 * @fileoverview if/else conditional statements
 */

/**
 * Applications don’t run the same logic for all users or situations.
 * Conditional statements like if/else allow programs to make decisions at runtime
 * based on dynamic conditions (e.g., user login state, input, time, etc.).
 */

// Basic if statement: runs the block only when the condition is true.
let isUserActive = true;

if (isUserActive) {
  console.log("Good Day! Keep Coding."); // Output: Good Day! Keep Coding.
}

// Using comparison operators for conditions
// Examples: >, <, >=, <=, ==, ===, !==
const temperatureToday = 35;

if (temperatureToday > 30) {
  console.log("It's hot today!"); // Output: It's hot today!
}

// if...else: runs one block if condition is true, another if false
const age = 1000;

if (age >= 5000) {
  console.log("It is an ancient thing");
} else {
  console.log("It is a very old thing");
}
// age is less than 5000, so else block runs

// Block scope in if/else
// 'let' and 'const' are block-scoped — 'var' is function/global scoped
const score = 200;

if (score < 250) {
  var addedValue1 = score + 50; // var is hoisted to the function/global scope
  let addedValue2 = score + 50; // block-scoped, not accessible outside
  console.log(addedValue1); // Output: 250
  console.log(addedValue2); // Output: 250
}

// console.log(addedValue1); // Accessible: 250
// console.log(addedValue2); // ReferenceError: addedValue2 is not defined

// One-liner if statements (called implicit scope)
const balance = 1020;

if (balance === 1020) console.log("OK"); // Output: OK

// Multiple one-liners are possible but discouraged for readability
// if (balance === 1020) console.log("OK"), console.log("Balance is good");

// Multi-branch condition: if...else if...else
if (balance < 500) {
  console.log("Balance is less than 500");
} else if (balance < 750) {
  console.log("Balance is less than 750");
} else if (balance < 1000) {
  console.log("Balance is less than 1000");
} else {
  console.log("Balance is 1000 or more"); // Output: Balance is 1000 or more
}

// ------------------------------------------------------------
// Logical Operators: && (AND), || (OR), ! (NOT)
// These are used to combine or reverse conditions in if-statements
// ------------------------------------------------------------

// Example scenario:
// We want to control access to order placement based on two conditions:
// 1. The user must be logged in
// 2. The user must have a valid payment card

const isLoggedIn = true;
const hasCard = true;

/**
 * && (AND) — Both conditions must be true
 * Example: "I'll go to the picnic IF it's sunny AND I'm free."
 */
if (isLoggedIn && hasCard) {
  console.log("✅ Please proceed to order details.");
} else if (!isLoggedIn && hasCard) {
  // ! (NOT) — Reverses a boolean value
  // !isLoggedIn means: "User is NOT logged in"
  console.log("🔒 Please log in to purchase.");
} else if (isLoggedIn && !hasCard) {
  // !hasCard — User is logged in but doesn't have a card
  console.log("💳 Please add a payment card.");
} else {
  //Fallback — Neither condition is met
  console.log("🚫 No purchase allowed.");
}

/**
 * || (OR) — At least one condition must be true
 * Example: "I'll eat out IF I'm hungry OR bored."
 * In this case, login is allowed from either Email OR Google
 */
const isLoggedInFromEmail = true;
const isLoggedInFromGoogle = false;

if (isLoggedInFromEmail || isLoggedInFromGoogle) {
  console.log("✅ Logged in successfully.");
} else {
  console.log("🔐 Please log in.");
}
