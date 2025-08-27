/** Object Literals
 * - "Object literal" simply means defining an object directly with `{}`.
 *   Example: const obj = { key: value, method() { ... } };
 * - Objects are collections of properties (data) and methods (functions).
 * - Methods in object literals usually need to access other properties
 *   of the same object. For that we use the `this` keyword.
 *   - In a regular function method: `this` refers to the object that
 *     called the method.
 *   - Example:
 *       const car = { brand: "Toyota", getBrand() { console.log(this.brand); } };
 *       car.getBrand(); // "Toyota"
 * - ⚠️ Arrow functions behave differently:
 *   - Arrow functions do NOT have their own `this`.
 *   - They capture (or "lexically bind") `this` from the outer scope
 *     where they were created.
 *   - So, when used as object methods, arrow functions usually CANNOT
 *     access the object’s properties via `this`.
 * - Therefore:
 *   - Use regular functions or shorthand method syntax for object methods.
 *   - Use arrow functions when you specifically want to preserve
 *     the outer `this` (e.g., callbacks, event handlers inside methods).
 */

const myproject = {
  id: "100",
  name: "E-commerce WebApp's Front-end",
  technologies: ["Javascript", "React.js", "Redux", "TailwindCSS", "Next.js"],
  // Regular function
  getTechData: function () {
    const name = this.name;
    const tech = this.technologies;
    return console.log(`Project Title: ${name}\nTech Stack: ${tech}`);
  },
  // Shorthand method
  getId() {
    console.log(`Project ID: ${this.id}`);
  },
};
myproject.getId();
myproject.getTechData();

/** Constructor Functions in JavaScript (Pre-ES6 Style)
 * Object literals are great for one-offs, but duplicating the same shape/methods
 * across many objects leads to repetition and higher memory usage.
 * A constructor function lets you create many similar objects efficiently.
 * Examples of some constructors that are usually used
 * - const date = new Date();
 * - const promise1 = new Promise(...);
 * Date() and Promise() are constructors.
 * What does 'new' do? (simplified 4 steps)
 * - Creates a fresh empty object: {}.
 * - Sets the object's internal [[Prototype]] to Constructor.prototype.
 * - Calls the constructor with this bound to that new object.
 * - Returns the object (unless the constructor returns an explicit object).
 * Conventions for constructor functions:
 * - Name constructor functions in PascalCase (e.g., Project) by convention.
 * - Do NOT return this; from a constructor. It’s implicit with new.
 * - Put instance methods on Constructor.prototype so all instances share
 *   the same function (memory efficient).
 * - If you forget new, this will be undefined in strict mode (TypeError),
 *   or the global object in sloppy mode (bug).
 *
 */
function Project(id, name, technologies) {
  // 1) `this` is a fresh object created by `new`
  this.id = id;
  this.name = name;
  this.technologies = technologies;
  // 2) No explicit return needed; `new` will return `this`
}

// Put methods on the prototype (shared by all instances)
Project.prototype.getTechData = function () {
  const name = this.name;
  const tech = this.technologies;
  return console.log(`Project Title: ${name}\nTech Stack: ${tech}`);
};
// Memory tip:
// - Prototype method: ONE shared function for all instances ✅
// - Method inside constructor: One function PER instance ❌

const project1 = new Project("101", "E-commerce WebApp's Front-end", [
  "Javascript",
  "React.js",
  "Redux",
  "TailwindCSS",
  "Next.js",
]);
const project2 = new Project("102", "Rides & Courier Platform", [
  "TypeScript",
  "Next.js",
  "tRPC",
  "PostgreSQL",
]);
project1.getTechData();
project2.getTechData();
