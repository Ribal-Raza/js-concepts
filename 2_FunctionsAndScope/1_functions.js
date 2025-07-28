/**
 * @fileoverview Functions in JS
 */
// A function in JavaScript is a reusable block of code designed to perform a particular task.
// A simple function is defined as following:
function printString() {
  console.log("Hello World");
}
// then the function is called/invoked.
printString();

// In real projects and problems, the functions accepts some values, perform certain actions
// on those values and return some results.
// So defining a function that accepts values:
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// In the function definition, within the parentheses, 'parameters' are passed
// the name of those parameters can be anything. Then those parameters become
// available inside the function to work with

// When invoking/calling the function, arguments are passed in parentheses
// these have to be values with same data type as function is expecting.
// otherwise, the results will not be correct
addTwoNumbers(3, 4); // Output: 7
addTwoNumbers(3, "4"); // Output: 34, because string is passed instead of number

// Parameters are placeholder variables names the function expects, when defining the function
// Arguments are actual values you pass into the function, when calling/invoking the function

// Saving the result of a function to a variable
const result = addTwoNumbers(4, 5);
console.log("Result: ", result); // Output: Result:  undefined
// why undefined? Because if we go back to function definition of addTwoNumbers,
// we would see that this function is printing the result of addition
// but it's not returning any value
// action is happening, result is none
// Here comes the concept of returning the results of actions in functions
function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}
// so now it's returning something which can be saved to a variable
const resultMultiplication = multiplyTwoNumbers(2, 6);
console.log("Result Multiplication: ", resultMultiplication); // Output: 12

// Functions can also return multiple values
function addAndMultiply(num1, num2) {
  const sum = num1 + num2;
  const product = num1 * num2;
  return [sum, product];
}
const [resultSum, resultProduct] = addAndMultiply(3, 4); // array destructuring assignment
console.log("Result Sum: ", resultSum); // Output: 7
console.log("Result Product: ", resultProduct); // Output: 12

// Checking if arguments values are received or not
// sometimes, when a function is expecting an argument, but none is passed
// that paramenter becomes undefined and malfunctioning occurs
function logUser(username) {
  return `Welcome ${username}`;
}
console.log(logUser()); // Output: Welcome undefined

// To avoid such scenerios, some checks are applied, using conditional logic
function logUser2(username) {
  if (username == undefined) {
    return `Please provide a username`;
  } else {
    return `Welcome ${username}`;
  }
}

console.log(logUser2()); // Output: Please provide a username
console.log(logUser2("David")); // Output: Welcome David

// an alternate syntax of checking undefined would be
function logUser3(username) {
  if (!username) {
    return `Please provide a username`;
  } else {
    return `Welcome ${username}`;
  }
}
// undefined is a falsy value, which means it coerces to false in a boolean context
// Here ! operator inverses the undefined value of username to true, setting the condition to true
// so the else block is executed
console.log(logUser3()); // Output: Please provide a username

// But if you want to get rid of the checks altogether
// you can define default value of the parameter
function logUser4(username = "Guest") {
  return `Welcome ${username}`;
}
console.log(logUser4()); // Output: Welcome Guest
console.log(logUser4("David")); // Output: Welcome David