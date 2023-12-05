## 1- Functions in javascript

- Functions are reusable blocks of code that perform specific tasks.
- They eliminate repetition and improve code readability and maintainability.

**Function Declaration**

- Function declaration involves using the `function` keyword followed by the function name, parentheses, and curly braces.
- Parameters, if any, are listed within the parentheses.
- The function body is enclosed in curly braces.

```
function myName() {
  console.log("Ribal");
};
```

**Function Call**

- To execute a function, call it by its name followed by parentheses.
- Arguments, if any, are passed within the parentheses.

```
myName(); // Outputs "Ribal" three times
```

**Parameters**

- Parameters are placeholder values that receive actual values when the function is called.
- Parameters allow functions to be dynamic and reusable for different inputs.

```
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
```

**Return Statement**

- The `return` statement specifies the value that the function sends back to the caller.
- The function execution stops upon encountering a `return` statement.

```
function valueOfAddition(num1, num2) {
  return num1 + num2;
}

```

**Function Expressions**

- Function expressions assign a function to a variable.
- They are defined using an anonymous function syntax: `const greet = function () {...};`
- Function expressions are often used in callbacks and higher-order functions.

```
const greet = function () {
  console.log("Hello Ladies and gentlemen");
};
```

**Default Parameter Values**

- Default parameter values provide fallback values when no arguments are passed.
- They enhance code flexibility and reduce the need for conditional checks.

```
function greeting(name = "UnKnown") {
  return console.log(`Hello ${name}!`);
}
```

**Rest Operator**

- The rest operator (`...`) gathers an indefinite number of arguments into an array.
- It allows functions to handle varying numbers of parameters without prior knowledge.

```
function addItemsToCart(...params) {
  return params; // It will return values of all parameters in an array
}
console.log(addItemsToCart("bag", "chocolate", "jacket"));
```

**Spread Operator**

- The spread operator (`...`) expands an iterable (array, string, etc.) into individual elements.
- It is commonly used to pass array elements as separate arguments to functions.

```
function showNumbers(num1, num2, ...nums) {
  return nums;
}
console.log(showNumbers(200, 300, 400, 500, 600)); // Outputs: [400, 500, 600]
```

In the `showNumbers` function, the rest operator (`...nums`) gathers the remaining arguments (400, 500, 600) into an array `nums`. Since the function returns `nums`, the output is only those values.

## 2- Functions with Objects and Arrays

**Passing Objects as Function Parameters**

- Objects can be passed as parameters to functions, allowing them to access and manipulate object properties.
- The function can use the dot notation to access object properties.

```
const myObject = {
  myName: "Ribal Raza",
  myAge: 24,
};
function greetings(anyObject) {
  return console.log(
    `Hello ${anyObject.myName}! You are ${anyObject.myAge} years old.`
  );
}
greetings(myObject); // Output: Hello Ribal Raza! You are 24 years old.

```

**Destructuring in Function Parameters**

- Destructuring allows extracting specific properties from an object directly within the function parameter list.
- The extracted properties become variables within the function scope.

```
function greetings2({ myName, myAge }) {
  return console.log(`Hello ${myName}! You are ${myAge} years old.`);
}
greetings2(myObject); // Output: Hello Ribal Raza! You are 24 years old.

```

**Passing Arrays as Function Parameters**

- Arrays can be passed as parameters to functions, allowing them to access and manipulate array elements.
- The function can use bracket notation to access array elements.

```
const numbersArray = [0, 1, 2, 3, 4];
function showthirdNumber(anyArray) {
  return anyArray[2];
}
console.log(showthirdNumber(numbersArray)); // Output: 2

```

**Directly Passing Objects and Arrays as Parameters**

- Objects and arrays can be directly passed as parameters to functions without storing them in variables first.
- This simplifies the code and reduces the need for unnecessary variable declarations.

```
console.log(showthirdNumber([10, 20, 30, 40, 50])); // Output: 30
```

## 3- Scope in JavaScript

- Scope determines the accessibility or visibility of variables and functions within a specific portion of code.
- It defines where a variable or function can be accessed from.
- There are two main types of scope in JavaScript: global scope and local scope.

**Global Scope**

- Variables declared outside of any function or block have global scope.
- They are accessible from anywhere within the program.

```
let aGloble = 10;
const bGloble = 20;
var cGloble = 30;
console.log(aGloble); // Outputs: 10
console.log(bGloble); // Outputs: 20
console.log(cGloble); // Outputs: 30

```

**Local Scope**

- Variables declared within a function or block of code can only be accessed from within that function or block.

```
function scope() {
  let aLocal = 10;
  const bLocal = 20;
  return aLocal + bLocal;
}
// aLocal and bLocal are not accessible outside the scope function

```

**Block Scope**

- Variables declared within curly braces (`{}`) have block scope.
- They are only accessible within the block where they are defined.

```
if (true) {
  let aBlock = 10;
  const bBlock = 20;
  const result = aBlock + bBlock;
  console.log(result); // Outputs: 30
}
// aBlock and bBlock are not accessible outside the block

```

**Issues with Using `var`**

- The `var` keyword automatically makes variables global, even when declared within a function or block.
- This can lead to unintended consequences and variable reassignment.

```
if (aGloble == 10) {
  let ABlock = 100;
  const BBlock = 200;
  var CBlock = 300; // CBlock is accessible outside the block due to 'var'
}
console.log(CBlock); // Outputs: 300

```

**Global Variables in Local Scope**

- Variables defined in global scope are accessible within local scopes.

```
let Price = 350;
function priceString() {
  return console.log(`This item's price is ${Price}`); // Outputs: This item's price is 350
}

```

**Variable Shadowing**

- If a variable with the same name exists in both global and local scope, the local variable takes precedence within its scope.

```
const myName = "Raza"; // Global variable
function printName() {
  const myName = "hamid"; // Local variable
  return console.log(myName); // Outputs: hamid
}
printName();
console.log(myName); // Outputs: Raza (Global variable)

```

**Recommendations**

- Avoid using the `var` keyword and instead use `let` or `const`.
- Use descriptive variable names to avoid confusion.
- Be mindful of scope when declaring and accessing variables.

## 4- Nested Scope and Hoisting

**Nested Scopes**

- Nested scopes are scopes that are contained within other scopes.
- Child scopes (functions or blocks) can access variables defined in their parent level scopes.
- Parent level scopes cannot access variables from their child scopes.

**Hoisting in JavaScript**

- Hoisting is a JavaScript mechanism that moves variable and function declarations to the top of their scope.
- This means that the function or variable declaration is treated as if it were declared at the top of the scope, even though it's actually declared later in the code.

**Explanation of Hoisting Behavior**

- Hoisting only affects the declaration of functions and variables, not their assignment.
- Function expressions (functions stored in variables) are not hoisted, and they must be initialized before they can be used.

**Impact of Hoisting**

- Hoisting can make code more readable and easier to understand.
- However, it can also lead to unexpected behavior if not used carefully.

**Recommendations**

- It is generally considered good practice to declare all variables and functions at the top of their scope, regardless of hoisting.
- This helps to avoid confusion and ensures that variables and functions are accessible from where they are needed.

## 5- 'this' keyword and Arrow Functions

**`this` Keyword:** The `this` keyword in JavaScript refers to the current context of the code execution. It changes depending on how the code is called.

- **In objects:** Within an object method, `this` refers to the object itself.
- **In regular functions:** In a regular function, `this` refers to the global object, which is the `window` object in browsers and the global `Node.js` object in Node.js environments.

### Arrow Functions

Arrow functions are a concise way of writing functions introduced in ES6. They are defined using the `=>` symbol, followed by the function parameters and the function body.

**Lexical `this`:**
Arrow functions do not have their own `this` binding. Instead, they inherit the `this` binding from their surrounding scope.

**Implicit Return**
In arrow functions, if the function body consists of a single expression, that expression is implicitly returned without the need for an explicit `return` statement.

**Returning Objects**
When returning objects using implicit return, the object literal must be enclosed in parentheses to avoid parsing ambiguity.

**Parameter Handling**
Arrow functions can handle multiple parameters similarly to regular functions. For a single parameter, parentheses can be omitted.

**Arrow Functions vs. Regular Functions:**
Arrow functions are generally preferred for simpler, concise functions, while regular functions are more suitable for more complex scenarios involving `this`, constructors, or generators.

## 6- Immediately Invoked Function Expressions (IIFEs)

IIFEs are functions that are executed immediately after they are defined. They are enclosed in two sets of parentheses. The first set of parentheses defines the function, and the second set of parentheses executes the function immediately.

**Purpose**

- IIFEs are often used to encapsulate code and prevent variable pollution in the global scope.
- They are also useful for initializing code or performing actions immediately upon application startup.

**IIFEs with Regular Functions:** Regular functions can be used to create IIFEs by enclosing them in parentheses and adding an additional set of parentheses to execute the function immediately.

**Syntax** `(function() { // Function code }())();`

**IIFEs with Arrow Functions:** Arrow functions can also be used to create IIFEs. The syntax is similar to regular functions, but the arrow function notation is used instead of the `function` keyword.

**Syntax** `(() => { // Function code })();`

**Passing Parameters to IIFEs:** Parameters can be passed to IIFEs by enclosing them in the second set of parentheses, after the function body.

**Syntax**
`((parameter1, parameter2) => { // Function code })(parameterValue1, parameterValue2);`

**Benefits of IIFEs:**

- **Encapsulation:** IIFEs help encapsulate code and prevent variable pollution in the global scope.
- **Initialization:** IIFEs can be used to initialize code or perform actions immediately upon application startup.
- **Data Privacy:** IIFEs can protect sensitive data by limiting its scope to within the function.

**Considerations when using IIFEs:**

- **Readability:** IIFEs can make code less readable, so it's important to use them judiciously and provide clear comments.
- **Debugging:** Debugging IIFEs can be more challenging due to their immediate execution and enclosed scope.

**Choosing between IIFEs and Regular Functions:**

- **IIFEs:** Use IIFEs when you need immediate execution, encapsulation, or data privacy.
- **Regular Functions:** Use regular functions when you need more control over the function's scope or when readability is a primary concern.
