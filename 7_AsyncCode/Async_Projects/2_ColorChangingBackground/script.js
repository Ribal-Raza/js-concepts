const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const body = document.querySelector("body");

// generation of random colors
const randomColors = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startColorChange = () => {
  if (!interval) {
    interval = setInterval(colorChange, 1000);
  }
  function colorChange() {
    body.style.background = randomColors();
    console.log("color changing started");
  }
};

btnStart.addEventListener("click", (e) => {
  startColorChange();
});

btnStop.addEventListener("click", (e) => {
  clearInterval(interval);
  interval = null;
  console.log("color changing stoped");
});
