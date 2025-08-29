/** Inheritance with classes
 * `extends` wires a prototype chain: instance lookup climbs Child → Parent → Object → null.
 * In subclass constructors, super(...) must run before you use this.
 * Overriding lets a child replace a parent method; super.method() calls the parent’s version.
 * static fields/methods live on the class (constructor),
 * not on instances, and are inherited along the constructor chain.
 */
// Base class
class Vehicle {
  // Static = class-level data/utilities (shared by all instances)
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
class Truck extends Vehicle {
  // (Static fields live on the class; this shadows Vehicle.types for Truck)
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

// Subclass ElectricTruck → multilevel inheritance (Vehicle → Truck → ElectricTruck)
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

// --- Try it ---
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
