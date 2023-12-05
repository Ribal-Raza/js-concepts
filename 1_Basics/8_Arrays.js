// declaration of arrays
let array = [0, 1, 2, 3, 4, 5]; //collection of elements, either of same data type or different
let array2 = new Array(0, 1, 2, 3, 4, 5); // another explicit way of declaring arrays

// Array Methods
array.push(6, 7, 8); // push method pushes an element or elements at the end of array
array.pop(); // removes last element of the array
array.unshift(6, 99, 52); // adds the given element or elements in start of array (in large arrays, unshift method is not optimal because it will cause the assigning of new indexes to all other elements )
array.shift(); // removes first element from array (still not optimal in case of large arrays)
console.log(array);
console.log(array.includes(9)); // checks the presence of specified element. returns 'true' or 'false'
console.log(array.indexOf(99), array.indexOf(13)); // returns the index, if not present then returns -1
const array3 = array.join(); // joins the array with array3 varibale, but it will convert result in string
console.log(array3, typeof array3);
console.log(array.slice(1, 5)); // slice returns a new array from given starting index to the element before ending index
console.log(array.splice(1, 5)); // splice returns a new array which has values from specified starting index and includes ending index. In doing so, splice changes the orginal array, because it removes the values in specified range, add them to a new array and returns them

/* Sometimes the array methods of arrays doesnot go as planned, reason is that they are misunderstood.
following scenerio is here */
const items = [1, 2, 3, 4];
const items2 = [5, 6, 7];
/* Output of Pushing items2 array in items array is usually predicted as [1, 2, 3, 4, 5, 6, 7].
But the push method will not do so, it will push item2 array as an element in items array and output
would be [1, 2, 3, 4, [5, 6, 7]]*/
// items.push(items2);
// console.log(items);
// The better approach is to concat both arrays and store it in a new varibale
// const items3 = items.concat(items2);
// console.log(items3);
// But there is a more better and new approach using spread operators
const items3 = [...items, ...items2]; // "...items" spreads the each element of array
console.log(items3);

// Accessing each element of array
console.log(items3[0], items3[4]);
/* Sometimes we come across 2D or 3D arrays */
const two_Dimensional_Array = [1, 2, 3, [4, 5]]; // 2D array, nested array
console.log(two_Dimensional_Array[3][1]); // we have an array in the array at 3rd index, and we want to see its 2nd element
const three_dimensional_Array = [1, 2, 3, [4, 5, [6, 7, 8]]]; //3D array
console.log(three_dimensional_Array[3][2][2]); // simply keep on extending chain as we did in 2D array

// If we want to get rid of these nested arrays and want to see a simple 1D array
const simpleArray = two_Dimensional_Array.flat();
// flat method converts nested arrays of depth 1 to 1D plain array.
console.log(simpleArray);
//if we want to convert 3D or 4D... arrays to 1D array, we can specify the depth of flatness
const simple3DArray = three_dimensional_Array.flat(2);
console.log(simple3DArray);
// In case we don't know the depth of multi-dimensional/nested arrays, we can specify Infinity
const complexArray = [
  1,
  2,
  [3, 4],
  5,
  6,
  [7, 8, [9, 10]],
  11,
  12,
  [13, 14, [15, 16, [17, 18, 19]]],
];
const complexTosimpleArray = complexArray.flat(Infinity);
console.log(complexTosimpleArray);

// converting a string to array
const sameString = "Hello";
console.log(Array.isArray(sameString)); // will return false
const stringToArray = Array.from(sameString); //converting string to array and storing it in a variable
console.log(stringToArray, Array.isArray(stringToArray)); // now it will be true
