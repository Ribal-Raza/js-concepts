/**
 * @fileoverview Objects in Javascript
 */

// In JavaScript, objects can be seen as a collection of properties.
// object properties are collection of key-value pairs.
// There are two ways to define object.
// singleton
// Object.create();
// object literals
const jsUser = {
  name: "Developer",
  skills: ["JS", "Python", "Frontend", "Backend"],
};
// in jsUser object, name and skills are keys
// keys are by default of string type.
// and value can of any data type

// acessing object propertise
// dot notation
console.log(`Value with key "name" is: ${jsUser.name}`);
// bracket notation, the key should be in quotes
console.log(`Value with key "skills" is: ${jsUser["skills"]}`);
// both dot and bracket notation are correct
// Sometimes you have no choice but to go with bracket notation
const user = {
  name: "Developer",
  "full Name": "Full Stack Developer",
  isLoggedIn: false,
  loginHistory: ["Monday", "Friday"],
};
console.log(`Value with key "skills" is: ${user.name}`);
console.log(`Value with key "full Name" is: ${user["full Name"]}`); // here you can't access like user.full name

// Symbol data type can also be defined in object as keys
const mySym = Symbol("key1");
const myObj = {
  operatingSystem: "Windows",
  mySym: "key1", // this is the wrong approach
};
console.log(myObj.mySym, typeof myObj.mySym); // Output: myKye1 string
// this way would be able to see value on console, but data type will not be Symbol anymore
// so correct way is
const myObj2 = {
  operatingSystem: "Windows",
  [mySym]: "myKey1",
};
// Acessing a symbol type is through bracket notation
console.log(myObj2); // Output: key1 symbol

// changing value of object properties
user.name = "Software Developer";
console.log(user);

// freezing an object so no changes can be made to object further
Object.freeze(user);
user["full Name"] = "Backend Developer"; // no changes will be made
console.log(user);

// We can add function to the object
const user2 = {
  name: "Developer",
  "full Name": "Full Stack Developer",
  isLoggedIn: false,
  loginHistory: ["Monday", "Friday"],
};
user2.greeting = function () {
  console.log("Hello User");
};
console.log(user2);
console.log(user2.greeting()); // It will print the result of greeting() and an undefined

// Nested objects
const appUser = {
  name: {
    fullName: {
      firstName: "Full Stack",
      lastName: "Developer",
    },
  },
  isLoggedIn: false,
  email: "developer@app.com",
};
// We can access the nested properties with dot notation
console.log(`First name of App user: ${appUser.name.fullName.firstName}`);
// optional chaining
// when working with APIs, we encounter many instances where we have to access nested
// properties. In that case, we use optional chaining, which is a short-hand syntax for
// if else
console.log(`Last name of App use: ${appUser.name?.fullName.lastName}`);
// appUser.name?.fullName.lastName, here we are checking if fullName property exists

// merging objects
const obj1 = {
  1: "A",
  2: "B",
  3: "C",
};
const obj2 = {
  4: "D",
  5: "E",
  6: "F",
};
// const obj3 = { obj1, obj2 }; //This approach is not valid,
// as it will create obj3 with nested obj1 and obj2
// const obj3 = obj1 + obj2; // This method is also not valid as it will return
// [object Object][object Object]
// Because using the '+' operator on objects, JS will try to convert objects to primitive
// values like strings. JS will call 'toString()' method to convert both operands into
// string. And toString(obj1 OR obj2) result in [object Object] which is generic object.
// So the solution is to use Object.assign() method
const obj3 = Object.assign({}, obj1, obj2);
// in Object.assign() method, the first argument is target object and rest are source objects.
// In this target, all other source objects will merge.
// So it's good to put an empty object as target.
// Otherwise you can also do like this:
const obj4 = Object.assign(obj1, obj2); // In this case, source objects will merge into obj1
console.log(obj3, "\n", obj4);
// Output will be same merged objects

// More modren and ES standards way to merge two objects is to use spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// When working with APIs that fetch data from databases, the data is often
// stored as array of objects. For example
const myAppUsers = [
  {
    id: 1,
    name: "David",
    email: "david@app.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@app.com",
  },
  {
    id: 3,
    name: "Peter",
    email: "peter@app.com",
  },
];
// SO in such cases, for example to access a user
// First you would access that user's object in array with standard array bracket notation
// and then access the property of that object using dot or bracket notation
console.log(myAppUsers[1]["name"]);
console.log(myAppUsers[0].email);

// Object functions / methods / properties
const dish = {
  id: "123",
  name: "Pizza",
  price: 100,
  ingredients: ["cheese", "tomato", "sauce"],
};
// Extracting all keys of an object
const keysOfDishObject = Object.keys(dish); // returns array of keys
console.log(`Keys of dish object:`, keysOfDishObject);
// Extracting all values of an object
const valuesOfDishObject = Object.values(dish); // returns array of values
console.log(`Values of dish object:`, valuesOfDishObject);
// Extracting all key-value pairs of an object
const entriesOfDishObject = Object.entries(dish); // returns array of key-value pairs
console.log(`Entries of dish object:`, entriesOfDishObject); // each key-value will have it's own array
// Checking if a property exists in an object
console.log(`Is "name" property in dish object?`, dish.hasOwnProperty("name")); // true
//A newer and safer method to check if a property exists in an object
console.log(
  `Is "nutri-score" property in dish object?`,
  Object.hasOwn(dish, "nutri-score")
);

// Object Destructuring in JS and JSON API
const course = {
  name: "JS Foundations",
  timeDuration: "5 Hours",
  skillLevel: "Beginner",
};
// Now often you would want to use any property of course object like
console.log(`Level:`, course.skillLevel); // this method is completely fine
// but if you want to use this property at many place, then writing course.skillLevel
// can be time consuming. So there is an alternate short syntax
const { skillLevel } = course; // this is destructuring
console.log(`Level:`, skillLevel);
// Also we can change the name of the property for our use like
const { timeDuration: duration } = course;
console.log(`Duration:`, duration);

// +++++++++++++ JSON APIs +++++++++++++
// JSON = JavaScript Object Notation, is a lightweight, text-based data-interchange format.
// Most modern back-end services serialize their responses in JSON so front-end apps
// can easily parse and use the data.
// API = Application Programming Interface — a formal set of rules and tools.
// It lets different software components or services communicate with one another.

// If you goto https://api.github.com/users/user-name, you will find the github details
// of that user in JSON format. Like {"login": "Ribal-Raza", "id": 1111,....}

// Sometimes you get API response in JSON but it contains an array which contains objects
// Like if you goto https://randomuser.me/api/, you will get data in
// {[....],info:{...}}, so important information is in that array.
