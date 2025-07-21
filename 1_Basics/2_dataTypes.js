/**
 * @fileoverview Data Types in JavaScript
 */

/**
 * # Data Types
 *
 * JavaScript data types are classified into two main categories:
 * Primitive and Non-Primitive (Reference) data types.
 */

/**
 * ## Primitive Data Types
 *
 * Primitive data types are fundamental building blocks that hold simple values.
 * They are stored directly in the stack memory.
 * When you copy a primitive value, you create a completely independent copy.
 */

/**
 * ### Types of Primitive Data Types:
 *
 * 1. **String:** Represents sequences of characters. Enclosed in single, double, or backtick quotes.
 */
// prettier-ignore
let nameOfPerson = 'Alice'; // Single Quotes
let nameOfAnotherPerson = "Bob"; // Double Quotes
let nameOfSomeOtherPerson = `Charlie`; // Backticks
// 2. **Number:** Represents both integer and floating-point numbers.
let age = 30;
let price = 19.99;

// 3. **Boolean:** Represents logical values, either `true` or `false`.
let isActive = true;

// 4. **Undefined:** Represents a variable that has been declared but has not yet been assigned a value.
let score;

// 5. **Null:** Represents the intentional absence of any object value. It is a primitive value.
let car = null;

//6. **Symbol (ES6):** Represents a unique and immutable primitive value, often used as object property keys.
const id = Symbol("uniqueId");

// 7. **BigInt (ES11):** Represents whole numbers larger than the maximum value that can be safely represented by the Number type.
const bigNumber = 1234567890123456789012345678901234567890n;

/**
 * ## Non-Primitive (Reference) Data Types
 *
 * Non-primitive data types, also known as reference types, are used to store complex data structures.
 * They are stored in the heap memory, and variables hold references (memory addresses) to these locations in the heap.
 * When you copy a non-primitive value, you copy the reference, not the actual value.
 * This means that changes made through one reference will be visible through all references pointing to the same object.
 */

/**
 * ### Types of Non-Primitive Data Types:
 *
 * 1. **Object:** Represents a collection of key-value pairs.
 */
let person = { name: "Bob", age: 25 };

//2. **Array:** Represents an ordered list of values, indexed by integers.
let numbers = [1, 2, 3, 4, 5];

//3. **Function:** Represents a block of reusable code.
function greet() {
  console.log("Hello!");
}
