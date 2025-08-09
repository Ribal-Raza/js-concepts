/** Events in JS
 * "Events are things that happen in the system you are programming, which the system tells
 * you about so your code can react to them." — MDN
 * In simple words, Events are activities that happen on a webpage (like a click or key press) that JavaScript can respond to.
 * In JavaScript, events are handled one at a time in the order they enter the event queue (sequentially).
 * However, asynchronous tasks can delay when an event's code actually runs, making timing appear out of order.
 * Examples of events:
 * - User events: click, keydown, submit, mouseenter
 * - Browser events: load, resize, error
 * - Form events: input, change, focus, blur
 */
// Events can be applied directly in HTML tag, inline HTML events. But this approach is not much scalable. Because It mixes JS with HTML and difficult to maintain.
// <a style="color: aliceblue" onclick="alert('clicked')"> ❌
// You can also add event in JS file like
// document.querySelector("#prayer").onclick = function () {alert("clicked")}❌
// But above example is also not recommended way.
// The better way is to use addEventListener because it is the modern, flexible way: supports multiple handlers & advanced options.
document.querySelector("#prayer").addEventListener("click", function (event) {
  /**
   * Event Object: Automatically passed to event listener callbacks. usally as 'e' or 'event'
   * Contains details about the event (type, target, coordinates, modifier keys, etc.).
   * Type depends on event: MouseEvent, KeyboardEvent, PointerEvent, etc.
   */
  // Prints Event Object, named PointerEvent, as it's a click type event.
  console.log(event);
  alert("clicked");
});
// important propertise of Event object
// type, timeStamp, preventDefault, defaultPrevented
// target, currentTarget, toElement, srcElement
// x, y, clientX, clientY, screenX, screenY, tiltX, tiltY
// altKey, ctrlKey, shiftKey, keyCode

// addEventListener(type, listener, useCaptureOrOptions)
// type = name of the event ("click", "input", etc.)
// useCapture (true = capture phase, false/default = bubbling phase) controls when the listener runs in propagation.
/**
 * Event Propagation: Capturing vs Bubbling
 * When an event occurs on a target element (e.g., #owl), it doesn't just stay there.
 * It travels through the DOM in 3 phases:
 * 1. Capturing Phase (capture: true)
 *    - Event travels from the root (window → document → html → body → ... → parent)
 *      down to the target element.
 *    - Listeners with the 3rd parameter = true (or { capture: true })
 *      run during this downward journey.
 * 2. Target Phase
 *    - Event reaches the element that was actually interacted with (clicked, hovered, etc.).
 *    - Only the listeners attached to the target element run here, but their order depends
 *      on whether they're set to capture or bubble.
 * 3. Bubbling Phase (capture: false / default)
 *    - Event travels back up from the target element to the root.
 *    - Listeners with the 3rd parameter = false (or omitted) run during this upward journey.
 */
// Let's see an example of bubbling vs capturing phase
document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log("Parent Item");
  },
  false
);
document.querySelector("#owl").addEventListener(
  "click",
  function (e) {
    console.log("Child item");
    // e.stopPropagation(); // Stops the event from bubbling further.
  },
  false
);
/** Example Outputs for Parent (#images) and Child (#owl) Click:
 * Case 1: Both false  (bubbling mode)
 *   Output: Child Item → Parent Item
 *   Reason: Child runs first in target phase, then parent runs in bubble phase.
 * Case 2: Both true   (capturing mode)
 *   Output: Parent Item → Child Item
 *   Reason: Parent runs first on the way down (capture), then child runs in target phase (capture).
 * Case 3: Parent true, Child false
 *   Output: Parent Item → Child Item
 *   Reason: Parent runs during capture phase (on the way down), then child runs in target phase (bubble).
 * Case 4: Parent false, Child true
 *   Output: Child Item → Parent Item
 *   Reason: Child runs first during capture phase (on the way down), then parent runs in bubble phase (on the way up).
 * -----------------------------------------
 * Summary:
 * - capture: true  → listener runs in capturing phase (downward).
 * - capture: false → listener runs in bubbling phase (upward).
 * - Events always travel: Capturing → Target → Bubbling.
 */
// stopPropagation(): Prevents the event from bubbling/capturing to other elements,
// but allows other event listeners on the same element to still run.
// stopImmediatePropagation(): Prevents bubbling/capturing AND stops any remaining
// event listeners on the same element from running.

// Prevent Default
// preventDefault(): Tells the browser NOT to perform the event's default action
// (e.g., following a link, submitting a form).
// defaultPrevented: Boolean property on the event object that tells you if
// preventDefault() has already been called (true = default prevented).
document.getElementById("google").addEventListener("click", function (e) {
  // If user holds Shift while clicking, block navigation
  if (e.shiftKey) {
    e.preventDefault(); // stop the browser from opening Google
    console.log("Navigation blocked because Shift was pressed");
  }

  // Check if preventDefault() was called
  if (e.defaultPrevented) {
    console.log("Default action was prevented ✅");
  } else {
    console.log("Default action will proceed (link will open) ⏩");
  }
});
