/* map is also an array method, higher order or functional loop. It does the same thing as for...each
but it's plus point is that it returns the values */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const updatedNums = array.map((num) => num + 1);
console.log(updatedNums); // map will automatically return values in array, and assigns them to variable

// chaining different methods

const newNums = array.map((num) => num * 10).map((num) => num + 1);
console.log(newNums);
/* in above code, we chained two map functions, now it will work like:
1- First map will iterate over elements of array and multiply them with 10 and store them in array.
2- second map will add 1 in each element of array returned by first map.*/

const newNums2 = array.map((num) => num + 5).filter((num) => num % 2 == 0);
console.log(newNums2);
/* in above code, we chained a map functions with a filter, now it will work like:
1- map will iterate over elements of array and add 5 to them, and store them in array.
2- then filter will iterate over all elements of the array returned by map and check each element
according to given condition, the elements satisfying them condition will get stored in newNum2 vairable.*/
