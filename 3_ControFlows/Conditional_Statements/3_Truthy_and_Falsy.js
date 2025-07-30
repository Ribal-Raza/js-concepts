/**
 * Before performing validations (e.g. on user input like an email),
 * it's important to first check whether the variable actually holds any value.
 *
 * For instance, before checking the structure of an email (like length,
 * presence of '@', or '.com'), we should confirm that the user has entered something.
 *
 * This is where the concepts of "truthy" and "falsy" values come into play:
 * - A **truthy** value is any value that JavaScript treats as true in a boolean context.
 * - A **falsy** value is one that is treated as false (e.g., '', 0, null, undefined, NaN, false).
 *
 * Understanding truthy/falsy is essential for writing clean conditional checks.
 */

const myName = "Ribal";
const myNickName = "";

/**
 * In following condition, we're simply checking whether `myName` holds any value.
 * Since "Ribal" is a non-empty string, it's considered a **truthy** value.
 * Therefore, the if-block will execute.
 */
if (myName) {
  console.log(`You have entered your name ${myName}`);
} else {
  console.log("You have not entered your name");
}

/**
 * Here, `myNickName` is an empty string (""), which is one of JavaScript’s **falsy** values.
 * So, the condition evaluates to false, and the else-block will execute instead.
 */
if (myNickName) {
  console.log(`You have entered your nick name ${myNickName}`);
} else {
  console.log("You have not entered your nick name");
}

// here comes an interesting case
const myArray = [];
if (myArray) {
  console.log(`Got your Array`);
} else {
  console.log("No Array found");
}
// In above case, the output will be "Got your Array", which means empty array is truthy value

/**
 * Falsy values: false, 0, -0, "", null, undefined, NAN, BigInt 0n
 * Other than above falsy values, all values are truthy.
 * Some Truthy values: "0" or '0', "false" or 'false', [], {}, function(){}
 */

// So it's essential to use proper and correct conditional check
// As we know that an empty array is truthy value, so array should be checked as
if (myArray.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Got your array");
}
// Or if we have to perform some action
if (myArray.length > 0) {
  console.log(myArray);
} else {
  console.log("Array is empty");
}

// Checking if an object is empty or not
const myObj = {};
if (Object.keys(myObj).length === 0) {
  // Object.keys(myObj) returns an array of object's keys
  // Object.keys(myObj).lenght return the length of array of object's keys
  console.log("Object is empty");
} else {
  console.log(myObj);
}

// Nullish Coalescing Operator (??)
// It is used to provide a default value when a variable is 'null' or 'undefined'.
// Let's understand this with an example
// Let's suppose we have a variable 'result', which is expecting some value from database
// let's say database gave it value 5

let databaseVal1 = 5;
// But database operations are tricky, and they can sometimes return null or undefined values
// These undefined or null values can break the code execution.
// So to be safe, we use nullish operator to provide a default value
const result1 = databaseVal1 ?? 10;
console.log(`Result one is ${result1}`); // Output: Result one is 5
// result variable got value 5 becaue databaseVal variable had a value 5
// but what if databaseVal is null or undefined
let databaseVal2 = null;
const result2 = databaseVal2 ?? 10;
console.log(`Result two is ${result2}`); // Output: Result two is 10

// using multiple nullish coalescing operators
const result3 = databaseVal2 ?? databaseVal1 ?? 10;
console.log(`Result three is ${result3}`); // Output: Result three is 5
// So the databaseVal2 had null value, so it moved to databaseVal1 which had value 5
// and that became default value of result 3
// But if even databaseVal1 had null or undefined value, then it would have moved to 10
databaseVal1 = undefined;
const result4 = databaseVal2 ?? databaseVal1 ?? 10;
console.log(`Result four is ${result4}`); // Output: Result four is 10
