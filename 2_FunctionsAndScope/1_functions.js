/* Functions are basically reusable blocks of code. Instead of writing same code logic again and
again, we can place the code logic in a function and simply call that function 
 For example I need to print my name 3 times, I can write 3 console logs
console.log("Ribal");
console.log("Ribal");
console.log("Ribal");
What if I had to print my name 10 or 20 times, it would be time taking, so we can make function
function myName() {
  console.log("Ribal");
}; function declaration
Now I can call function as many times as I want and it will print the name
myName();
myName();
myName(); 
Here one thing we need to remember is writing myName only will be considered as a reference to the
function but writing myName() means the function will execute*/

// We can pass parameters in the function to get dynamic results instead of hard-coded/static result
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// on function call, we have to pass 2 parameters in the function so result can be returned
addTwoNumbers(4, 7);
// but can we save result of addTwoNumbers in a variable, lets see
const addition = addTwoNumbers(2, 3); // at this line addTwoNumbers() will excute and print result
console.log(addition); // but the result of addTwoNumbers() will not be saved in addition
// use of return statement is the solution of above problem
function valueOfAddition(num1, num2) {
  return num1 + num2;
}
const result = valueOfAddition(4, 5);
console.log("Result ", result);

// expressions, assigning a function to a varibale is often called an expression.
const greet = function () {
  console.log("Hello Ladies and gentlemen");
};
greet();

// giving default value to parameter in case the values of parameters are undefined
function greeting(name = "UnKnown") {
  return console.log(`Hello ${name}!`);
}
greeting("Raza");
greeting();

// Adding as many parameters as needed. In some cases, we are not sure how many parameters the function will recieve, so we can use Rest operator
function addItemsToCart(...params) {
  return params; // it will return values of all paramters in an array
}
console.log(addItemsToCart("bag", "chocolate", "jacket"));

// question
function showNumbers(num1, num2, ...nums) {
  return nums;
}
console.log(showNumbers(200, 300, 400, 500, 600)); // output: [400, 500, 600], why is that?
/* in function showNumbers, first two passed numbers will be assign to num1 and num2, while rest of
them will be assigned to ...nums, and as showNumbers() returns nums only, show output will be rest 
of the values*/
