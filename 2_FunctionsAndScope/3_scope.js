/* Scope in JavaScript refers to the accessibility or visibility of variables and functions within a 
specific portion of code. It determines where a variable or function is declared and from where it 
can be accessed. 
There are two main types of scope in JavaScript:
Global Scope: Variables declared outside of any function have global scope, meaning they
are accessible from anywhere within the program.
Local scope is a more general term that can refer to both function scope and block scope. It simply 
means that a variable or function is only accessible from within a specific portion of code. */

// Global Scope
// The varibales defined outside any block or functions can be accessed anywhere in code
let aGloble = 10;
const bGloble = 20;
var cGloble = 30;
console.log(aGloble);
console.log(bGloble);
console.log(cGloble);

//Local Scope
// Variables defined in a function or block of code can only be accessed within that func or block
function scope() {
  let aLocal = 10;
  const bLocal = 20;
  return aLocal + bLocal;
}
// now I can't access aLocal or bLocal outside function scope()
// console.log(aLocal); It will give error saying "aLocal is not defined"
//similarly for block scope
if (true) {
  let aBlock = 10;
  const bBlock = 20;
  const result = aBlock + bBlock;
  console.log(result);
}
// console.log(bBlock); It will give error saying "bBlock is not defined"

// problem with 'var'
if (aGloble == 10) {
  let ABlock = 100;
  const BBlock = 200;
  var CBlock = 300;
}
/* we know that a locally defined variable can't be accesed outside that local scope, so we can't
access ABlock and BBlock outside, but CBlock can be accessed outside, beacuse we used 'var' to
define it, and 'var' automatically makes variable CBlock global*/
// console.log(CBlock); It will print value of CBlock, means CBlock can be accessed outside
/* this leads to many problems, for example if a variable 'Price = 100' is defined with 'var' keyword
in a module, a developer imports that code in his/her project, and by chance he/she defines variable 
Price in his project again, it's value will be overwritten by imported module because it already has
Price as 'var' in it. So it is strictly recommended to not declare a variable with 'var'.*/

// varible defined in global scope is accessable in local scopes, for example
let Price = 350;
function priceString() {
  return console.log(`This item's price is ${Price}`);
}
priceString(); // Output: This item's price is 350

/* If we define a variable with same name in global and local scope, the global varibale's value will
remain same globally but locally the variable's value will be according to locally defined variable*/
const myName = "Raza";
function printName() {
  const myName = "hamid";
  return console.log(myName);
}

printName(); // will print myName according to local name value
console.log(myName); // will print myName according to global myName value
