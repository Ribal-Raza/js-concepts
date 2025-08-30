/**
 * 🧠 Learning goal
 * Can we change `Math.PI`? If not, why not? Answering this teaches us how
 * JavaScript protects properties using **property descriptors** and how we can
 * use the same mechanics to make parts of *our* objects read-only, hidden from
 * iteration, or locked.
 *
 * 📦 Real-world use case
 * - Prevent accidental overwrites of critical constants (e.g., API URLs, app version).
 * - Hide internal fields from logs/serialization (non-enumerable).
 * - Lock public APIs in libraries/SDKs so consumers can’t break invariants.
 */

"use strict"; // Strict mode: invalid writes throw (better for learning)

/* -------------------------------------------------------------------------- */
/* 1) Baseline: can we reassign Math.PI by simple assignment?                  */
/* -------------------------------------------------------------------------- */

console.log("Math.PI (start):", Math.PI); // 3.141592653589793

try {
  // Intention: "Set PI to 4"
  Math.PI = 4; // ❌ In strict mode this throws; in sloppy mode it's silently ignored.
} catch (err) {
  console.log("Attempt to reassign Math.PI →", err.toString());
}

console.log("Math.PI (after assignment attempt):", Math.PI); // still 3.14159...

/**
 * Why did it fail?
 * JS properties come with *descriptors* that control:
 * - value / writable:   the stored value; can it be reassigned?
 * - enumerable:         does it show in Object.keys / for...in?
 * - configurable:       can the descriptor itself be changed? can it be deleted?
 * Built-ins often lock important properties with: writable:false, configurable:false.
 */

const piDesc = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Descriptor of Math.PI →", piDesc);
// { value: 3.14159..., writable: false, enumerable: false, configurable: false }

/**
 * Key rules (memorize):
 * - If configurable:false → you cannot delete it, change enumerable, change configurable,
 *   or flip writable from false→true. (You can only go writable:true→false when locking.)
 * - Therefore, Math.PI cannot be reassigned or redefined.
 */

/* -------------------------------------------------------------------------- */
/* 2) Using descriptors on *our* objects                                       */
/* -------------------------------------------------------------------------- */

const product = {
  name: "Shoe Polish",
  price: 30,
  isAvailable: true,
};

console.log("\nProduct before:", product);
console.log("Keys before:", Object.keys(product));
// Default literal props → { writable:true, enumerable:true, configurable:true }

console.log(
  "Descriptor of product.name (before) →",
  Object.getOwnPropertyDescriptor(product, "name")
);

/**
 * Goal: prevent accidental renaming and hide from general listings.
 * - Make `name` non-writable: assignment won’t change it.
 * - Make `name` non-enumerable: it won’t appear in Object.keys / JSON unless accessed directly.
 * (We’ll keep configurable:true for now so we can still tweak later.)
 */
Object.defineProperty(product, "name", {
  writable: false,
  enumerable: false,
  // configurable stays true (so we can decide to lock it later)
});

console.log("\nAttempting to change product.name...");
try {
  product.name = "New Shoe Polish"; // ❌ throws in strict; no effect otherwise
} catch (err) {
  console.log("Reassign name →", err.toString());
}
console.log("product.name (after):", product.name); // "Shoe Polish"
console.log("Keys after (name hidden):", Object.keys(product));

/**
 * If we’re sure this should never change again, we now flip configurable → false (lock it).
 * After this, redefining any attribute or deleting `name` will throw.
 */
Object.defineProperty(product, "name", { configurable: false });
console.log(
  "Descriptor of product.name (locked) →",
  Object.getOwnPropertyDescriptor(product, "name")
);

// Try to re-enable enumeration (should fail now that configurable:false)
try {
  Object.defineProperty(product, "name", { enumerable: true }); // ❌
} catch (err) {
  console.log("Re-define name.enumerable →", err.toString());
}

/* -------------------------------------------------------------------------- */
/* 3) Defining *our own* true constants                                        */
/* -------------------------------------------------------------------------- */

/**
 * Real-world pattern: app/config constants. We want:
 * - A fixed value (writable:false)
 * - Loggable/serializable if we choose (enumerable:true or false per need)
 * - Fully locked (configurable:false) so no one can redefine it.
 */
const CONFIG = {};
Object.defineProperty(CONFIG, "API_BASE_URL", {
  value: "https://api.example.com/v1",
  writable: false,
  enumerable: true, // set to false if you want it hidden from Object.keys
  configurable: false, // 🔒 fully locked
});

console.log("\nCONFIG.API_BASE_URL:", CONFIG.API_BASE_URL);
try {
  CONFIG.API_BASE_URL = "https://evil.example.com"; // ❌
} catch (err) {
  console.log("Reassign CONFIG.API_BASE_URL →", err.toString());
}

/* -------------------------------------------------------------------------- */
/* 4) Proving you cannot redefine Math.PI                                      */
/* -------------------------------------------------------------------------- */

try {
  // Any attempt to flip writable or configurable on a non-configurable prop → TypeError
  Object.defineProperty(Math, "PI", { writable: true, configurable: true }); // ❌
} catch (err) {
  console.log("\nRedefine Math.PI →", err.toString());
}

/* -------------------------------------------------------------------------- */
/* 5) Bonus: freeze vs seal (quick intuition)                                  */
/* -------------------------------------------------------------------------- */

/**
 * Object.freeze(obj)
 *  - Makes all *own* properties non-writable and non-configurable.
 *  - Prevents adding/removing props. (Shallow: nested objects remain mutable.)
 *
 * Object.seal(obj)
 *  - Prevents adding/removing props (configurable:false),
 *  - but leaves writability as-is (so values may still change).
 */
const user = { id: 1, profile: { city: "Multan" } };
Object.freeze(user);

try {
  user.id = 2;
} catch (e) {
  console.log("Freeze write id →", e.toString());
}
console.log("user.id (after freeze):", user.id); // still 1
user.profile.city = "ABC"; // still allowed (nested object not frozen)
console.log("user.profile.city (note: freeze is shallow):", user.profile.city);

/* -------------------------------------------------------------------------- */
/* 6) Takeaways                                                                 */
/* -------------------------------------------------------------------------- */
/**
 * - Built-ins like Math.PI are protected by descriptors (non-writable & non-configurable).
 * - Use Object.getOwnPropertyDescriptor to *inspect* behavior; use Object.defineProperty to *shape* it.
 * - For your APIs/config:
 *    • writable:false to avoid accidental overwrites,
 *    • enumerable: choose visibility in logs/iteration,
 *    • configurable:false to lock contracts (like SDK public APIs).
 * - Prefer strict mode so mistakes fail loudly during development.
 */
