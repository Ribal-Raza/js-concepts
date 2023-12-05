const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.style.cursor = "pointer";

  return button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "lightblue":
        body.style.background = "lightblue";
        break;
      case "lightseagreen":
        body.style.background = "lightseagreen";
        break;
      case "lightpink":
        body.style.background = "lightpink";
        break;
      case "lightcoral":
        body.style.background = "lightcoral";
        break;
      default:
        body.style.background = "white";
        break;
    }

    /*but there is a more smart approach, as know the value of id and background is same, we can use 
    following approach instead of using switch or if...else:
    button.addEventListener("click", (event) => {
      const color = button.id;
      return (body.style.background = color);
    });
    */
  });
});
