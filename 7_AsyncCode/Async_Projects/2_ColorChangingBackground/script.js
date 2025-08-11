// Generate Random Hex Color code
// Hex Code: #RRGGBB
// RR -> Red, GG -> Green, BB -> Blue
// Each pair can have values from 00 to FF where each item has values (0,..,9,A,B,C,D,E,F)
const randomColor = function () {
  const hexString = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomPosition = Math.floor(Math.random() * 16);
    color += hexString[randomPosition];
  }
  return color;
};
console.log(randomColor());
let intervalId;
document.querySelector("#start").addEventListener("click", (e) => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.querySelector("body").style.transition = "ease-out 1s";
      document.querySelector("body").style.backgroundColor = randomColor();
    }, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
