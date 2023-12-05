/* In ES6 (EcmaScript version 6 in 2015), many standards and features of writing JS code were 
introduced. Arrow functions was one of them. Arrow function is a standard way of writing functions. 
'this' keyword tells about current context.*/

// use of 'this' in objects
const user = {
  userName: "Ribal",
  price: 250,
  welcomeMessage: function () {
    console.log(`${this.userName}! Welcome to our platform`);
    /* here this.userName refers to the current context. It means that according to context of
    current object, we are accessing it's userName.*/
    console.log(this); // it will simply print the current context
  },
};
user.welcomeMessage(); // It will print the message with userName defined in the object
// What if some one change the value of userName outside object
user.userName = "Raza";
user.welcomeMessage(); // now it will print the according to updated context
console.log(this); // it will print updated context

/* But what if there was only one line of code in this file 'console.log(this)', what would be the
result of execution. It would depend on following conditions
1- In case, we run it in Node.js, output will be an empty object, which is global object.
2- In case we run it in a browser console, output will be 'windows' object, because global context
in browser is 'windows'*/

// 'this' in a function
function one() {
  const userName = "Ribal";
  console.log(this);
  console.log(userName);
  //console.log(this.userName); It will cause an error because 'this' is used in object
}
one(); // it will print an object with information about Node.js global Object, the reason is context.

// Arrow function, it removes the usage of 'function' keyword and replace it with ' () => '
const two = () => {
  let userName = "Ali";
  console.log(userName);
  console.log(this); // unlike regular functions, it will print empty object
};
two();

// Arrow function with params
const addTwoNumbers1 = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNumbers1(4, 7));
// when there is only 1 line of code with 'return' inside function body, it can be written as
const addTwoNumbers2 = (num1, num2) => num1 + num2; // It is called implicit return
console.log(addTwoNumbers2(4, 7));

/* In impilicit return functions, we can also wrap the return values in () which will work fine 
just like this const addTwoNumbers3 = (num1, num2) => (num1 + num2)*/

// Implicit return functions in case of returning objects
const showObject = () => ({ myName: "Ribal", myAge: 24 });
console.log(showObject());
