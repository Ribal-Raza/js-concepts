/* Conditional statements allows to execute different blocks of code based on certain conditions. They 
are essential for making decisions and controlling the flow of  program. 
*/

// The if statement is used to execute a block of code if a specified condition is true.
let isActive = true;
// if (isActive == true) {console.log("User is active");}
//  but there is no need to write isActive == true, simply write isActive
if (isActive) {
  console.log("User is active");
}

/* The if else statement extends the if statement by providing an alternative block of code to execute if 
the condition is false. */
isActive = false;
if (isActive) {
  console.log("User is active");
} else {
  console.log("User is not Active");
}

/* The else if statement allows for more complex conditional branching by providing multiple conditions and 
associated code blocks. It chains multiple if statements together. */
const score = 100;
if (score == 50) {
  console.log("Your grade is C");
} else if (score == 100) {
  console.log("You are topper");
} else {
  console.log("You are fail");
}
/* JavaScript provides logical operators to combine multiple conditions:
1- && : The AND operator checks if both conditions are true. 
2- ||: The OR operator checks if either or both conditions are true.
3- !: The NOT operator negates a condition, reversing its truth value.*/
const score2 = 75;
const isStudent = true;
if (isStudent && score2 >= 60) {
  console.log("You have passed");
} else {
  console.log("You have failed");
}

// Nested If else
const hasDebitCard = true;
const item1 = "Bag";
const item2 = "Jacket";
if (hasDebitCard) {
  if (item1 == "Bag" && item2 == "Jacket") {
    // If both conditions are true
    console.log("You have got a discount of 45%");
  } else if (item1 == "Bag" || item2 == "Jacket") {
    // If any of the condition is true
    console.log("You have got a discount of 20%");
  }
  console.log("You are purchasing via credit card");
} else {
  console.log("You are not purchasing through Credit card");
}

// Multiple or mixed AND, OR and NOT
const isEmailLogged = true;
const isGoogleLogged = true;
const isAuthentic = true;

if ((isEmailLogged || isGoogleLogged) && isAuthentic) {
  /* (isEmailLogged || isGoogleLogged), encapsulating in () sets presedence of operation, then it checks
  the result with '&& isAuthentic'*/
  console.log("You are logged In and you have authenticated");
} else if ((isEmailLogged || isGoogleLogged) && !isAuthentic) {
  console.log("You are logged In! But you have to authenticate");
}

/*Nullish Coalescing Operator (??) : null undefined
In some case, like establishing connection with database, there are usually more than 1 responses. In those
case, we have to check wether there is a null/undefined response or there is some other response. Based on
the response, further logic is developed. So there comes ?? operator*/
let value = 5 ?? 10; // in case no values is undefined or null, value on left side of ?? will be assigned
console.log(value); // Output: 5
value = null ?? 5;
console.log(value); // Output: 5. it will skip the null, and assign 5 to value
value = undefined ?? 10;
console.log(value); // similarly it will skip undefined and assign 10 to value

/* In case of three coalescense values, if first value value is null, then the value immediatly on it's 
other side will be assigned */
value = null ?? 9 ?? 15; // 9 is immediatly after null, so it will be assigned to value
console.log(value);

/* Terniary Operator
It is shorter syntax of 'if else'. You write your condition followed by a ? then there comes the code to
execute if that codition is true followed by : then there comes code in case condition is not satisfied.

condition ? true (code to execute if condition is met) : false (code to execute if codition is not satisfied) */

const number = 10;
number === 10 ? console.log("Number is 10") : console.log("Number is not 10");
