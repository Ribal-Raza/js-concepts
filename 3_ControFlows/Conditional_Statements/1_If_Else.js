/**
 * @fileoverview If-else conditional statements
 */
/**
 * Programs and Applications don’t behave the same way for every user or situation.
 * They run different code based on conditions like login state or user actions.
 * Conditional statements like if/else enable this selective behavior.
 */
// "if" statement. It only executes the code block if the condition(s) are true.
// It's syntax goes like: if(condition){....code....}
let isUserActive = true;
if (isUserActive) {
  console.log("Good Day! Keep Coding.");
} // Output: Good Day! Keep Coding.
// It checked the value of "isUserActive", which is true, so it will execute the code block.

// But more often you will see comparisons going on to check the conditions.
// Here comparison operators are used
// <, >, <=, >=, !, ==, ===, !==
const temperatureToday = 35;
if (temperatureToday > 30) {
  console.log("It's Hot today!");
}
// temprature is 35, which is greater than 30, so the condition evaluated to true
// and the code block will be executed

// if-else
// using 'else' is like giving option. Either the code in if will execute or the code in else will execute.
// It's syntax goes like: if(condition){....code....} else{....code....}
const age = 1000;
if (age >= 5000) {
  console.log("It is an acient thing");
} else {
  console.log("It is very old thing");
}
// as the value of age is 1000, which is not equal to or greater than 5000, so
// comparison resulted in false, if-block didn't execute, else block executed

// if-else both have block scope, which means the variables defined in them cannot leak
// in global scope.
// but in case of var, things go differently
const score = 200;
if (score < 250) {
  var addedValue1 = score + 50;
  let addedValue2 = score + 50;
  console.log(addedValue1);
  console.log(addedValue2);
}
// console.log(addedValue1); // Output: 250
// console.log(addedValue2); // Output: Reference error: addedValue2 is not defined
// So because var leaks into global scope, it should not be used

// Alternate syntax to write if
// If there is only one line in the if block, you can skip curly braces and just write it
// all in one line. This is called implicit scope. For example
const balance = 1020;
if (balance === 1020) console.log("OK"); // Output: OK

// you can write more than one line with implicit scope
// if (balance === 1020) console.log("OK"), console.log("Balance more than 100");
// But it is very bad practice to do so. Because the code becomes less readable.
// This method works but it should be avoided.

// Multi-branch conditional statement OR if...else if...else chain
if (balance < 500) {
  console.log("Balance is less than 500");
} else if (balance < 750) {
  console.log("Balance is less than 750");
} else if (balance < 1000) {
  console.log("Balance is less than 1000");
} else {
  console.log("Balance is greater than 1000");
}

// Checking multiple conditions in one if statement
const isLoggedIn = true;
const hasCard = true;

if (isLoggedIn && hasCard) {
  // executes if both conditions are true
  console.log("Please proceed to order details");
} else if (!isLoggedIn && hasCard) {
  // executes if first condition is false and second is true
  console.log("Please log in to purchase");
} else if (isLoggedIn && !hasCard) {
  // executes if first condition is true and second is false
  console.log("Please Add a card");
} else {
  // executes if both conditions are false
  console.log("No purchase allowed");
}
// You might have spotted '&&' anb '!'. In addition to them, there is another one '||'.
// These are logical operators or Boolean operators.
// && - Logical AND - Returns true only if both statements are true
// ! - Logical Not - Inverts the value of the expression
// || - Logical OR - Returns true if one of the statements is true
// Let's see example related to OR:
const isLoggedInFromEmail = true;
const isLoggedInFromGoogle = false;
if (isLoggedInFromEmail || isLoggedInFromEmail) {
  // executes if any condition is true
  console.log("Logged In correctly");
} else {
  // executes if both are false
  console.log("Please log in");
}
