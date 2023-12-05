class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  /* 
  So we can get and set properties of a class by using constructor by default. But in case if there is a
  need to encapsulate the data, we can define custom getter and setter by 'get' and 'set' keywords. 
  There are few things to rember while using getters and setters
  1- Both getter and setter of a property should be defined, only setter or getter will not work.
  2- Contructor is already setting the properties, and one can get values from the constructor. But if
  getter and setter are setting the property with same name as in constructor, it will result in Size error 
  because call stack will be filled with infinite race between constructor and getter/setter.
  For example in following getters and setter, this.password will result in call stack error, so we are
  defining a new property this._password (using _ with same property name for getter and setter is a good
  naming convetion)
  3- Getter function returns some value and accepts no parameter
  4- Setter function doesnot return any value and accepts only 1 parameter
  5- The varibale in getter and setter (in our case _password) is a kind of private property but currently
  it is accessible (as of 6 December 2023). But some developers have proposed JS team to include '#' instead
  of '_' for getter/setter property and make it fully private.
  Now the good thing about getter and setter as we discussed early, the original value of password will
  bet set or stored as it is, but whenever someone will try to access the password, they will see a 
  different value because of getter function
  */
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const user1 = new User("Tom", "tom@block.com", "hello");
console.log(user1.password);
console.log(user1._password);

// As we know, behind the scenes prototypel behviour is responsible for classes.
// So without classes and get set syntax, we can do same thing with prototypes and constructor function
function CreateUser(name, email, password) {
  // naming convention: use '_' before property name with 'this' keyword
  this._name = name;
  this._email = email;
  this._password = password;

  // Object is referencing to current FEC of CreateUser() function
  Object.defineProperty(this, "password", {
    get: function () {
      return `opMil${this._password}PROAI`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const user2 = new CreateUser("Sam", "sam@toblo.com", "998");
console.log(user2.password);

const pie = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(pie);
pie.configurable = true;
pie.writable = true;
pie.enumerable = true;
console.log(pie);
pie.value = 5;
console.log(pie);
