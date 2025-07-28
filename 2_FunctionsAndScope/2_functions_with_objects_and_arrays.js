/**
 * @fileoverview Functions With Objects and Arrays
 */

// In some cases when you don't know how many paramters will a would get
// in those cases, you use can use rest operator in function parameter
// rest operator packs all the arguments
function calculatePrice(...items) {
  return items;
}
console.log(calculatePrice(100, 200, 300, 400, 500)); // Output: [ 100, 200, 300, 400, 500 ]

// sometimes you want a few parameters specifically, and rest of the parameters as a whole
// for example, you want name of a shop, and location of shop, and then
// list of all the dishes it has
function showShop(shopName, shopLocation, ...dishes) {
  return `${shopName} is located at ${shopLocation} and has ${dishes}`;
}
console.log(
  showShop(
    "Burgers",
    "Town",
    "Hamburger",
    "Grilled Burger",
    "Zinger Burger",
    "Beef Burger"
  )
);

// Function with array
const newArray = [300, 200, 4000, 1550];
function getThirdValue(arr) {
  return arr[2];
}
console.log(getThirdValue(newArray)); // Output: 4000

// Function with objects
const burger = {
  name: "Grilled Chicken Burger",
  price: 200,
  category: "Fast Food",
};

function dishDetails(dishObj) {
  return `${dishObj.name} is a ${dishObj.category} dish. It's price is ${dishObj.price}.`;
}
console.log(dishDetails(burger)); // Output: Grilled Chicken Burger is a Fast Food dish
console.log(
  dishDetails({ name: "Margherita Pizza", price: 300, category: "Fast Food" })
);
