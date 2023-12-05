/* Loops in JavaScript are control flow statements that allow to execute a block of code repeatedly until a 
specified condition is met. They are useful for iterating over a sequence of data or performing repetitive 
tasks. Loops are often called iterations. */

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
/* the above for loop prints the value of varibale 'i' ('i' and any other varibale initialized inside the
scope of 'for' loop is not accessible outside).
Above for loop works like:
1- initializes the varible 'i' and assign it value of 1. (This step only occurs once in 1st iteration)
2- checks the condition (i <= 5) wether value of i is less than or equal to 5.
3- If result of condition is true, it Prints the value of 'i'
4- Increments the value of i by 1.
5- Repeats itself by going through steps 2, 3, and 4.
6- If the condition's result is false, breaks the loop*/

// Adding 'if else' inside for loop
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log(`${i} is the best`);
  } else {
    console.log(i);
  }
}

// Nested for loops
for (let i = 0; i < 5; i++) {
  console.log(`Outer Loop Number ${i + 1}`);
  for (let j = 0; j < 5; j++) {
    console.log(`    Inner Loop number ${j + 1}`);
  }
}
/* In above example, we know that outer loop will iterate 5 times, on each iteration the inner for loop will
also execute and it will execute 5 times. So the total times inner for loop will execute is
number_of_iterations_of_outer_loop * number_of_iterations_of_inner_loop => 5*5 = 25 times*/

// for loops with arrays
/* As we know, each element in array is assigned an index (starting from 0). So through for loops we can 
iterate over these indexes of array items and access the elements against those indexes*/
const myArray = ["a", "b", "c", "d", "f", "g", "h", "i"];
/* we know a property from arrays '.length' which returns the total number of elements in an array. 
We can use this property in conditional satement of 'for' loops*/
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// break and continue
/* 'break' key words breaks the loop even if there are some iterations left*/
const items = ["bag", "jacket", "pant", "shirt", "glasses", "sunscreen"];
for (let i = 0; i <= items.length; i++) {
  if (items[i] === "shirt") {
    console.log("shirt detected");
    break;
  }
  console.log(items[i]);
}
// when the value of 'i' will reach at the index where "shirt" is present in "items" array, loop will break

/* 'continue' statement is kind of a warning. It does not break the code*/
for (let i = 0; i <= items.length; i++) {
  if (items[i] === "shirt") {
    console.log("shirt detected");
    continue;
  }
  console.log(items[i]);
}
