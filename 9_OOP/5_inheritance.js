/** Inheritance with classes
 * Inheritance = reuse + extension.
 * If an object/class doesn’t have a property, JS looks up its parent.
 * Why use inheritance?
 * To avoid duplication, share behavior, and specialize children while keeping a common base.
 * How inheritance works (class syntax):
 * - `class Child extends Parent` wires a prototype chain for instances and a static chain for classes.
 * - Instance lookup: instance → Child.prototype → Parent.prototype → Object.prototype → null.
 * - `super(...)` in a subclass constructor must run before `this` is used (initializes the Parent part).
 * - Overriding: child methods can replace parent methods; `super.method()` calls the parent version.
 */
// Base class
class Vehicle {
  /**`static` members live on the class (constructor) itself, not on instances.
   * Use `static` for class-wide data/utilities (e.g., counters, registries, factories).
   * Statics participate in the class (constructor) chain:
   * `Object.getPrototypeOf(Truck) === Vehicle`, so statics can be inherited or shadowed.
   */
  static nextId = 1;
  static types = ["vehicle"]; // describes this class; subclasses may shadow this

  constructor(name) {
    // Centralize ID assignment here so every subclass gets exactly one ID
    this.id = Vehicle.nextId++;
    this.name = name;
  }

  // Instance method (lives on Vehicle.prototype)
  info() {
    return `Vehicle Name: ${this.name} (#${this.id})`;
  }
}

// Subclass Truck → single inheritance
/** `extends` links Truck to Vehicle so instances of Truck delegate to
 * Vehicle.prototype when needed.
 * `super(name)` calls Vehicle’s constructor to initialize the Vehicle part before Truck uses `this`.
 * In overrides, `super.info()` calls the parent method so you can compose child behavior on top.
 */
class Truck extends Vehicle {
  static types = ["vehicle", "truck"];

  constructor(name, capacityKg) {
    super(name); // initialize Vehicle part first
    this.capacityKg = capacityKg;
  }

  // Override: reuse parent’s message and add Truck-specific details
  info() {
    return `${super.info()} | Capacity: ${this.capacityKg} kg`;
  }
}

/** Multilevel inheritance: Vehicle → Truck → ElectricTruck.
 * Method lookup now climbs
 * ElectricTruck.prototype → Truck.prototype → Vehicle.prototype → Object.prototype → null.
 */
class ElectricTruck extends Truck {
  // (We could also add static types here if we want to describe this class)
  // static types = ["vehicle", "truck", "electric-truck"];

  constructor(name, capacityKg, kWh) {
    super(name, capacityKg); // parent (Truck) sets base fields; Vehicle already set id
    this.kWh = kWh; // note: no extra id assignment here
  }

  // Override again and compose with Truck’s info (which already composes Vehicle’s info)
  info() {
    return `${super.info()} | kWh: ${this.kWh}`;
  }

  // Simple instance method (business logic demo)
  rangeKm() {
    return this.kWh * 3;
  }
}
/** Why no `call` here?
 * - Class constructors are `new`-only; you can’t invoke them like regular functions to set `this`.
 * - In subclasses, the correct way to initialize the parent is `super(...)`, not `Parent.call(this, ...)`.
 * - Also, `this` is uninitialized in a subclass until `super(...)` runs—hence `super` must come first.
 */

const vehicle1 = new Vehicle("Scooter");
const vehicle2 = new Truck("Boxer", 2000);
const vehicle3 = new ElectricTruck("Volta", 3000, 150);

// IDs are now sequential across the whole hierarchy
console.log(`IDs: ${vehicle1.id}, ${vehicle2.id}, ${vehicle3.id}`);
// e.g., "IDs: 1, 2, 3"

console.log(vehicle1.info()); // Vehicle Name: Scooter (#1)
console.log(vehicle2.info()); // Vehicle Name: Boxer (#2) | Capacity: 2000 kg
console.log(vehicle3.info()); // Vehicle Name: Volta (#3) | Capacity: 3000 kg | kWh: 150
console.log(`Range: ${vehicle3.rangeKm()}`); // Range: 450

// Static vs instance: statics live on the class, not on instances
console.log(Vehicle.types); // ["vehicle"]
console.log(Truck.types); // ["vehicle","truck"] (shadowed)
console.log(ElectricTruck.types); // undefined unless you define it on ElectricTruck
console.log(vehicle3.types); // undefined (instances don’t get statics)

// Behind the scenes (prototype chains)
// console.log(Object.getPrototypeOf(Truck.prototype) === Vehicle.prototype); // true
// console.log(Object.getPrototypeOf(Truck) === Vehicle); // true
/** Types of inheritance (in JS class terms):
 * - Single: one parent per class (supported) → `class Truck extends Vehicle {}`.
 * - Multilevel: chains of parents (supported) → `Vehicle → Truck → ElectricTruck`.
 * - Hierarchical: multiple children share one parent (supported) → `Vehicle → (Truck, Car, Bike)`.
 * - Multiple inheritance (one child extends multiple parents): not supported by default in JS classes.
 * Why want it? To combine behaviors from multiple sources.
 * Typical solution: composition/mixins
 * (e.g., Object.assign(Child.prototype, mixinMethods) or function-based mixin wrappers).
 */
