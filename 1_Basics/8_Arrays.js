/**
 * @fileoverview Arrays in Javascript
 */
// Array enables storing a collection of multiple items under single variable
// In JS, array is an Object like any other data structure in JS.
// Arrays in JS can be resizeable (more elements can be added later)
// Arrays in JS can have items of different data types
// Defining an array
const score = [5, 8, 6, 7, 9, 4];
console.log(score); // Output: [ 5, 8, 6, 7, 9, 4 ]
// console.table(score); // console.table gives output in nice table, giving index and value of array
// Another way of defining array
const score2 = new Array(4, 5, 6, 8, 7, 9);
console.log(score2);

// Arrays have zero based indexing
// Which means that the first item will be at 0th position or index
console.log(`First item of score array: ${score[0]}`);
console.log(`First item of score2 array: ${score2[0]}`);

/** Array-copy-operations create a shallow copy. There are two types of copies:
 * Shallow Copy: It's a copy of an object whose propertise share the same reference point as those of the original object.
 * It means that when you change something in a shallow copy, it also causes change in original copy.
 * Deep Copy: It's a copy of an object whose propertise do not share the same reference point as those of the original object.
 * It means that when you change something in a deep copy, it does not cause change in original copy.
 */

// Array Methods
// length of Array
console.log(score.length);
// Appending an item in array
score.push(10); // push() method appends an item at the end of array,
console.log(score); // Output: [ 5, 8, 6, 7, 9, 4, 10 ]
// Removing and item from array
score.pop(); // pop() method removes the last item from array
console.log(score); // Output: [ 5, 8, 6, 7, 9, 4 ]

// Adding an item in start of an Array
score.unshift(1); // unshift() method adds an item at the start of array
console.log(score); // Output: [ 1, 5, 8, 6, 7, 9, 4 ]
// Removing and item from start of an Array
score.shift(); // shift() method removes the first item from array
console.log(score); // Output: [ 5, 8, 6, 7, 9, 4 ]

// Using unshift() and shift() is not a very optimized solution, espacillay working on
// very large arrays. Because it not only appends the item at 0th index, but it also
// moves the indexes of previous values of array.

// Checking arrays, asking questions
console.log(`Does score array includes 8: ${score.includes(8)}`); // true
console.log(`Does score array includes 5: ${score.includes(5)}`); // true
console.log(
  `Does score array includes 6 from index 3: ${score.includes(6, 3)}`
); //false, reason is that we wrote includes(6,3), here 6 is the element, and 3 is telling the include method to search from index 3
console.log(`Is "Javascript" and Array? ${Array.isArray("Javascript")}`); // Output: false

console.log(`Index of element 9 is: ${score.indexOf(9)}`);
console.log(`Index of element 100 is: ${score.indexOf(100)}`); // Output: -1, which means 100 is not part of array, so it's false

// joining array
const myArr1 = [1, 2, 3];
const joinedArray = myArr1.join();
console.log(joinedArray, typeof joinedArray); // Output: 1,2,3 string
const joinedArray2 = myArr1.join("");
console.log(joinedArray2, typeof joinedArray2); // Output: 123 string

// combining array
const myArr2 = [1, 2, 3];
const myArr3 = [4, 5, 6];
const combinedArray = myArr2.concat(myArr3);
console.log(combinedArray, typeof combinedArray); // Output: [ 1, 2, 3, 4, 5, 6 ] object
// but if trying to add arrays
const addedArray = myArr2 + myArr3;
console.log(addedArray, typeof addedArray); // Output: 1,2,34,5,6 string
// multiply strings
const multipliedArray = myArr2 * myArr3;
console.log(multipliedArray, typeof multipliedArray); // Output: NaN number

/** Slice and Splice
 * Array.slice(): Returns a copy of a section of an array.
 * Array.splice(): Removes elements from an array and, if necessary, inserts new elements in their place.
 * slice() Returns the deleted elements.
 * In short, slice does not modifies the original array, where splice modifies the original array.
 */
const myArray = [1, 2, 3, 4, 5, 6];
console.log("A ", myArray); // Checkpoint A, Output: [ 1, 2, 3, 4, 5, 6 ]
const slicedArray = myArray.slice(2, 4);
console.log("Sliced Array: ", slicedArray); // Output: Sliced Array:  [ 3, 4 ]
console.log("B ", myArray); // Checpoint B, Output: [ 1, 2, 3, 4, 5, 6 ]
// splice expects startIndex, deleteCount. In additions to these two parameters, more can be provided too.
const splicedArray = myArray.splice(2, 4); // Starting from Index 2, delete 4 elements
console.log("Spliced Array: ", splicedArray); // Output: [ 3, 4, 5, 6]
console.log("C ", myArray); // Checkpoint C, Output: [1, 2]

// Adding elements in array with splice
const splicedArray2 = myArray.splice(2, 0, 3, 4, 5, 6); // Starting from index 2, delete 0 elements and add 3,4,5,6
console.log("Spliced Array: ", splicedArray2); // Output: []
console.log("D ", myArray);

// +++++++ More on Arrays ++++++++++
// previously we added and concatinated two arrays and stored them in variables
// let's say we push or concatinate two arrays but without storing them in variable
const marvelHeros = ["Iron Man", "Captain America", "Doctor Strange"];
const dcHeros = ["Batman", "Superman", "Doctor Fate"];
marvelHeros.push(dcHeros);
console.log(marvelHeros, typeof marvelHeros); // Output: [ 'Iron Man', 'Captain America', 'Doctor Strange', [ 'Batman', 'Superman', 'Doctor Fate' ] ] object
// So we ran into a problem. push() method didn't added the elements of dcHeros to marvelHeros
// It added the dcHeros as array in the marvelHeros. So now marvel heros has it's previous
// three elements, and at fourth, it has an array of dc heros
// now let's try concat
const marvelHeros2 = ["Iron Man", "Captain America", "Doctor Strange"];
const allHeros = marvelHeros2.concat(dcHeros);
console.log(allHeros, typeof allHeros); // Output: [ 'Iron Man', 'Captain America', 'Doctor Strange', 'Batman', 'Superman', 'Doctor Fate' ] object

// So unlike push(), which modifies the original array, concat() does not modify any original array.
// It properly combines two array and returns a new one.

// A more newer way to merge arrays is "Spread operator"
const allHeros2 = [...marvelHeros2, ...dcHeros];
console.log(allHeros2, typeof allHeros2); // Output: [ 'Iron Man', 'Captain America', 'Doctor Strange', 'Batman', 'Superman', 'Doctor Fate' ] object

// Multi dimensional Arrays
// 2D Array - Array of arrays - It contains multiple arrays inside it down to depth 2
const multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArray);
// So let's try accessing 2D array elements
console.log(multiArray[0][2]); // Output: 3

// 3D Array - Array of arrays of arrays - It contains multiple 2D arrays inside it
const multiArray2 = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
];
console.log(multiArray2);
// Accessing 3D array elements
console.log(multiArray2[1][2][0]); // Output: 16

// And sometimes their are a bit complex kind of multi-dimensional arrays
const multiArrayComplex = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, 9, [10, 11], 12, [13, [14, 15]]],
  16,
];
console.log(multiArrayComplex);
// These kinds of complex arrays can be converted to simple 1D array with flat() method
const multiArraySimplified = multiArrayComplex.flat(3); // flat(3) means it will flatten the array down to depth 3
console.log(multiArraySimplified);

// but if there a multi-D array with unknown depth or very complex depth, like:
const multiArrayComplex2 = [
  1,
  2,
  [3, [4, [5, 6, [7, [8, 9, [10, 11], 13], 14], 15], 12]],
  16,
  [17, [18, 19, 20], [21, [22, 23, [24, [25]]]]],
];
// in this case we can pass Inifinity to flat() method
const multiArraySimplified2 = multiArrayComplex2.flat(Infinity);
console.log(multiArraySimplified2);

// Checking if a data type is array
const language = "Python";
console.log(`Is "${language}" an array? ${Array.isArray(language)}`);
// converting string to array
const languageArray = Array.from(language);
console.log(languageArray, typeof languageArray);

// converting object to array
const obj1 = {
  name: "Developer",
  skills: ["JS", "Python", "Frontend", "Backend"],
};
console.log(Array.from(obj1)); // Output: []
// Array.from() could not convert obj1 to array because obj1 have key and value pairs.
// So we have specifically make array of keys or values
console.log(Array.from(Object.keys(obj1))); // Output: [ 'name', 'skills' ]
console.log(Array.from(Object.values(obj1))); // Output: [ 'Developer', [ 'JS', 'Python', 'Frontend', 'Backend' ] ]

// Now let's say we have some variables
let weight1 = 70;
let weight2 = 60;
let weight3 = 90;
let weightArray = Array.of(weight1, weight2, weight3);
console.log(weightArray, typeof weightArray);

// So main difference between Array.from() and Array.of() is
// Array.from() method creates a new array from an iterable object
// Array.of() method creates a new array of a set of values
