// Select the clock element from the DOM
const clock = document.getElementById("clock");
// setInterval() repeatedly calls a function or executes a code snippet,
// with a fixed time delay between each call.
setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
