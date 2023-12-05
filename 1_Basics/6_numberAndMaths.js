let counting = 400;
let numCounting = new Number(400); // it explicitly defines the data type of number and make it object
console.log(counting, numCounting);

// converting number to string
console.log(counting.toString(), typeof counting.toString());

// fixing the decimal length of number
console.log(numCounting.toFixed(2)); // it fixes the float value upto 2 indexes, i.e. 400.00

// to convert in precise value
console.log((101.2567).toPrecision(3)); // will return 101 as the precision argument is upto 3
console.log((101.2789).toPrecision(2)); // when precision is applied to numbers before floating point, it will rounf off the number and convert it to exponent

//to convert in exponential form
console.log((101.256789).toExponential(3));

// converting numbers into specified counting style
const oneLakh = 100000;
console.log(oneLakh.toLocaleString("en-IN")); // automatically puts commas to convert 100000 to 1,00,000

// Maths
console.log(Math); // Math is an object, it contains many functions that can be applied on numbers

console.log(Math.abs(-400)); // abs means absolute, it returns absolute/positive value of a number
console.log(Math.round(4.3), Math.round(4.6)); // rounds off the float value and returns a number
console.log(Math.ceil(4.2)); // ceil checks the floating value and if it is higher than 0, it will return the top value, in this case it will return 5
console.log(Math.floor(4.6274)); // it returns the lower value, in this case it returns 4 regardless of floating value
console.log(Math.min(2, 4, 6, 0.2)); // return minimum value from all the given values
console.log(Math.max(2, 4, 6, 8)); // return maximum value from all the given values
console.log(Math.random()); // gives a random number from 0 to 1, like 0, 0.034,0.1, 0.247, ..., 1
console.log(Math.random() * 10 + 1); // value times 10 gives us a number before float and +1 gives us safety in cases like 0.034

// and there are many usefull methods in Math like sqrt(for square root), pow(for power), sin, cos, tan
