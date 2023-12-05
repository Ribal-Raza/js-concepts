/* To iterate over objects, for...in loops come handy. They iterate over the keys in an object and we can
access the value against that key using bracket notation */

const programmingLanguages = {
  java: "Java",
  cpp: "C++",
  javascript: "Javascript",
  python: "Python",
  php: "PHP",
  csharp: "C#",
};

for (const key in programmingLanguages) {
  console.log("Key: " + key); // it will print keys
  console.log("value: " + programmingLanguages[key]); // it will print values against the key
}

// iterating over arrays
const languages = ["English", "Urdu", "Persian", "Turkish", "Mandarin"];
for (const key in languages) {
  console.log(key); // in arrays, keys are indexes starting from 0 to array.length, so it will print 0,..
  console.log(languages[key]);
}

// iteration over Maps using for...in loop is not possible
