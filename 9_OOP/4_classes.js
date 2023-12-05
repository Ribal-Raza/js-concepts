/* Prototypes, Contructors, Inheretance are major components deep-down/behind the scenes in JS. Classes
are syntactical suger (familier or easy-to-write or clean) introduced in EcmaScript6+. There is no such 
thing as class or classes deep down in JS. 
'class' keyword is available in JS now. We can make classes and their constructors using 'class' keyword.
We can add different properties/methods/functions in classes which is more clean way to write code instead
of prototypes. Every class takes a constructors function which is initialized whenever a new instance of
class is created with 'new' keyword. We can name this constructor function anything but to get less
confused, we use 'constructor' keyword as a name for constructor functions.*/

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  // there is no need to write function keyword in class' function, so it is called method
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.name.toUpperCase()}`;
  }
}

const user1 = new User("Ahmad", "ahmad@jmail.com", "090");
console.log(user1); // user has been created,
console.log(user1.encryptPassword());
console.log(user1.changeUserName());

// All the above code can be achieved by using prototypes and behind the scenes prototypes are used in JS
// so behind the scenes, above code with classes would be working like following:
function CreateUser(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}
CreateUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

CreateUser.prototype.changeUserName = function () {
  return `${this.name.toUpperCase()}`;
};

const user2 = new CreateUser("ahsan", "ahsan@zoit.com", "klok89");
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUserName());
