// 'for of' loop. It is kind of more 'array-specific' loop
const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
  console.log(item);
}

// for of on strings
const greetings = "Hello freind";
for (const character of greetings) {
  if (character === " ") {
    continue;
  } // It will skip printing of any space
  console.log(character);
}

// for of loop on array with objects
const response = [
  { id: 1, name: "John" },
  { id: 2, name: "Gustavo" },
  { id: 3, name: "Gerald" },
];

for (const item of response) {
  console.log(item.id, item.name);
  /* we can directly access object's key-value pairs with iterator and 
  dot notation*/
}

/* one thing to remember, if we have an object like:
const myObject = {id: 1, name:"Raza", age: 24, isLoggedIn: true}
we can't iterate over objects like these using for...of loop*/

// for...of loop with Map
const map = new Map();
map.set(1, "Lahore");
map.set(2, "Karachi");
map.set(3, "Islamabad");
console.log(map);

for (const key of map) {
  console.log(key);
} // This for...of loop will print arrays, and each array will hold each key-value pair in Map

/* to print only keys or only values from Map, we can destructure the iterator. We know that using one 
iterator will print array consisting of key-value pairs, if we destructure the iterator and add another
iterator, then 1st iterator will hold keys and second iterator will hold values*/
for (const [key, value] of map) {
  console.log(key); // will only print key
  console.log(value); // will only print value
}
