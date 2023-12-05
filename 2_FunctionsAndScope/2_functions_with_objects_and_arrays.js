// passing Objects as parameters in Functions
const myObject = {
  myName: "Ribal Raza",
  myAge: 24,
};
function greetings(anyObject) {
  return console.log(
    `Hello ${anyObject.myName}! You are ${anyObject.myAge} years old.`
  );
}
/*we can give any name to the object in parameter but we have to make sure that the key value 
should be correct according to the object our function will recieve as parameter*/
greetings(myObject);
// we can also directly pass the object in parameter instead of storing it in varibale
greetings({ myName: "Ali Raza", myAge: 25 });

// We can use destructuring to pass keys directly
function greetings2({ myName, myAge }) {
  return console.log(`Hello ${myName}! You are ${myAge} years old.`);
}
greetings(myObject); // the function will destructure myObject and take myName, myAge from it

// passing arrays as parameters in Functions
const numbersArray = [0, 1, 2, 3, 4];
function showthirdNumber(anyArray) {
  return anyArray[2];
}
console.log(showthirdNumber(numbersArray));

// similarly we can directly pass array in parameter
console.log(showthirdNumber([10, 20, 20, 40, 50]));
