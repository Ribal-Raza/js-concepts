/**
 * @fileoverview Switch Statement
 */
// The switch statement evaluates an expression, matching the expression's value against
// a series of case clauses, and executes statements after the first case clause
// with a matching value, until a break statement is encountered. [MDN]
// In simple words, It is often used as a cleaner alternative to multiple if...else if
// statements when all conditions are equality checks against the same value.
// Let's understand it with an example:
const fruit = "apple"; // This is the value we want to evaluate
// The switch statement compares the value of `fruit` against each case using
// strict comparison (===).
switch (fruit) {
  // First case: checks if fruit === "apple"
  case "apple":
    console.log("🍎 It's an apple"); // Output this if match found
    break; // Exit the switch after executing this case

  // Second case: checks if fruit === "banana"
  case "banana":
    console.log("🍌 It's a banana");
    break; // Exit the switch after executing this case

  // Third case: checks if fruit === "orange"
  case "orange":
    console.log("🍊 It's an orange");
    break; // Exit the switch after executing this case

  // The default block runs only if none of the above cases match.
  // Think of it like the `else` in if/else chains.
  default:
    console.log("🤷 Unknown fruit");
    break; // good practice to include
}
/** Important Notes
 * switch uses strict comparison (===).
 * switch checks each case from top to bottom.
 * As soon as a match is found, it executes the code block.
 * If break is omitted/not used, it causes fallthrough (next case runs too)
 * If no case matches, default is executed.
 */
/** Uses of switch cases
 * Comparing one variable against many values
 * Static values (like enums, modes, roles)
 * DO NOT Use Switch In
 * Complex logic with multiple conditions
 * Checking ranges (<, >, etc.)
 * Dynamic conditions (functions, expressions)
 */
