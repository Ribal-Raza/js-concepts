const code = ["javascript", "python", "rust", "java", "c++", "php"];

// foreach loop
// it is a functional or higher order loop. It takes a callback function as an argument which does iterations
code.forEach((item) => console.log(item));

// We can also define the callback function somewhere else and pass it's reference in foreach
// function printItem(item) {
//   console.log(item);
// }
// code.forEach(printItem);

/* item/element is not the only parameter in callback function of for...each loop, it also comes with the
index and whole array */
code.forEach((item, index, arr) => {
  console.log(`${index}: ${item}:  ${arr}`);
});

// using for...each with arrays of objects
const books = [
  { language: "French", bookName: "Les Misérables" },
  { language: "English", bookName: "Nineteen Eighty-Four" },
  { language: "Urdu", bookName: "Deewan-e-Ghalib" },
];

books.forEach((item) => {
  console.log(`"${item.bookName}" is in ${item.language} language.`);
});

// Now, there is a scenerio. If we want to store the result of for...each for future use, can we do it?
// let's check
// const bookNames = books.forEach((item) => {
//   console.log(`"${item.bookName}" is in ${item.language} language.`);
//   return item.bookName; // returning book name so maybe it could get stored in bookName variable.
// });
// console.log(bookNames); // result is 'undefined'. This is because foreach doesnot not return

// to tackle this scenerio, we can write extra code to push elements in some variable
const bookNames = [];
books.forEach((item) => {
  bookNames.push(item.bookName);
});
console.log(bookNames);
