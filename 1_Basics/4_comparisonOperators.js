/**
 * @fileoverview Comparison Operator and comparison between different data types
 */
/**
 * In JS, there are following comparison operators
 * 1. > (greater than): Checks whether the left operand is greater than the right operand.
 * 2. < (less than): Checks whether the left operand is less than the right operand.
 * 3. >= (greater than and equal to): Checks whether the left operand is greater than or equal to the right operand.
 * 4. <= (less than and equal to): Checks whether the left operand is less than or equal to the right operand.
 * 5. == (equal to): Checks whether the left operand is equal to the right operand.
 * 6. === (strictly equal to): Checks whether the left operand is strictly equal to the right operand. Strict checking means checking the value and the data type.
 * 7. != (not equal to): Checks whether the left operand is not equal to the right operand.
 * 8. !== (not strictly equal to): Checks whether the left operand is not strictly equal to the right operand.
 */

// A- Compraison Operators in Same Data Types
// Comparison Operators in Numbers
console.log(2 > 1); // Output: true
console.log(4 < 2); // Output: false
console.log(2 >= 2, 2 <= 2); // Output: true true
console.log(5 == 5); // Output: true
console.log(5 === 5); // 5 is strictly equal to (with same data type) 5, true
console.log(5 != 4); //5 is 'not equal to' 4, true

// //Comparison Operators in Strings
console.log("A" > "a"); // Output: false
console.log("A".charCodeAt(0), "a".charCodeAt(0)); // charCodeAt() Returns the Unicode value of the character at the specified location.
/* The reason that "A" is not greater than "a" is the behaviour of JS. JS compares ASCII codes of two strings. ASCII code of "A" is 65 and "a" is 97. As 65 is less than 97, "A" is less than "a".
 */
console.log("A quick brown fox" <= "A kuicq nobrw xof"); // Output: false
/* similarly ASII codes of two strings of same lengths will be compared (space has it's own ASCII code) and the result of above operation will be false*/
console.log("A quick brown fox jumps" < "A quick brown fox jumps ");
/* Now both strings have same values but the second one has an extra space at end, so statement
is true */

//Comparison Operators in Booleans
console.log(true != false); // Output: true
console.log(true > true); // Output: false
console.log(true > false); // Output: true
console.log(true + true > true); // true = 1, true + true = 1+1 = 2, Output: true

// B- Comparison Operators In Different data types
/** In JS, when two different data types are compared, JS tries to do 'Type Coersion'.
 * Which means, JS tries to convert one or both operands to same data type before performing comparison
 */
console.log("2" > 1); // Output: true, because JS will convert string "2" into number 2
console.log(null == 0); // Output: false, because null denotes an empty object where 0 is a value
console.log(null >= 0); // Output: true, because null is converted into 0 which is greater and equal to 0
console.log(null > 0); // Output: false, because null is converted into 0 which is equal to 0
console.log(undefined == 0); // Output: false, because undefined is not equal to 0
console.log(undefined > 0); // Output: false, because undefined has no value
console.log(undefined < 0); // Output: false, because undefined has no value
console.log(typeof null, Number(null)); // typeof null is Object, null is converted into 0
console.log(null == undefined); // true, because they are loosly equal,
console.log(null === undefined); //false, because they are not strictly equal
