/**
 * Demonstrates strict mode, data types, and the `typeof` operator.
 *
 * @remarks
 * - Employs "use strict" to enforce stricter code handling and catch potential errors.
 * - Explores various JavaScript data types and their characteristics.
 * - Highlights the `typeof` operator's usage for determining variable data types.
 */

"use strict";

/**
 * @type {string}
 * @description The user's name.
 */
let name = "Ribal";

/**
 * @type {number}
 * @description The user's age.
 */
let age = "24"; // While initially a string, this can be converted to a number using parseInt() or parseFloat() if numeric operations are intended.

/**
 * @type {boolean}
 * @description Indicates whether the user is an adult.
 */
let isAdult = true;

// Examples of other data types:

// BigInt:
const largeNumber = 9007199254740991n;

// null:
let emptyValue = null;

// undefined:
let undeclaredVariable; // Initialized as undefined

// symbol:
const uniqueKey = Symbol("myUniqueKey");

// object:
const person = { name, age, isAdult };

/**
 * Logs the data type of variables using the `typeof` operator.
 */
console.log(typeof isAdult); // Output: "boolean"
console.log(typeof null);   // Output: "object" (historical quirk, treated as a primitive value)
