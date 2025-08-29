/** Classes & Constructors (ES6+)
 * JavaScript is prototype-based. `class` mostly provides cleaner syntax over constructor functions
 * and prototypes, but it also adds real semantics:
 * - strict mode class bodies
 * - TDZ (Temporal Dead Zone) for class bindings
 * - new-only constructors
 * - non-enumerable methods
 * - private fields/methods (#).
 * Constructor:
 * Optional in base classes; if omitted, a default constructor(){} is used.
 * In subclasses (class Admin extends User), you must call super(...) before using this.
 * Notes:
 * - Class declarations are in a temporal dead zone until evaluated (can’t use them early).
 * - Calling a class without new throws a TypeError.
 * - Methods defined in the class body are non-enumerable by default.
 */

// Defining a User class
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    const splittedPassword = new String(this.password).split("");
    return splittedPassword.reverse().join("");
  }
  changeUserName() {
    return this.username.toUpperCase();
  }
}
const user1 = new User("Emilia", "emilia@zoit.com", "abc123");
console.log(`---------Class Constructor Method--------\n${user1}`);
console.log(`Encrypted Pasword: ${user1.encryptPassword()}`);
console.log(
  `Changed username ${user1.username} to Upper case: ${user1.changeUserName()}`
);
// All the above code can be achieved by using prototypes and behind the scenes prototypes are used in JS
// so behind the scenes, above code with classes would be working like following:
function CreateUser(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}
CreateUser.prototype.encryptPassword = function () {
  const splittedPassword = new String(this.password).split("");
  return splittedPassword.reverse().join("");
};

CreateUser.prototype.changeUserName = function () {
  return `${this.name.toUpperCase()}`;
};

const user2 = new CreateUser("John", "ahsan@zoit.com", "def456");
console.log(`---------Constructor Function Method--------\n${user2}`);
console.log(`Encrypted Password: ${user2.encryptPassword()}`);
console.log(
  `Changed username ${user2.username} to Upper case: ${user2.changeUserName()}`
);
