/**
 * @fileoverview while and do...while loops
 */
/** `while` loop
 * The `while` loop is ideal when the number of iterations is not known in advance.
 * It repeatedly executes the block as long as the condition is true.
 * Key Notes:
 * - The condition is checked before each iteration.
 * - If the condition is false at the start, the loop won't run at all.
 */
/**
 * Example: using a while loop to retry a failed operation
 *
 * Use-case: Try to connect to a database or external service.
 * If the connection fails, retry until it succeeds or until max attempts are reached.
 */
const MAX_ATTEMPTS = 5;
let isConnected = false;
let attempts = 0;
while (!isConnected && attempts < MAX_ATTEMPTS) {
  console.log(`Attempt ${attempts + 1} to connect...`);
  isConnected = Math.random() < 0.6;
  attempts += 1;
}
if (isConnected) {
  console.log("Connected successfully!");
} else {
  console.log("Failed to connect after maximum attempts.");
}

/** `do...while` loo[]
 * The `do...while` loop is similar to `while`, but with one key difference:
 * - The block runs at least once, even if the condition is false.
 * This is useful when you want to guarantee that the loop body executes
 * before the condition is checked (e.g., for user prompts or sensor checks).
 */
/**
 * Example: using a do...while loop to simulate processing buffered log entries
 *
 * Use-case: We want to process at least one log batch, even if the buffer starts empty.
 * New logs might be fetched after each attempt, so we keep checking until it's empty.
 */
let logs = ["Startup complete", "User logged in", "Error: Timeout"];
let cycle = 1;
do {
  console.log(`Cycle ${cycle}: Processing ${logs.length} log entries...`);
  logs = [];
  cycle += 1;
} while (logs.length > 0);
console.log("All logs are processed");
