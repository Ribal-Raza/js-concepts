const form = document.querySelector("form");
const results = document.querySelector("#results");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Enter a valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}: Underweight</span>`;
      results.style.color = "#cdab00";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}: Normal</span>`;
      results.style.color = "#008000";
    } else {
      results.innerHTML = `<span>${bmi}: Overweight</span>`;
      results.style.color = "#ff0000";
    }
  }
});
