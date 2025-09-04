/**
 * Getters and Setters
 * - A **getter** is a special method that runs when a property is *read*.
 *   It lets you control what value is returned (e.g., calculate on the fly).
 * - A **setter** is a special method that runs when a property is *assigned*.
 *   It lets you control how values are stored (e.g., validate before saving).
 * Why use them?
 * - Encapsulation: Protects internal object state from direct misuse.
 * - Validation: Prevents invalid or unsafe values from being assigned.
 * - Computed Properties: Lets you derive values dynamically instead of storing duplicates.
 * - Flexibility: External code can keep using `.prop`, even if the underlying logic changes.
 * Real-world analogy:
 * - Getter = Checking account balance at ATM (you see a safe, computed view).
 * - Setter = Depositing money at ATM (validated before updating your account).
 */

class Account {
  /**
   * Constructor sets up the account with initial balance and PIN.
   * @param {number} balance - The starting balance of the account.
   * @param {string|number} pin - A secret PIN to protect the account.
   */
  constructor(balance, pin) {
    // Internal/private-like property.
    // Why "_balance"?
    // - Because we want to define a public property "balance"
    //   with getter and setter methods.
    // - If we stored directly in "this.balance", the getter/setter
    //   would call itself recursively (infinite loop).
    // - Convention in JS: prefix with underscore (_) to show
    //   "this is internal, don't touch directly".
    this._balance = balance;

    // Similarly, underscore to mark it as internal.
    this._pin = String(pin); // normalize to string
  }

  /**
   * Getter for balance.
   * - Notice: getters take **no parameters**.
   * - Called automatically whenever you access `acc.balance`.
   * - Good for formatting, computing, or safely exposing values.
   */
  get balance() {
    // Here we expose a floored (rounded down) version of balance.
    // The actual stored value (this._balance) may have decimals,
    // but customers only see integer values for simplicity.
    return Math.floor(this._balance);
  }

  /**
   * Setter for balance.
   * - Notice: setters take **exactly one parameter**.
   * - Called automatically whenever you assign to `acc.balance = X`.
   * - Good for validation before updating.
   * @param {number} amount - The new balance to assign.
   */
  set balance(amount) {
    if (amount < 0) {
      console.log("❌ Balance cannot be negative");
      return;
    }
    // Store in internal field, not public property,
    // to avoid recursion.
    this._balance = amount;
  }

  /**
   * Deposit money into the account.
   * @param {number} amount - How much to deposit.
   * @param {string|number} pin - Must match the account PIN.
   */
  deposit(amount, pin) {
    if (pin === this._pin) {
      this._balance += amount;
      console.log(`✅ Deposited ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("❌ Invalid PIN");
    }
  }

  /**
   * Withdraw money from the account.
   * @param {number} amount - How much to withdraw.
   * @param {string|number} pin - Must match the account PIN.
   */
  withdraw(amount, pin) {
    if (pin !== this._pin) {
      console.log("❌ Invalid PIN");
      return;
    }
    if (amount > this._balance) {
      console.log("❌ Insufficient funds");
      return;
    }
    this._balance -= amount;
    console.log(`✅ Withdrew ${amount}. New balance: ${this._balance}`);
  }
}

// --- Usage Example ---

const accHolder1 = new Account(2000, "1234");

// Reading balance → calls getter (no parentheses!)
console.log(accHolder1.balance); // 2000 (floored)

// Writing balance → calls setter (1 parameter required)
accHolder1.balance = 2500; // updates balance internally
console.log(accHolder1.balance); // 2500

// Deposit and withdraw operations
console.log(`-------Class based Account-------`);
accHolder1.deposit(500, "1234"); // ✅ works
accHolder1.withdraw(1000, "1234"); // ✅ works
accHolder1.withdraw(5000, "1234"); // ❌ insufficient funds
accHolder1.deposit(200, "1111"); // ❌ wrong PIN

// --------------------------
// Pre-ES6 Getters & Setters
// --------------------------
//
// Before ES6 introduced `class` syntax, JavaScript used
// constructor functions + prototypes for OOP.
// Getters and setters were still possible, but defined via
// `Object.defineProperty` or inside object literals.

function Account2(balance, pin) {
  // As before, we store sensitive data in "internal" fields
  // with underscore (_) naming. This avoids infinite recursion
  // when we later create getters/setters for "balance".
  this._balance = balance;
  this._pin = String(pin);

  // Define a public property `balance` that is actually controlled.
  // This means whenever we *read* or *assign* `acc.balance`,
  // these functions will run instead of directly exposing `_balance`.
  Object.defineProperty(this, "balance", {
    // Getter (no params) → called when we read acc.balance
    get: function () {
      return Math.floor(this._balance);
    },
    // Setter (1 param) → called when we assign acc.balance = X
    set: function (amount) {
      if (amount < 0) {
        console.log("❌ Balance cannot be negative");
        return;
      }
      this._balance = amount;
    },
  });
}

// Methods are still defined on prototype (saves memory across instances).
Account2.prototype.deposit = function (amount, pin) {
  if (pin === this._pin) {
    this._balance += amount;
    console.log(`✅ Deposited ${amount}. New balance: ${this._balance}`);
  } else {
    console.log("❌ Invalid PIN");
  }
};

Account2.prototype.withdraw = function (amount, pin) {
  if (pin !== this._pin) {
    console.log("❌ Invalid PIN");
    return;
  }
  if (amount > this._balance) {
    console.log("❌ Insufficient funds");
    return;
  }
  this._balance -= amount;
  console.log(`✅ Withdrew ${amount}. New balance: ${this._balance}`);
};

// --- Usage ---
console.log(`-------Constructor function based Account-------`);
const accHolder2 = new Account2(2000, "1234");
console.log(accHolder2.balance); // Getter → 2000 (floored)
accHolder2.balance = 2500; // Setter → updates balance
console.log(accHolder2.balance); // Getter → 2500
accHolder2.deposit(500, "1234"); // ✅ Works
accHolder2.withdraw(1000, "1234"); // ✅ Works
accHolder2.withdraw(5000, "1234"); // ❌ Insufficient funds
accHolder2.deposit(200, "1111"); // ❌ Wrong PIN

// --------------------------
// Getters & Setters in Objects
// --------------------------
//
// Objects can also define getters and setters directly
// inside object literals. This is often used to:
//
// 1) Encapsulate logic inside "data objects"
//    → e.g., validate before updating user info.
//
// 2) Provide computed properties
//    → e.g., fullName that combines firstName + lastName.
//
// 3) Maintain consistent API
//    → external code just uses .username or .email
//       while internal logic may sanitize/format values.

const User = {
  _username: "John",
  _email: "john@j-johnna.com",

  // Getter for username
  get username() {
    // Could apply formatting here (capitalize, trim, etc.)
    return this._username;
  },

  // Setter for username
  set username(value) {
    // Could validate length, characters, etc.
    this._username = value;
  },

  get email() {
    // Could mask sensitive parts (j***@domain.com)
    return this._email;
  },

  set email(value) {
    // Could validate format with regex before assignment
    this._email = value;
  },
};

// --- Usage ---
console.log(`-------Getters and Setters in Object-------`);
console.log(User.username); // "John" → comes via getter
User.username = "Jane"; // setter runs
console.log(User.username); // "Jane"
console.log(User.email); // "john@j-johnna.com"
