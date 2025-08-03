const buttons = document.querySelectorAll(".button");
const body = document.getElementsByTagName("body")[0];
console.log(buttons);
console.log(body);
// A clean, concise and scalable code
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    body.style.backgroundColor = button.id;
  });
});

// Longer, and static check code
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     switch (event.target.id) {
//       case "lightblue":
//         body.style.backgroundColor = "lightblue";
//         break;
//       case "lightcoral":
//         body.style.backgroundColor = "lightcoral";
//         break;
//       case "lightpink":
//         body.style.backgroundColor = "lightpink";
//         break;
//       case "lightseagreen":
//         body.style.backgroundColor = "lightseagreen";
//         break;

//       default:
//         body.style.backgroundColor = "transparent";
//         break;
//     }
//   });
// });
