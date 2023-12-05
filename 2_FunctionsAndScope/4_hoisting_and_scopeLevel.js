/* In Nested Scopes, child scopes (functions or blocks) can acesses the variables defined in their
parent level scopes, but parent level scopes can't access variables from their child scopes*/

//nested scopes of functions
function first() {
  const myName = "Ribal";
  function second() {
    const platForm = "Social Media";
    console.log(myName); // Acessing myName which is higher level scope to function second()
  }
  second(); // calling second() in first()
  // console.log(platForm); Acessing plaFrom which is in local scope of platform, this will cause error
}
first();
//Calling first() in global scope, it will print myName, with an error while accessing Platform

// nested scopes of Blocks
if (true) {
  const userName = "Ribal Raza";
  if (userName === "Ribal Raza") {
    const website = "Youtube";
    console.log(userName);
  }
  /* console.log(website); website is defined in nested 'if' block, and if we try to access it in
  parent block, it will give error*/
}

// Concept of Hoisting in JS

// here is a simple function declaration
// It is possible to call the function addOne() before it's declaration syntax
console.log(addOne(7)); // It will work fine, even though addOne() is called before it's declaration
function addOne(num) {
  return num + 1;
}

//here is a function stored in a variable i.e. expression
// addTwo() can't be called before it's initiallization, because it is an expression
// console.log(addTwo(8)); it will give ReferenceError "Cannot access 'addTwo' before initialization"
const addTwo = function (num) {
  return num + 2;
};
