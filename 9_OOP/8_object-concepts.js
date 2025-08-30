// Question: In JS, Math.PI has value 3.141592653589793, can we change it or not?
// If yes, then how?
// Answer to this question gives us more indepth knowledge about objects in JS.
// Let's explore it.

console.log(Math.PI); // 3.141592653589793
// can I override the value of Math.PI by re-assigning it
Math.PI = 4;
console.log(Math.PI); // Same value: 3.141592653589793

// But why is it happening? What's stopping Math.PI to get override or reassign
// To get indepth information on an object, we can use many propertise
// one property is getOwnPropertyDescriptor
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// Output: {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// We can see that, value of Math.PI is 3.141592653589793, but in addition to that,
// we get property descriptors like writeable, enumerable, configurable, which are false
// so that is what stopping us from re-assigning, or overriding Math.PI

// It means if we have our own object, we can also set some property descriptors on them
// and the users won't be able to modify them, let's test it
const product = {
  name: "Shoe Polish",
  price: 30,
  isAvailable: true,
};
console.log(product);

const productDescriptor = Object.getOwnPropertyDescriptor(product, "name");
console.log(productDescriptor);
// Output: { value: 'Shoe Polish', writable: true, enumerable: true, configurable: true }
// Now to disable the descriptors
Object.defineProperty(product, "name", {
  enumerable: false,
  writable: false,
});
// let's test, has it worked

product.name = "New Shoe Polish";
console.log(product.name); // Ouput: Shoe Polish
