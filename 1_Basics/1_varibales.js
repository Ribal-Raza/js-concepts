/**
 * @fileoverview Variables in Javascript
 */
/**
 * Variables are like labeled boxes in programming that hold different types of information.
 * They give names to data, making it easy to use and change that data throughout the code.
 */
// there are two main ways to declare a variable in JavaScript: 'const' and 'let'.
// 1. With 'const'
// After defining a variable with const, it's value can't be changed in program later.
const valueOfPi = 3.14;
// valueOfPi = 3.24; // ❌ 'TypeError: Assignment to constant variable.'

// 2. With 'let'
// Variables declared with 'let' can be reassigned/changed later in the program.
// It allows for flexibility when the value of a variable needs to change.
let nameOfPerson = "Azam";
nameOfPerson = "Azam Ahmed"; // ✅

// There is an older way of declaring variable with 'var' keyword.
// But it is not recommended
var ageOfPerson = 21;
ageOfPerson = 22;

// Comparison of let vs var
// 'let' was introduced to solve the issues with 'var' regarding scope and hoisting.
// It's generally preferred over 'var' in modern JavaScript development.

// another not-recommended way of initializing/declaring a variable is following:
city = "ABC";
// This works because, in non-strict mode, assigning to a variable without declaring it implicitly makes it a global variable, but it should be avoided as it can lead to unintended global variables and make code harder to manage.