/* Object is a collection of key-value pairs, or functions. Object is 'singleton' (it means there wouldbe a single instance of that object) if it is created using constructor Object.create, otherwise
there will be multiple instances and they are called object literals */
const users = {
  user1: "Raza",
  user1Age: 24,
  isUser1Adult: true,
  user2: "Ahmad",
  user2Age: 27,
  isUser2Adult: true,
  user3: "Hamid",
  user3Age: 17,
  isUser3Adult: false,
  user4: "Kashi",
}; // this is an object literal
// key : value, value can of any data type. Key is processed as string in JS

// Ways of Acessing Object's key value pairs
// 1- dot notation, objectName.key
console.log(users.user1, users.user1Age);
// 2- bracket notation, objectName["key"]
console.log(users["user1"], users["user1Age"]);
/* Sometimes the key is written in strings like "user1": "Ribal", in that case we can only be accessed
 user1 with bracket notation */

// Adding symbol in object. We know symbol is a unique data type, follwing is the way to use it as key
const idOfObject = Symbol("id");
const userObject = {
  [idOfObject]: 1, // symbol as key is written in square brackets
  name: "Raza",
  age: 24,
  isLoggedIn: true,
  email: "ribalraza1@gmail.com",
};

// Adding other key value pairs in objects
userObject.loginDays = ["Monday", "Thursday", "Friday"]; // Adding loginDays as key and array of days as value in userObject
console.log(userObject); //it will show updated userObject with login days

// Adding function in Object
userObject.greeting = function () {
  console.log(`Hello`);
};
console.log(userObject); // userObject will be updated with the function
userObject.greeting(); // Acessing function

// Acessing values in function within object
userObject.greeting2 = function () {
  console.log(`Hello ${this.name}`);
}; // 'this' keyword refers to the object in which function is placed
userObject.greeting2();

// declaring singleton objects
const newUser = new Object(); // declaring empty object
newUser.id = 1;
newUser.name = "John";
newUser.age = 20;
console.log(newUser);

// nested objects and acessing key-values from them
const regularObject = {
  id: "01",
  fullName: {
    firstName: "Billy",
    lastName: "Butcher",
  },
  dob: {
    day: "Tuesday",
    date: {
      date: 24,
      month: {
        numberOfMonth: 11,
        nameOfMonth: "November",
      },
    },
  },
  greetings: function () {
    console.log(
      `Hello ${this.fullName.firstName} ${this.fullName.lastName}! Your birthday is ${this.dob.date.date} ${this.dob.date.month.nameOfMonth}`
    );
  },
};
regularObject.greetings();

//combining or merging two objects
const obj1 = { 1: "A", 2: "B", 3: "C" };
const obj2 = { 4: "a", 5: "b", 6: "c" };

const objTest = { obj1, obj2 }; // this will not pull out each key-value of obj1 and obj2 in obj3
console.log(objTest);
const obj3 = Object.assign({}, obj1, obj2); // assign() method will pull all values of obj1 and obj2 and assign them to obj3
console.log(obj3);
// but there is a better way of merging objects using spread operator
const goodObject = { ...obj1, ...obj2 };
console.log(goodObject);

//objects in arrays
const products = [
  { id: 1, product: "Oil" },
  { id: 2, product: "Sugar" },
  { id: 3, product: "Rice" },
];
// to access key-values of objects from an array there is following syntax
console.log(products[1].product); // accessing 2nd object's product from array products

// object methods
console.log(Object.keys(obj3)); // keys() method returns array of keys of specified object
console.log(Object.values(obj3)); // values menthod returns array of values of specified object
console.log(Object.entries(obj3)); // enteries method returns an array with consists of arrays of each key value pair
console.log(obj3.hasOwnProperty("4")); // checks wether specified key is present in object
