/* As we know, there are two major execution contexts, GEC and FEC. GEC presists in call stack at the very
bottom which means it will be available throughout the execution of code. FECs get created and get stacked
in and out of the call stack in LIFO order.
To refer the current context, 'this' keyword comes handy. If we write 'this' in GEC of browser console,
it will give window object because GEC in browser refers to windows object, and in case of Node.js, it will
give empty object. If we write 'this' in a function, it will refer to that function's FEC.

What if we write 'this' keyword in a function where we are calling another function, and that called
function is at top of the call stack, where will 'this' refer? Let's create this scenerio and find out.*/

// SetProductPrice is a constructor which sets price
function SetProductPrice(price) {
  this.price = price;
}
// AddProduct sets name, quantity and price. But in setting price, it calls SetProductPrice.
function AddProduct(name, quantity, price) {
  this.name = name;
  this.quantity = quantity;
  SetProductPrice(price);
}
//let's add a product with AddProduct, on paper, everything should fine
const milk = new AddProduct("Pure Milk", "1 Liter", "300");
console.log(milk); // Output: AddProduct { name: 'Pure Milk', quantity: '1 Liter' }
// milk is created but price is missing, reason to that is SetProductPrice is not being called internally
// to call SetProductPrice in AddProduct, we have to use "call()" method
// so following code method will utilize call method and everything will work fine
function SetUsername(username) {
  this.username = username;
}
function CreateUser(username, email, password) {
  SetUsername.call(this, username); // in call, first parameter 'this' refers to FEC of CreateUser
  this.email = email;
  this.password = password;
}
const user1 = new CreateUser("Raza", "raza@talk.com", "14112");
console.log(user1); // Output: CreateUser {username: 'Raza',email: 'raza@talk.com',password: '14112'}
