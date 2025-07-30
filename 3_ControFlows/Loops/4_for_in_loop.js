/**
 * @fileoverview for-in loop
 */
/**`for...in` Loop in JavaScript
 * - It is used to iterate over **enumerable string keys** of an object.
 * - Returns the keys (property names) — not the values directly.
 * Why it's used:
 * - Useful for iterating over all keys in an object.
 * - Can also be used on arrays, but not recommended (key order may not be guaranteed).
 * Caution:
 * - `for...in` includes keys from the prototype chain unless filtered with `hasOwnProperty()`.
 * - Avoid using it with arrays when you care about element order — use `for` or `for...of` instead.
 * Syntax: for (const key in object) {// access with object[key]}
 * - On each iteration, `key` is assigned the next property name (as a string).
 * - You can then access its value using bracket notation: `object[key]`.
 */
const programmingLanguages = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};
for (const key in programmingLanguages) {
  console.log(`${key} is short form for ${programmingLanguages[key]}`);
}

// in simple objects and file like this one, there is no prototype-pollution
// but in real world project, where a lot third party libraries are used
// there is a risk of prototype pollution.
// which can cause problems in behavior and ouput of the for...in loop with object
// because `for...in` includes keys from the prototype chain
// so it should be filtered with `hasOwnProperty()

// for example
const obj1 = { a: "A" };
// Object.prototype.copyright = "2025"; // Here I polluted the global object
for (const key in obj1) {
  console.log(`${key}: ${obj1[key]}`);
}
// Expected output => a: A
// Actual Ouput => a: A     copyright: 2025
// so for...in loop automatically included that key-value copyright: 2025
// for this reason it should be filtered with `hasOwnProperty()
// correct use
for (const key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    console.log(`${key}: ${obj1[key]}`);
  }
}
// can for...in work on arrays
const myArray = [1, 2, 3, 4, 5];
for (const key in myArray) {
  // key of array is it's index
  console.log(`[${key}] ${myArray[key]}`);
}
// But it is not recommended to use for...in for arrays

// can for...in work on Maps
const countryMap = new Map([
  ["PK", "Pakistan"],
  ["KSA", "Saudi Arabia"],
  ["SA", "South Africa"],
  ["UK", "United Kingdom"],
]);
for (const key in countryMap) {
  console.log(`${key} => ${countryMap.get(key)}`);
} // This block will not print anything on console
// Reason is that, for...in loops over "enumerable string keys" of plain object
// Map is not a plain object, it’s a special built-in class that stores data internally
// So when you tried to iterate over 'countryMap', for...in was actually
// iterating over Map properties like "set", "get", "size" etc
// but it never read the actual data Map is holding
