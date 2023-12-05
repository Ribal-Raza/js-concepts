/* Everything in javascript is treated as an object. Whether we define a varibale of data type number, 
string, array, object litteral, and boolean OR we create a function, everything is treated as an object
behind the scenes. That's the reason we can use methods like map(), foreach(), filter(), toUpperCase(),
etc on different data types varibales directly.
As everything is treated as object, so we need prototypes to inject properties/methods in those objects.
*/

//In following constructor function, we are passing price and name of a product to an object
function Product(name, price) {
  this.name = name;
  this.price = price;
}

/* now to inject different properties/methods in this constructor function which returns an object, we use
prototype. We just define a function and with dot notation, we can access the prototype, and by again using
dot notation we can write any function or methode*/
Product.prototype.incrementPriceBy1 = function () {
  this.price++;
};
Product.prototype.printProductDetails = function () {
  console.log(`${this.name}'s price is: ${this.price} Rs.`);
};

// now we can easily create objects of Product with 'new' keyword and we can also access prototype methods
const product1 = new Product("KetchUp", 100);
const product2 = new Product("Chocolate", 40);
product1.printProductDetails();
product2.incrementPriceBy1();
product2.printProductDetails();

/* Function is a function but also an object. Same is the case with all variables and data types in JS.
So everything has a prototype and we can inject different values and methods in it. */

//Let's start with a simple example of adding a function in an object
let myProduct = {
  id: 202,
  title: "Supreme Cooking Ghee",
  quantity: "1 Liter",
  price: 300,
  getProductDetails: function () {
    console.log(
      `${this.title}\nQuantity: ${this.quantity}\nPrice: ${this.price} Rs.`
    );
  },
};
//now I want to add show price function to myProduct object, I can simply use dot notation
myProduct.showPrice = function () {
  console.log(`Price is ${this.price}`);
};
myProduct.showPrice();

// but I want to add a function so whenever I create an object, I don't have to add it manually
// to do this, we have to goto top level so all the upcoming object can inherit
Object.prototype.showContents = function () {
  console.log("Here are contents:", this);
};

const myProduct2 = {
  id: 201,
  title: "Pure Milk",
  quantity: "1 Liter",
  price: 160,
  getProductDetails: function () {
    console.log(
      `${this.title}\nQuantity: ${this.quantity}\nPrice: ${this.price} Rs.`
    );
  },
};
// as I have injected showContents() at top level, I can access it in myProduct2 or any other object
myProduct2.showContents();

// as we know everything is an object, I can access showContents() in any other variable of any datatype
const products = ["Ghee", "Milk", "Chocolate"];
products.showContents();

// Interesting thing would be to check if I inject a function in top level Array with prototype, can I access it other datatypes? Let's find out
Array.prototype.greetings = function () {
  console.log(`Hello! Greetings`);
};
// it is clear that now I can access greeting() with any array
products.greetings();
// but I can't access greetings with any other data type varibale like myProduct2.greetings();

// So let's understand the inheritence with prototypes
// let's suppose we have multiple objects, to share the properties between objects, we use __proto__

const user = {
  id: 1099,
  name: "Raza",
  age: "24",
};
const userStatus = {
  isLoggedIn: true,
  isOnline: true,
  __proto__: user,
};
const userSupport = {
  assignment: "Prototypes",
  isStuck: true,
  __proto__: userStatus,
};
// so userStatus object has inherited the properties of user, and so userStatus has eventually inherited properties of userStatus and user, it means userSupport can access info or methods of user and userStatus
// to access isLoggedIn with userSupport, we can use dot notation and write userSupport.__proto__.isLoggedIn
console.log(userSupport.__proto__.isLoggedIn);
console.log(userSupport.__proto__.__proto__.id);

// we can also assign proto outside the object body
let use = {
  isInUse: true,
  condition: "Good",
};
use.__proto__ = user;
console.log(use.__proto__.name);

/*but this __proto__ is outdated syntax, instead today we have setPrototypeOf() function which takes two 
parameter, first parameter is the child object which will inherit the properties and second is the parent*/
let courses = {
  course1: "DOM Manipulation",
  course2: "Javascript",
  course3: "React",
};
Object.setPrototypeOf(user, courses); // now user has access to courses
console.log(user.course1);
