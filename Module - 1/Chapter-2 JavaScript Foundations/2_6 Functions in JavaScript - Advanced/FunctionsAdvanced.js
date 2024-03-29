// Functions in JavaScript - Advanced
// Functions in JavaScript - II
/*
Karen had been working as a web developer for several years, and she had become quite proficient in JavaScript. 
She had built many applications and websites over the years but always looked for ways to improve her skills.

One day, she came across helper functions in JavaScript. She had heard of helper functions before but had never explored the concept in depth. 
Intrigued, she decided to dive in and learn more.

She created a simple helper function to take a string and capitalize the first letter. She used this function throughout her application, 
saving her a lot of time and effort.

As she continued to work with helper functions, she discovered that there were many different types of functions in JavaScript. 
She learned about anonymous, arrow, and higher-order functions, among others.
*/

// Function Expressions
/*
Function expressions in JavaScript are another way to define functions. Unlike function declarations, which are hoisted to the top of their scope, 
function expressions are not hoisted and must be assigned to a variable or a property.
*/

// Here's the syntax for a function expression:

const functionName = function(parameters) {
    // Function body
    // You can perform operations and return a value if needed
};

// Let's break down the components of a function expression:

// const functionName: 
// This is the variable that holds the function. You can use let or var as well, depending on your needs.

// function(parameters) { ... }: 
// This is the function itself, which can have parameters just like function declarations.

/*
Function expressions are commonly used in scenarios where you want to assign a function to a variable or pass it as an argument to another function. 
They provide a more flexible way to create functions and are often used in functional programming and asynchronous programming with callbacks.
*/

// Example:
const add = function(a, b) {
    return a + b;
};
  
const result = add(3, 5);
console.log(result);
  
// Output
//   8

/* 
In this example, add is a function expression that calculates the sum of two numbers. 
The function is assigned to the variable add and can be used like any other function.

Function expressions are a powerful feature of JavaScript that allows you to create functions dynamically and use them in various scenarios, offering flexibility 
and versatility in your code.
*/

// Types of Functions in JavaScript
/*
In JavaScript, there are several types of functions, each serving different purposes and offering distinct features.

Here are the main types of functions commonly used in JavaScript:
*/

/*
1. Function Declarations: 
Function declarations are the most common type of functions. They are defined using the function keyword followed by the function name and a set of parentheses 
containing optional parameters. Function declarations are hoisted to the top of their scope, meaning you can call them before their actual declaration in the code.
*/

//Example:
function add1(a, b) {
    return a + b;
}
  
console.log(add1(4,5));
  
// Output
//   9

/*
2. Function Expressions: 
Function expressions involve assigning a function to a variable or property. They are defined using the function keyword, but the function itself is not hoisted. 
Function expressions are often used for callback functions or to create anonymous functions.

*/
// Example:
const multiply = function(a, b) {
    return a * b;
};
  
console.log(multiply(4,5));
  
// Output
//   20

/* 
3. Anonymous Function: 
Anonymous functions are indeed an important type of function in JavaScript. An anonymous function is a function that does not have a name 
and is often used in situations where a function is used only once or as a callback function.
*/
// Example:
const result1 = (function(a, b) {
    return a + b;
})(3, 5);
  
console.log(result1);
  
  // Output
//   8

/*
4. Arrow Functions: 
Arrow functions are a concise and modern way to write functions introduced in ES6. 
They have a more compact syntax and do not have their own this or arguments context, using the context of the surrounding code instead.
*/
// Example: 
const divide = (a, b) => a / b;

console.log(divide(36,9));

// Output
// 4

/*
Concise Body Arrow Functions

There are numerous other ways to alter the syntax of arrow functions in JavaScript. Concise body refers to the function in its most reduced form. 

Below, we'll look at a number of these strategies:

1. Parentheses are not required around a parameter in a function that only accepts one. But, parentheses are necessary if a function has zero or more parameters.
*/

/*
// Zero Parameters
const functionName = () => {};

// One Parameters
const functionName = paramOne => {};

// Two or more Parameters
// const functionName = (paramOne, paramTwo) => {};
*/

/*
2. Curly braces are not necessary for a function body made out of a single-line block. 
Whatever that line evaluates will be automatically returned if the curly braces are missing. 
The return keyword can be deleted, and the block's content should immediately follow the arrow =>. Implicit return describes this situation.
*/
/*
// Single-line block
const sum = number => number + number;

// Multi-line block
const sum = number => {
	const sum = number + number;
	return sum;
}
*/
/*
5. Immediately Invoked Function Expressions (IIFE):
IIFE is a function expression that is executed immediately after it is defined. It helps create a private scope for variables, preventing them from polluting the global scope.
*/
// Example:
(function() {
	let str = "Hello AlmaBetter Learner";
  console.log(str);
})();

// Output
// "Hello AlmaBetter Learner"

/*
6. Generator Functions: 
Generator functions allow you to pause and resume their execution using the yield keyword. They are useful for dealing with asynchronous code or producing iterable sequences.
*/
// Example:
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  
  // Create a generator instance
  const numbers = numberGenerator();
  
  // Loop through the generated numbers
  for (const number of numbers) {
    console.log(number);
  }

  /*
  // Output
  1
  2
  3
  4
  5
  */

 /*
 7. Recursive Functions: 
 Recursive functions are functions that call themselves during their execution. They are useful for solving problems that involve repetitive tasks or nested data structures.
 */
// Example:
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));
  
// Output
//   120

/*
Each type of function in JavaScript has its use cases and benefits, allowing developers to write efficient, reusable, and organized code to tackle various 
programming challenges.
*/

// Function execution
/*
Function execution refers to the process of calling or invoking a function and executing the code inside its body.

When a function is called, a new execution context is created, and its code is executed line by line.

The JavaScript engine follows the function's scope to access local variables declared within the function's body.

If a variable is not found within the function's scope, the engine looks for it in the outer scope (closure) until it reaches the global scope.

When a function returns a value using the return keyword, the value is sent back to the caller.

The function's execution context is then removed from the call stack, and execution continues with the previous function on the stack.

*/

/*
Call Stack

The Call Stack is a Last-In, First-Out (LIFO) data structure that keeps track of function calls and their execution contexts during the execution of a JavaScript program.

When a function is called, a new execution context is created for that function, and it is pushed onto the top of the call stack.

The execution context contains information about the function's local variables, parameters, and the line of code to be executed next.

As functions complete their execution or reach a return statement, their execution contexts are removed from the call stack (popped off), and the control is transferred back to the previous function in the stack.

The call stack maintains the order of function calls and ensures that each function executes in the correct sequence, preventing potential issues like stack overflow due to excessive nested function calls.
*/

/*
function main() {
  console.log(`Task Starting`);
  task();
  console.log(`Task Completed`);

  function task() {
    console.log(`Task Running`);
  }
}

main();

// Output
"Task Starting"
"Task Running"
"Task Completed"
*/

/*
JavaScript Hoisting

JavaScript hoisting is a behavior in which variable and function declarations are moved to the top of their respective scopes during the compilation phase before the code is executed. This means that you can use variables and call functions before they are declared in the code, and they will still work as expected due to hoisting.
However, it is essential to understand that only the declarations are hoisted, not the initializations or assignments. Therefore, variables will be initialized with the value undefined by default until the actual assignment is made.
Let's look at some examples to illustrate JavaScript hoisting:
*/
//1. Variable Hoisting:

console.log(x);
var x = 10;
console.log(x);

/*
// Output
undefined
10
*/

/* 
In this example, the variable x is hoisted to the top of its scope, and the first console.log prints undefined. Later, the variable is initialized with the value 10, and the second console.log prints 10.
*/

// 2. Function Hoisting:
greet();

function greet() {
  console.log("Hello!");
}

// Output
// Hello!

/* 
In this example, the function greet is hoisted to the top of its scope, allowing it to be called before its actual declaration in the code.
*/

// 3. Function Expression Hoisting:
greet();

var greet = function() {
  console.log("Hello!");
};

// Error
// Uncaught TypeError: greet is not a function

/*
In this case, the variable greet is hoisted, but it is initialized with undefined, as it is a variable declaration. When we try to call greet() before the function expression assignment, we get an error because greet is not yet a function.
*/

/*
Hoisting can be beneficial for function declarations as it allows you to call functions before they are defined, but it can lead to unexpected behavior and bugs when misused with variables. It is essential to understand hoisting to write more predictable and maintainable JavaScript code.
*/

/*
Note: Generally, programming in other languages like Python, C, C++, and Java does not involve hoisting. Hoisting may result in negative effects on your program. Also, it's recommended to avoid hoisting and declaring variables and functions before using them. When dealing with variables, let is preferable to var.
*/