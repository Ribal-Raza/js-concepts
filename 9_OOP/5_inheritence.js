class Product {
  constructor(title) {
    this.title = title;
  }
  printMe() {
    console.log(`Product Name is: ${this.title}`);
  }
}

// product is generic/parent class, and we want to create new type of product which inherits Product
class Milk extends Product {
  constructor(title, price, quantity) {
    super(title); // super keyword checks the parent class Product, and then Product class sets title
    this.price = price;
    this.quantity = quantity;
  }

  printMilk() {
    console.log(
      `Product Name: ${this.title} \nQuantity: ${this.quantity} \nPrice ${this.price} Rs.`
    );
  }
}

const milkPoweder = new Milk("Powdered Milk", 300, "1 Kg");
console.log(milkPoweder);
console.log(milkPoweder.printMilk());

const liquidMilk = new Milk("Pure Milk", 120, "1 L");

console.log(liquidMilk.printMilk());
// to check wether an object is instance of a class, we have instanceOf operator which returns boolean value
console.log(milkPoweder instanceof Milk); // Output: true
console.log(liquidMilk instanceof Milk); // Output: true
console.log(liquidMilk === milkPoweder); //Output: false
console.log(Milk instanceof Product); // Output: true, because Milk inherits properties from Product
console.log(liquidMilk instanceof Product); // Output: true, because ultimatly it is instance of Product
