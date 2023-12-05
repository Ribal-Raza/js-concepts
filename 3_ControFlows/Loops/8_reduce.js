/* 'reduce' is an interesting higher order or functional loop. From foreach, map and filter methods, we know
that they all have a call back function in which we pass a paramter which work as an indexer. 
reduce has all of that but in addition to that, reduce has an accumulator. With the parameter, we can pass
accumulator. We have to define the initial value of accumulator for first time, then accumulator updates
itself by adding its cuurent value with the value of indexer varibale.*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initial_value = 0;
const sumOfArray = array.reduce(
  (accumulator, currentIndex) => currentIndex + accumulator,
  initial_value
);
console.log(sumOfArray);

// let's break it down further with regular function and console.log at each iteration
const sumOfArray2 = array.reduce(function (accumulator, currentIndex) {
  console.log(
    `Value of accumulator is: ${accumulator}, Current Index is: ${currentIndex}`
  );
  return currentIndex + accumulator;
}, 0);
console.log(sumOfArray2);

// let's use reduce in calculating total bill
const items = [
  { item: "1Kg Suger", price: 150 },
  { item: "1Kg Rice", price: 230 },
  { item: "1/2Kg Daal Moong", price: 130 },
  { item: "250g Tea", price: 270 },
  { item: "250g Laal Mirch", price: 70 },
  { item: "1/2Kg Chicken", price: 350 },
];
const totalBill = items.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);
console.log(`Your Total Bill is: ${totalBill} Rs.`);
