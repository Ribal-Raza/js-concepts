## Object-Oriented Programming (OOP)

Object-oriented programming (OOP) is a programming paradigm that organizes code around objects, which encapsulate data (properties) and behavior (methods). OOP focuses on creating modular and reusable code by modeling real-world objects and relationships between them.

**Objects in OOP**

An object is a fundamental unit of OOP that represents a real-world entity. It encapsulates data, also known as properties, and behavior, also known as methods. Objects can interact with each other by sending and receiving messages, which are method invocations.

**Object Literals**

Object literals are a concise way to create objects in JavaScript. They use curly braces (`{}`) to define key-value pairs, where the keys represent property names and the values represent property values.

```
const person = {
  name: 'John Doe',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

```

### Classes

Classes are blueprints for creating objects. They define the properties and methods that all objects created from that class will have. Classes provide a structured and organized way to create objects with similar characteristics.

- Classes were introduced in ECMAScript 2015 (ES6) as a formal way to define object prototypes. However, JavaScript's prototype-based inheritance model has allowed for object creation using constructor functions for much longer.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

### Constructor Functions

In object-oriented programming (OOP), a constructor function is a special type of function that is responsible for creating and initializing objects of a class. It is typically named the same as the class itself and is called using the `new` keyword. The constructor function receives arguments that are used to set the initial values of the object's properties.

Within a class, the constructor function plays a crucial role in defining the object's initial state and behavior. It allows you to customize the object creation process and ensure that each object has the necessary properties and methods properly initialized.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 32);

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

```

In this example, the `Person` class defines a constructor function that takes two arguments: `name` and `age`. This constructor function is responsible for initializing the `name` and `age` properties of the newly created objects. The `greet()` method is a class method that can be accessed by any instance of the `Person` class.

Constructor functions are essential for creating objects that share common characteristics and behavior. They provide a structured and organized way to initialize objects and ensure that they have the necessary properties and methods properly defined.

### Prototypes

A prototype is a concept in JavaScript that describes an object that serves as a blueprint for other objects. These blueprint objects, or prototypes, contain properties and methods that are then inherited by the objects they serve as prototypes for. This inheritance mechanism allows for code reuse and promotes consistency among related objects.

**Creating Prototypes**

Prototypes can be created using various methods, including:

1.  **Object Literals:** Object literals can be assigned as prototypes using the `__proto__` property.

```
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person1 = {
  name: 'Alice',
  age: 25,
};

Object.setPrototypeOf(person1, personPrototype);

person1.greet(); // Output: Hello, my name is Alice

```

2. **Classes:** Classes automatically create prototypes for objects they instantiate.
   Example:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 32);

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob
```

3. **With Constructor Functions:** Contructor functions are responsible for creating and
   initializing objects, or just passing values to object automatically.

   ```
   function Product(name, price) {
   this.name = name;
   this.price = price;
   }
   Product.prototype.incrementPriceBy1 = function () {
   this.price++;
   };
   Product.prototype.printProductDetails = function () {
   console.log(`${this.name}'s price is: ${this.price} Rs.`);
   };
   const product1 = new Product("KetchUp", 100);
   const product2 = new Product("Chocolate", 40);
   product1.printProductDetails();
   product2.incrementPriceBy1();
   product2.printProductDetails();
   ```

**Inheritance:** When an object inherits from a prototype, it gains access to all the properties and methods defined on the prototype. This inheritance mechanism allows new objects to reuse existing code and avoid duplication.

### Instances

An instance is an object that is created from a prototype or class. It represents a specific entity or data structure in the program. Instances inherit properties and methods from their prototypes, but they can also have their own unique properties and methods.

**Creating Instances**

Instances are created using the `new` keyword followed by the name of the constructor function or class.

JavaScript

```
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 32);

```

- **The 'this' Keyword**
  The `this` keyword refers to the current object within the context of a method. It allows you to access the object's properties and methods from within the method itself.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

```

## Four Pillers of OOP

### Abstraction

Abstraction is the process of hiding the inner workings of an object and exposing only its essential features to the user. This allows the user to interact with the object without understanding its internal complexity. Abstraction promotes code modularity and simplifies the interaction between different components of the program.

**Types of Abstraction:**

1. **Data Abstraction:** Hiding the implementation details of data and exposing only its essential characteristics, such as its type, value, and operations.
2. **Control Abstraction:** Hiding the control flow of a process and exposing only its input and output parameters, simplifying the interaction with the process.
3. **Interface Abstraction:** Defining a set of methods and properties that an object must implement, providing a unified interface for different implementations.

### Encapsulation

Encapsulation is the process of combining data and methods related to an object into a single unit, known as a class. This bundling of data and methods protects the object's internal state from external interference and ensures that the object's data is accessed and modified only through its defined methods. Encapsulation promotes data integrity and modularity.

```
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getName() {
      return this.name;
    }

    getAge() {
      return this.age;
    }

    setName(newName) {
      this.name = newName;
    }

    setAge(newAge) {
      this.age = newAge;
    }
  }

  const person1 = new Person('Alice', 25);
  person1.getName(); // Output: Alice
  person1.getAge(); // Output: 25
  person1.setName('Bob'); // Set name to 'Bob'
  person1.setAge(32); // Set age to 32
  person1.getName(); // Output: Bob
  person1.getAge(); // Output: 32
```

In this example, the `Person` class encapsulates the `name` and `age` properties and provides methods to access and modify them. This encapsulation protects the object's internal state from direct external access and ensures that the data is managed in a controlled manner.

Object-oriented programming (OOP) is a programming paradigm that organizes code around objects, which encapsulate data (properties) and behavior (methods). OOP focuses on creating modular and reusable code by modeling real-world objects and relationships between them. The four pillars of OOP are abstraction, encapsulation, inheritance, and polymorphism. These concepts work together to provide a structured and organized approach to software development.

**Abstraction**

Abstraction is the process of hiding the inner workings of an object and exposing only its essential features to the user. This allows the user to interact with the object without understanding its internal complexity. Abstraction promotes code modularity and simplifies the interaction between different components of the program.

**Types of Abstraction:**

1.  **Data Abstraction:** Hiding the implementation details of data and exposing only its essential characteristics, such as its type, value, and operations.
2.  **Control Abstraction:** Hiding the control flow of a process and exposing only its input and output parameters, simplifying the interaction with the process.
3.  **Interface Abstraction:** Defining a set of methods and properties that an object must implement, providing a unified interface for different implementations.

**Encapsulation**

Encapsulation is the process of combining data and methods related to an object into a single unit, known as a class. This bundling of data and methods protects the object's internal state from external interference and ensures that the object's data is accessed and modified only through its defined methods. Encapsulation promotes data integrity and modularity.

**Example of Encapsulation:**

JavaScript

```

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

getName() {
return this.name;
}

getAge() {
return this.age;
}

setName(newName) {
this.name = newName;
}

setAge(newAge) {
this.age = newAge;
}
}

const person1 = new Person('Alice', 25);
person1.getName(); // Output: Alice
person1.getAge(); // Output: 25
person1.setName('Bob'); // Set name to 'Bob'
person1.setAge(32); // Set age to 32
person1.getName(); // Output: Bob
person1.getAge(); // Output: 32

```

In this example, the `Person` class encapsulates the `name` and `age` properties and provides methods to access and modify them. This encapsulation protects the object's internal state from direct external access and ensures that the data is managed in a controlled manner.

### Inheritance

Inheritance is the ability of a class to inherit properties and methods from another class. This allows for code reuse and promotes the creation of hierarchical relationships between classes. Inheritance enables you to extend existing code and create new classes with shared characteristics.

**Types of Inheritance:**

1.  **Single Inheritance:** A class inherits from a single parent class.
2.  **Multiple Inheritance:** A class inherits from multiple parent classes. (Not directly supported in JavaScript but can be simulated using various techniques)
3.  **Multilevel Inheritance:** A class inherits from another class, which in turn inherits from another class, creating a chain of inheritance.

**Example of Inheritance:**

```

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
console.log(`Hello, my name is ${this.name}`);
}
}

class Employee extends Person {
constructor(name, age, jobTitle) {
super(name, age); // Use 'super' to call the parent constructor
this.jobTitle = jobTitle;
}

introduce() {
console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}.`);
}
}

const employee1 = new Employee('Alice', 25, 'Software Engineer');
employee1.greet(); // Output: Hello, my name is Alice
employee1.introduce(); // Output: Hello, my name is Alice and I am a Software Engineer.

```

In this example, the `Employee` class inherits from the `Person` class, gaining access to its properties and methods. The `Employee` class extends the `Person` class by adding its own `jobTitle` property and `introduce()` method. This inheritance allows for code reuse and the creation of specific classes that share common characteristics with their parent classes.

### Polymorphism

Polymorphism is the ability of objects to respond to the same method call but in different ways based on their unique characteristics. This allows for flexible and dynamic programming, enabling objects to perform different actions while sharing the same interface.

**Types of Polymorphism:**

1.  **Overloading:** Multiple methods with the same name but different parameter lists.
2.  **Overriding:** Methods with the same name and parameter lists in different classes, where the subclass's method overrides the parent class's method.
3.  **Operator Overloading:** Customizing the behavior of operators for specific datatypes or objects.

**Example of Polymorphism:**

```

class Animal {
makeSound() {
console.log('Generic animal sound');
}
}

class Dog extends Animal {
makeSound() {
console.log('Woof! Woof!');
}
}

class Cat extends Animal {
makeSound() {
console.log('Meow! Meow!');
}
}

const dog1 = new Dog();
const cat1 = new Cat();

dog1.makeSound(); // Output: Woof! Woof!
cat1.makeSound(); // Output: Meow! Meow!

```

## Getters and Setters

Getters and setters are special methods that allow you to control how properties are accessed and modified in JavaScript classes. They provide a way to encapsulate data and enforce specific behavior when interacting with those properties.

**Getters**
Getters are methods that are called when a property is accessed. They allow you to retrieve the value of a property, but they can also perform additional logic before returning the value. For instance, you can use a getter to format or transform the value before returning it.

**Setters**
Setters are methods that are called when a property is assigned a new value. They allow you to validate or modify the value before it is stored in the property. For example, you can use a setter to ensure that a property has a specific format or range of values.

**Benefits of Getters and Setters**

- **Encapsulation:** Getters and setters promote encapsulation by hiding the internal implementation of properties and ensuring that only authorized operations can be performed on them.
- **Data Validation:** Setters provide a convenient way to validate and sanitize user input before it is stored in the property, preventing invalid data from entering the application.
- **Derived Properties:** Getters can be used to calculate or transform values based on other properties or data, providing a more dynamic and flexible approach to property access.
- **Custom Access Logic:** Getters and setters can be used to implement custom access logic, such as logging property access, performing side effects, or enforcing specific permissions.

**Restrictions of Getters and Setters**

- **Naming Conventions:** Getters and setters must follow specific naming conventions. Getters start with the keyword `get` followed by the property name, while setters start with `set` followed by the property name.
- **No Parameters:** Getters cannot have any parameters, while setters can only have one parameter, which represents the new value being assigned to the property.
- **Return Value:** Getters must return a value, while setters do not return any value.
- **Getter and Setter of a property should both be defined:** It is not possible that you can only define Getter of a function and skip the Setter, both must be defined.

**Real-Life Examples of Getter and Setter Usage**

2.  **User Input Validation:** In a user registration form, you can use a setter to validate the user's email address before storing it in the `email` property. The setter can check for a valid email format and throw an error if the format is invalid.
3.  **Calculated Properties:** In a geometry class, you can use a getter to calculate the area of a rectangle based on the `width` and `height` properties. The getter can perform the calculation and return the area whenever the `area` property is accessed.
4.  **Data Transformation:** In a data management application, you can use a getter to transform data retrieved from a database before presenting it to the user. The getter can format dates, convert currencies, or perform other transformations.
5.  **Access Permissions:** In a secure application, you can use getters and setters to control access to sensitive data. Getters can check user permissions before returning data, and setters can restrict which users can modify certain properties.
