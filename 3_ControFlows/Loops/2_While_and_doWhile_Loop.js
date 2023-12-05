/* While Loop is simple. It keeps iterating until the condition defined in it becomes false. It doesnot
supports declaration of an iterator varibale in it's (). We have to declare iterator separatly*/
// while (2 == 2) {console.log("Hello")}
// this while loop is never ending. Because the condition defined in it (2==2) will never be false

// lets write a more sensible while loop
const myItems = ["sugar", "flour", "baking soda", "chocolate", "cream"];
let index = 0;
while (index < myItems.length) {
  console.log(myItems[index]);
  index++; // adding 1 to index value will keep moving the iterations
}

/* Contrary to while loop, do While loop does execute the code block first and then checks the condition
in 'while'. So do while loop will run atleast 1 time even if the condition is false */
let score = 1;
do {
  console.log(score);
  score = score + 2;
} while (score < 10);
