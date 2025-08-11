/** Promise in JS
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * A Promise acts as a placeholder for a value that will be available later.
 * It lets you attach success/failure handlers so async code can work like sync code.
 * A Promise is in one of these states:
 * - pending: initial state, neither fulfilled nor rejected.
 * - fulfilled/resolved: meaning that the operation was completed successfully.
 * - rejected: meaning that the operation failed.
 * The eventual state of a pending promise can either be fulfilled with a value or rejected with reason (error)
 * We need promises to handle results that come later, like waiting for an online order to arrive.
 * You place the order now, and the promise delivers it when it’s ready (or reports an issue).
 */

// 1) Create a Promise, consume it later
const promise1 = new Promise(function (resolve, reject) {
  // Executor runs immediately.
  // Simulate async work with setTimeout
  setTimeout(() => {
    console.log("Task is complete");
    resolve(); // Move promise from "pending" → "fulfilled"
  }, 2000);
});
// Register success handler; runs when resolve() is called above
promise1.then(function () {
  console.log("Promise resolved");
});

// 2) Create and consume in one chain (common pattern)
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task2 is complete");
    resolve(); // Fulfill the promise
  }, 2500);
}).then(() => {
  console.log("Promise2 resolved");
}); // Handler is attached immediately to the returned Promise

// 3) Resolve with a value; receive it in .then(...)
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`----------Task 3 Completed------------`);
    console.log("User details fetched");
    resolve({ username: "John", email: "johnrufus@examplepetstore.com" });
  }, 3000);
});
// The value passed to resolve(...) becomes the argument of .then(...)
promise3.then((user) => {
  console.log(`User's Name: ${user.username}\t|\tUser's Email: ${user.email}`);
  // you can return a value or another Promise here to chain more work
});

// 4) Rejection path + .catch() (with best-practice Error objects)
const promise4 = new Promise((resolve, reject) => {
  // Simulate async login; flip 'error' to test success vs failure
  setTimeout(() => {
    const error = true; // set to false to see the success path
    if (!error) {
      console.log("----------Task 4 Completed------------");
      resolve({ id: 1, username: "John" }); // success value passed to .then(...)
    } else {
      reject(new Error("Login failed")); // prefer Error objects for stack/message
    }
  }, 3500);
});

promise4
  // Runs only if resolve(...) above is called
  .then((user) => {
    console.log(`User's ID: ${user.id}\t|\tUser's Username: ${user.username}`);
  })
  // Catches: explicit reject(...), thrown errors, or .then failures above
  .catch((err) => {
    console.log("----------Task 4 Failed------------");
    console.log(err.message || err);
  })
  // Optional: runs on both success and failure (cleanup/final steps)
  .finally(() => {
    console.log("Task 4 done (success or failure).");
  });

// 5) Chaining multiple Promises (values flow through returns)
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      console.log("----------Task 5 Completed------------");
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ]); // this array becomes the input to the first .then
    } else {
      reject(new Error("Error in request"));
    }
  }, 4000);
});

promise5
  // Step 1: receive the array; RETURN something to pass it to the next .then
  .then((users) => {
    const firstUser = users[0];
    return firstUser; // returned value is next .then's argument
  })
  // Step 2: gets whatever the previous .then returned (here: firstUser)
  .then((user) => {
    console.log(`User's ID: ${user.id}\t|\tUser's Name: ${user.name}`);
    // Tip: return another Promise here to continue an async chain
  })
  // Single .catch handles any error from any prior step in the chain
  .catch((err) => {
    console.log("----------Task 5 Failed------------");
    console.log(err.message || err);
  })
  // Optional finalizer for cleanup
  .finally(() => {
    console.log("Task 5 cleanup complete.");
  });

