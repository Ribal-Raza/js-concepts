## 1- Basic Javascript Variables

### Variables and Data Types

Variables are used to store data in programs. They have a name, a type, and a value.

- `id`: A constant variable of type `number` with the value `12223`. Constant variables cannot be reassigned.
- `email`: A variable of type `string` with the value `raza@yahoo.net`.
- `password`: A variable of type `string` with the empty value `""`.
- `city`: A variable of type `string` with the value `Multan`.

### Variable Declaration Keywords

JavaScript has three keywords for declaring variables: `var`, `let`, and `const`.

- `var`: The older keyword for declaring variables. It has scope issues and is not recommended to use.
- `let`: The preferred keyword for declaring variables. It has block scope and is more predictable.
- `const`: Declares a constant variable, which cannot be reassigned after initialization.

### Variable Scope

Variables can have global or local scope.

- Global variables are declared outside of any functions and can be accessed from anywhere in the program.
- Local variables are declared inside of functions and can only be accessed from within that function.

### Recommended Practices

- Use `let` instead of `var` for declaring variables.
- Use descriptive variable names.
- Avoid using global variables unless absolutely necessary.

### Additional Notes

- Variables can also be declared without any keyword, but this is a bad practice and can lead to unexpected behavior.
- JavaScript is a dynamically typed language, so variables do not need to be explicitly declared with a type. The type of a variable is determined by the value it holds.

### Primitive Data types

There are 7 primitive data types
a- `String` (in double quotes "" or ``)
b- `Number`(2, 57, 102.73)
c-`Boolean`(true, false)
d-`null`(empty value, it is itself an object)
e-`undefined`(when the value of a variable is not defined)
f-`Symbol`( Symbol() returns a unique value, often used in JS libraries and frameworks)
g-`BigInt` (for larger numbers, 1993456n or BigInt(1993456))

### Reference (Non-primitive) data type:

We can assign reference of these data types in memory
a- `Array:`
contains collection of elements, [1,2,3] or ["a","b","c"] or [true, false] or [1,2,"a",false]
b- `Objects:`
contains key-value pairs for example {id: 1, name: "Raza"} id & name are keys
where 1 and "Raza" are values
c- `Functions:`
functions are block of code designed to perform a specific task or return a result. These are defined as:
function add(){return 1+2;}
OR
const add = () => {return 1+2}

## 2- Stack and Heap memory

In `stack memory`, a copy of the value is assigned to varibale in memory. One can think of stack memory
as blocks placed over each other. When we assign a value to a varible, it is stored in a block of stack memory.
`Primitive data types are stored in Stack Memory.`

In `heap memory`, a reference to the value is assigned to varibale in memory. One can think of heap memory as a departmental store where each department has a reference. When we assign a value to a variable, the value goes into heap memort and a reference to that value is assigned to varibale.
`Reference (Non-Primitive) data types are stored in Heap Memory.`

## 3- JavaScript Data Types

JavaScript is a versatile programming language that supports various data types to represent different kinds of information. Understanding data types is crucial for writing effective JavaScript code.

### Strict Mode

The `use strict` directive instructs the JavaScript engine to interpret code in a stricter manner, preventing certain actions that might lead to unexpected behavior. It's recommended to use `use strict` at the beginning of your JavaScript files to ensure consistent and predictable code execution.

### alert() Function

The `alert()` function displays a pop-up message in the browser window. While it's commonly used for debugging purposes, it's generally not recommended for production code due to its disruptive nature.

### Data Type Inference

JavaScript is dynamically typed, meaning that variables don't need explicit data type declarations. The data type of a variable is inferred from the value assigned to it.

### Primitive Data Types

JavaScript has several primitive data types, including:

- `string`: Represents text or character sequences.

- `number`: Represents numeric values, both integers and decimals.

- `boolean`: Represents logical values, either `true` or `false`.

### BigInt Data Type

The `BigInt` data type is introduced in ECMAScript 2020 to represent integer values that exceed the limits of the `number` type. It's useful for handling large numbers that might arise in certain computations.

### null and undefined Data Types

- `null`: Represents an intentional absence of a value, often used to indicate that a variable is empty or has no value.

- `undefined`: Represents a value that has not been assigned or initialized.

### Symbol Data Type

The `Symbol` data type represents a unique identifier that can be used to reference properties of objects. It's particularly useful for creating private properties that are not accessible from outside the object.

### Object Data Type

The `object` data type is a collection of key-value pairs or functions. It's used to organize and store structured data, enabling the representation of complex information in JavaScript programs.

### typeof Operator

The `typeof` operator returns the data type of a value. It's useful for debugging purposes and dynamically identifying the data type of variables or expressions.

### typeof null Anomaly

The `typeof null` operator returns `"object"`. This behavior is considered an anomaly in JavaScript, as `null` represents an absence of value. However, it's important to recognize this behavior to avoid unexpected outcomes.

By understanding these fundamental data types and their usage, you can effectively structure and manipulate data in your JavaScript applications.

### Map

Map is also object which holds key-value pairs, we can define map using `Map()`. Main differences between Map and regular objects are:

- They hold the key-value pairs in the order they were declared.
- You can define keys in any data type (in regular objects, all keys are converted into strings)
- They accept unique values, same values can not repeat.

## 3- Understanding the JS Code on Type Conversion

### Key Concepts:

1.  **Implicit Type Conversion:** JavaScript automatically converts data types when necessary. For example, adding a string containing a number to a number will convert the string to a number.
2.  **Explicit Type Conversion:** The `Number()`, `String()`, and `Boolean()` functions explicitly convert data types. For instance, `Number("23")` converts the string "23" to the number 23.
3.  **Truthy and Falsy Values:** In JavaScript, some values are considered truthy (true), while others are falsy (false). These values are used in conditional statements and logical operations.
4.  **Prefix and Postfix Operators:** Increment (`++`) and decrement (`--`) operators can be used in prefix or postfix forms. Prefix operators increment or decrement the value before using it, while postfix operators do so after using it.
