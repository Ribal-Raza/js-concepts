/**
 * Declares variables using different declaration keywords and highlights best practices.
 *
 * @type {number}
 * @const
 * @description A unique identifier, typically representing a user or entity.
 */
const id = 12223;
// id = 23335; // This assignment is invalid because `id` is declared as `const`.
/**
 * @type {string}
 * @description The user's email address.
 */
let email = "raza@yahoo.net";

/**
 * @type {string}
 * @deprecated Avoid using `var` due to potential scoping issues. Use `let` or `const` instead.
 */
var password = "";

/**
 * @type {string}
 * @description The user's city of residence.
 * @example city = "Karachi"; // Example of valid assignment
 * @example city = 25; // Example of invalid assignment (type mismatch)
 * @example city; // Example of accessing the city value
 */
let city = "Multan";


