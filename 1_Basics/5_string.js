/**
 * @fileoverview Strings in JS
 */
/** String is a very common data type.
 * A string is a sequence of characters. There can be zero or more characters in it.
 * There are many ways to write string like wrapping charaters in '', or "", or ``.
 */
const codeEditor = "VS Code"; // A simple string, conventional writing method.
const programmingLanguage = "Javascript"; // string
// Concatination of Strings / Combining strings
console.log(
  "I am working in " + codeEditor + " and learning " + programmingLanguage
);

// Strings can also be combined/concatinated with other data types like numbers
const level = 1;
console.log("This is level " + level + " of the course");

// similarly with booleans
const expert = false;
console.log("Am I expert in " + programmingLanguage + " ? " + expert);

// In modren development, there is a new way to concatinate and write strings
// These are called template literals
console.log(
  `I am working in ${codeEditor} and learning ${programmingLanguage}`
);
console.log(`This is level ${level} of the course`);
console.log(`Am I expert in ${programmingLanguage} ? ${expert}`);
// Notice how convinient it is to write this in one line
// The variables are introduced inside the curly braces preceded by a dollar sign
// This is the most modern way to write and manipulate strings in JS

// Another way of declaring string with String constructor
// This method is for dedicatingly defining the data type of the variable
const programmingLanguage2 = new String("Typescript");
// The above example programmingLanguage2 is an interesting one.
// If we print it on node.js cosole it will output
console.log(programmingLanguage2); // Output: [String: 'Typescript'] or maybe Typescript
// but if we print same line in browser console, it will print an expandable
// object where each letter of "Typescript" will be assigned to a key like
// 0: T, 1: y, 2: p,.....
// we will also see length of string there and some prototypes.
// It means that string has certain propertise and can run some methods on it
console.log(typeof programmingLanguage2); // Output: object
console.log(typeof programmingLanguage); // Output: string
// It means I can access any letter of string with it's key
console.log(programmingLanguage2[0]); // Output: T
console.log(programmingLanguage2.__proto__); // Output: {}
//__proto__ is a property that points to the prototype of an object.
// Prototypes contain methods and properties that objects inherit.

// String Methods
let hobby = "Random Facts";
console.log(hobby.length); // Output: 12
console.log(hobby.toUpperCase()); // Output: RANDOM FACTS
console.log(hobby.toLowerCase()); // Output: random facts
console.log(hobby.charAt(0)); // Output: R
console.log(hobby.concat(" About JS")); // Output: Random Facts About JS
console.log(hobby.includes("Facts")); // Output: true
console.log(hobby.indexOf("Facts")); // Output: 7
console.log(hobby.indexOf("a")); // Output: 1 (Only returns first index where the specified character is located)
console.log(hobby.lastIndexOf("a")); // Output: 8 (Returns last index where the specified character is located)
console.log(hobby.endsWith("s", 12)); // Output: true
console.log(hobby.startsWith("R", 0)); // Output: true
// trimming/cutting strings
hobby = "  Random Facts  ";
console.log(hobby);
console.log(hobby.trim()); // Output: Random Facts
console.log(hobby.trimStart()); // Output: Random Facts
console.log(hobby.trimEnd()); // Output: Random Facts
let hobbyPart1 = hobby.substring(2, 8); // Output: Random
let hobbyPart2 = hobby.substring(9, 15); // Output: Facts
console.log(`First word: ${hobbyPart1}, Second Word: ${hobbyPart2}`);
// Slicing
hobby = "Random Facts";
let firstPart = hobby.slice(0, 6); // Output: Random
let secondPart = hobby.slice(7); // Output: Facts
console.log(`First word: ${firstPart}, Second Word: ${secondPart}`);
// Interesting thing about slice is that you can provide negative values
let subString1 = hobby.slice(-5); // Output: Facts
let subString2 = hobby.slice(-12, -6); // Output: Random
console.log(`First word: ${subString1}, Second Word: ${subString2}`);

// Replacing sequences in strings
let url = "https://www.a1b2.com/strings%20methods%20JS";
console.log(url.replace("%20", "-")); // Output: https://www.a1b2.com/strings-methods%20JS
console.log(url.replaceAll("%20", "-")); // Output: https://www.a1b2.com/strings-methods-JS
// Spliting strings
let sentence = "I am a programmer";
let words = sentence.split(" ");
console.log(words); // Output: [ 'I', 'am', 'a', 'programmer' ]
