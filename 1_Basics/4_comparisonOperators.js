/* Comparison Operators are used for comparing two or more values
== , > , < , >= ,<= , != are some of the comaprison operators, they usually return values in true
or false*/

//Compraison Operators in Numbers
console.log(2 > 1); // 2 'greater than' 1 is true
console.log(4 < 2); // 4 'less than' 2 is false
console.log(2 >= 2, 2 <= 2); // 2 is >= 'greater than and equal to' and <= 'less than and equal to' 2 is true
console.log(5 == 5); // 5 is equal to 5, true
console.log(5 === 5); // 5 is strictly equal to (with same data type) 5, true
console.log(5 != 4); //5 is 'not equal to' 4, true

//Comparison Operators in Strings

console.log("A" > "a");
/* A is greater than a, false, because "A" and "a" will be converted 
to their respective ASCII codes (ASCII value of 'a' is 97 and of 'A' is '65') and then 
the value of their ASCII codes will be compared*/
console.log("A quick brown fox" <= "A kuicq nobrw xof");
/* similarly ASII codes of two strings of same lengths will be compared (space has it's own ASCII code)
and the result of above operation will be false*/
console.log("A quick brown fox jumps" < "A quick brown fox jumps ");
/* Now both strings have same values but the second one has an extra space at end, so statement
is true */

//Comparison Operators in Booleans
console.log(true != false); // result is true
console.log(true > true); // result is false
console.log(true > false); // result is true, because true = 1 and false = 0
console.log(true + true > true); // true = 1, true + true = 1+1 = 2

//Comparison Operators in case of two different data types
console.log("2" > 1); // result is true, because JS will convert string "2" into number 2
console.log(null == 0); // false, because null denotes an empty object where 0 is a value
console.log(null >= 0); // true, null is converted into which somehow greater and equal to 0
console.log(typeof null, Number(null)); // typeof null is Object, null is converted into 0
console.log(null == undefined); // true, because they are loosly equal,
console.log(null === undefined); //false, because they are not strictly equal
