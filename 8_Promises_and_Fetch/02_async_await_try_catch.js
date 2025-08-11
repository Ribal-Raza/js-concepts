/** aysnc_wait
 * async/await makes Promise-based code read like synchronous code.
 * async/await is syntactic sugar for consuming Promises.
 * async: An async function returns a Promise for its return value.
 * - It resolves with the returned value or rejects with an uncaught exception.
 * await: Waits for a Promise and yields its fulfillment value.
 * - Only usable inside async functions or at the top level of a module.
 * async before a function ⇒ it always returns a Promise
 * even if you return 42, it becomes Promise<42>.
 * await only works inside an async function (or top-level in ES modules).
 * It “unwraps” the resolved value.
 */

// Simple helper function that simulates async work
const wait = (milliseconds, value, shouldFail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (shouldFail ? reject(new Error("Boom")) : resolve(value)),
      milliseconds
    )
  );

// A simple promise with .then()
// function getUser() {
//   return wait(1000, { id: 1, name: "John" });
// }
// console.log(`-------------\nA`);
// getUser().then((user) => console.log("B1:", user));
// console.log("C\n");
// Output:
// A
// C
// B1: { id: 1, name: 'John' }

// Handling promise with async only
// async function getUserAsync() {
//   console.log("-------------\nA");
//   const user = wait(1000, { id: 1, name: "John" }); // still a Promise, not awaited
//   console.log("B"); // runs immediately
//   user.then((v) => console.log("C", v));
// }
// getUserAsync();
// Output:
// A
// B
// C { id: 1, name: 'John' }

// Handling promise with async and await
// async function getUserAsyncAwait() {
//   console.log("-------------\nA");
//   const user = await wait(1000, { id: 1, name: "Johnathan" });
//   console.log("B", user);
//   console.log(`C\n`);
// }
// getUserAsyncAwait();
// Output:
// A
// B { id: 1, name: 'Johnathan' }
// C

// Handling promise with async, await, and try/catch
async function getUserAsyncAwaitTryCatch() {
  console.log("-------------\nA");
  try {
    const user = await wait(1000, { id: 1, name: "Johnathan" }, true);
    console.log("B", user);
  } catch (err) {
    console.log("C", err.message);
  }
  console.log(`D\n`);
}
getUserAsyncAwaitTryCatch();
console.log("E");
// Output:
// A
// E
// C Boom
// D
