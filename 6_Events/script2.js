const logBox = document.getElementById("console");
// Simple function to print log to the console box
const log = (...args) => (logBox.textContent += args.join(" ") + "\n");

/** Problem 1
 * Click any button in #toolbar.
 * Log the event type and the human‑readable local time the click occurred.
 * Target props: event.type, event.timeStamp
 */
document.querySelector("#toolbar").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let readableTime = new Date(
      performance.timeOrigin + e.timeStamp
    ).toLocaleTimeString();
    log(`Type of Event: ${e.type} \nReadable Time: ${readableTime}`);
  }
});

/** Problem 2
 * Add one delegated click listener on #productGrid. When any tile is clicked, log:
 * - target node’s text (the thing actually clicked),
 * - currentTarget id (the element the listener is attached to).
 * - Target props: event.target, event.currentTarget
 */
document.querySelector("#productGrid").addEventListener("click", (e) => {
  const targetNodeText = e.target
    .closest('[data-role="product"]')
    .textContent.trim(" ");
  const currentTargetNodeID = e.currentTarget.id;
  log(
    `Target Node: ${targetNodeText} \nCurrent Target Node: ${currentTargetNodeID}`
  );
  console.log(targetNodeText, currentTargetNodeID);
});

/** Problem 3
 * Click anywhere inside #stage.
 * - Log clientX/clientY (viewport)
 * - screenX/screenY (monitor)
 * - x/y (alias of clientX/clientY).
 * - Also log offsetX/offsetY to know position relative to the stage.
 */
document.querySelector("#stage").addEventListener("click", (e) => {
  log(
    `Viewport\nClientX: ${e.clientX}, ClientY: ${e.clientY}\nAlias: x: ${e.x}, y:${e.y}`
  );
  log(`Monitor\nScreenX: ${e.screenX}, ScreenY: ${e.screenY}`);
  log(`Offset\nOffsetX: ${e.offsetX}, OffsetY: ${e.offsetY}`);
});

/** Problem 4
 * Listen on document for keydown. Log:
 * - which key was pressed (key and code),
 * - whether Alt/Ctrl/Shift were held,
 * - the legacy keyCode number.
 * - Also print a special message if Ctrl+Enter is pressed.
 */
document.addEventListener("keydown", (e) => {
  log(`Key: ${e.key}, Code: ${e.code}`);
  log(`Alt: ${e.altKey}, Ctrl: ${e.ctrlKey}, Shift: ${e.shiftKey}`);
  log(`Legacy KeyCode: ${e.keyCode}`);
  
});
