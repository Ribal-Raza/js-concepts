/**
 * @fileoverview filter method
 */
/** `filter()` Method in JavaScript
 * - A built-in array method used to **create a new array** with only those elements that pass a given test.
 * - Executes a **callback function** once for each element in the array.
 * - Returns a **new array** containing only the elements for which the callback returns `true`.
 * Why it's used:
 * - Ideal for **filtering** arrays based on specific conditions.
 * - More readable and concise than traditional loops for this purpose.
 * - Doesn't modify the original array.
 * Limitations:
 * - Cannot be used to break or exit early — it always runs through all items.
 * - Not available on plain objects (non-array types).
 * Syntax:
 *   array.filter(callback_function);
 * Parameters:
 * - `element`: current item being processed
 * - `index` (optional): index of the current item
 * - `array` (optional): the original array being processed
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers); // output: [ 2, 4, 6, 8, 10 ]
// Same result can be get from for, while, do while and for each loops
let evenArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenArray.push(numbers[i]);
  }
}
console.log(evenArray);

// But for better readability and short syntax, filter method is more preferred

// A better use of filter() method would be in real world scenerio
// where API call return response which is array of objects
// For example, we called an API to fetch books data it returned array which contains objects,
// where each object contains title, genre, publish date, and current edition of a book
const books = [
  { title: "Book One", genre: "Skills", publish: "1998", edition: "2012" },
  { title: "Book Two", genre: "Math", publish: "2000", edition: "2016" },
  { title: "Book Three", genre: "Computing", publish: "2002", edition: "2018" },
  { title: "Book Four", genre: "Skills", publish: "2004", edition: "2020" },
  { title: "Book Five", genre: "Math", publish: "2006", edition: "2022" },
  { title: "Book Six", genre: "Skills", publish: "2008", edition: "2024" },
  { title: "Book Seven", genre: "Computing", publish: "2001", edition: "2006" },
  { title: "Book Eight", genre: "Skills", publish: "2009", edition: "2013" },
  { title: "Book Nine", genre: "Skills", publish: "2005", edition: "2021" },
  { title: "Book Ten", genre: "Computing", publish: "2007", edition: "2023" },
];

const skillsBooks = books.filter((book) => book.genre === "Skills");
console.log("---------- Skill Books ------------");
console.log(skillsBooks);
console.log("---------- Books Published Between 2002 - 2008 ------------");
const specificBooks = books.filter(
  (book) => Number(book.publish) >= 2002 && Number(book.publish) <= 2008
);
console.log(specificBooks);
