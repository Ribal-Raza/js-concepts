/**
 * @fileoverview for-of loop
 */
/** `for...of` Loop in JavaScript
 * - It is A modern loop introduced in ES6 to iterate over iterable objects.
 * - Works with Arrays, Strings, Maps, Sets, TypedArrays, etc.
 * - Does not work on plain objects (they’re not iterable by default).
 * Why it's used:
 * - Clean and readable syntax for looping over **values** (not indices or keys).
 * - Especially helpful when working with collections like arrays or Maps.
 *   for (const element of iterable) {
 *     // code to execute for each element
 *   } How it works:
 * - On each iteration, `element` is assigned the **next value** from the iterable.
 * - The loop continues until all values have been processed.
 */

// for of loop on array
const myArray = [10, 20, 33, 45, 50];
for (const item of myArray) {
  console.log(`myArray item: ${item}`);
}

// for of loop on string
const myString = "Hello";
for (const item of myString) {
  console.log(`myString character: "${item}"`);
}

/** Map in JavaScript
 * - Stores key-value pairs and keeps insertion order.
 * - Keys can be any type (object, function, primitive).
 * - Uses `.set(key, value)` and `.get(key)` methods.
 *
 * Map vs Object (Quick Comparison)
 * - Map keys ➜ any type | Object keys ➜ string/symbol only
 * - Map ➜ no default keys | Object ➜ inherits prototype keys
 * - Map ➜ size via `.size` | Object ➜ use `Object.keys(obj).length`
 * - Map is faster for frequent add/remove operations.
 * - Map is safer for user-generated keys (no prototype pollution risk).
 */

// defining a map
const myMap1 = new Map();
// setting key and value in Map using set() method
myMap1.set("first", 1);
myMap1.set("second", 2);
myMap1.set("third", 3);
myMap1.set("fourth", 4);

// using constructor to set key and value
const myMap2 = new Map([
  ["first", 1],
  ["second", 2],
  ["third", 3],
  ["fourth", 4],
]);
console.log(`Does myMap1 has key "first"? ${myMap1.has("first")}`);
console.log(`The value of key "first" in myMap1 is: ${myMap1.get("first")}`);
console.log(`Does myMap2 has key "third"? ${myMap2.has("third")}`);
console.log(`The value of key "fouth" in myMap2 is: ${myMap1.get("fourth")}`);

// Iterating over Map using for of loop
for (const keyValue of myMap1) {
  console.log(`myMap1 key-value pair: ${keyValue}`);
}
// getting keys and values separatly using destructuring
for (const [key, value] of myMap2) {
  console.log(`myMap2:    ${key} => ${value}`);
}

// Checking if for of loop works on objects
const myObject = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};
// for (const [key, value] of myObject) {
//   console.log(`myObject: ${key} => ${value}`);
// } // Output: TypeError: myObject is not iterable

// So now we know that objects are not iterable by default
// they can't be iterated by for of loop
// so if you do want to use for of on objects, you have work around
for (const [key, value] of Object.entries(myObject)) {
  // Object.entries() method returns an array of key-value pairs
  console.log(`myObject: ${key} => ${value}`);
}
