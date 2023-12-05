// Sometimes, we dont want the childern classes or objects to access specific properties
// In that case we can use 'static' keyword.
// static prohibts the access of props with any other object which instanctiates from that class.
// For example there is a method which creates a new ID, we don't want other objects to access this prop
class Product {
  constructor(title) {
    this.title = title;
  }
  printMe() {
    return `Product Name is: ${this.title}`;
  }
  static createID() {
    return `01`;
  }
}

class Oil extends Product {
  constructor(title, price, quantity) {
    super(title);
    this.price = price;
    this.quantity = quantity;
  }
  printOil() {
    return `Product Name: ${this.title} \nQuantity: ${this.quantity} \nPrice ${this.price} Rs.`;
  }
  // I can access printMe() method from Product class but I can't access createID() because it is private
}

const product1 = new Product("Chocolate"); // I can access all props of Product class except createID
console.log(product1.printMe());
// console.log(product1.createID()); // Output: TypeError: product1.createID is not a function
// similarly with an instance of Oil Class, I can access all props of Product class except createID
const oliveOil = new Oil("Olive Oil", 600, "500mL");
console.log(oliveOil.printMe());
console.log(oliveOil.printOil());
// console.log(oliveOil.createID()); // Output: TypeError: product1.createID is not a function
