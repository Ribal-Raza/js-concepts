const form = document.querySelector("form");

/* As we have accessed the form, now we need to understand one thing, whenever the user will click 
"calculate" button, the values in the form will be submitted. These values automatically go to server
or url. In this project as we are focusing on calculating BMI on page, not through server. So we have to
stop this default behaviour of sending values to server*/

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents default behaviour of form

  // now we have to grab values of height and weight entered in the form inputs when form is submitted

  /* querySelector() returns the whole element, we have to extract it's value with ".value" property
  but .value returns value in string, so we have to convert it in integer with parseInt() */
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  // lets also grab results element
  const results = document.querySelector("#results");

  // apply some checks on input values
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const BMI = weight / ((height * height) / 10000).toFixed(2);
    let remarks;
    if (BMI < 18.6) {
      remarks = "You are under weight";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      remarks = "Your BMI is normal";
    } else {
      remarks = "You are over weight";
    }
    results.innerHTML = `<span>You BMI is: ${BMI} </span> <span>${remarks}</span>`;
  }
});
