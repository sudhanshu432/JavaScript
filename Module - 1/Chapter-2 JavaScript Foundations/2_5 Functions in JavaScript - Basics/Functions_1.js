/*
Functions in JavaScript - Basics

Evan was a software developer who had been working with JavaScript for many years. He had just received a new project that required him to build 
a complex web application with many features. 
As he began planning the application, he realized he would need to use functions extensively to keep the code organized and modular.

He started by creating a few simple functions that performed basic tasks, such as formatting dates and times. 
He then used these functions within larger functions to perform more complex tasks, such as retrieving data from APIs and displaying it on the screen.

As he worked, Evan realized that using functions made debugging and maintaining the code much easier. 
He could easily isolate errors and fix them without searching through long blocks of code.
*/

// JavaScript Function

/*
A function in JavaScript is a piece of reusable code that, when called or executed, completes a certain operation or computation.

The function keyword, the function name, any optional parameters in parentheses, and the code block encased in curly brackets are used to define functions. 
They can be called by preceding the function name with the parenthesized parameters.

Functions can also be supplied as arguments to other functions, set to variables, and returned as values by other functions. 
JavaScript functions are a core component of the language and are often utilized to develop modular code and create complicated applications.

Functions are used to make code less repetitive, more reusable, more modular, and simpler to comprehend. 
They are crucial for creating intricate software systems and are a fundamental idea in the majority of programming languages.
*/
// Example of a simple JavaScript function:

// Defining the function
function sum(num1, num2){
    console.log(num1 + num2);
}

// Calling the function
sum(3, 6);
// Output: 9

/*
This code defines a function called sum which is taking two arguments num1 and num2 and outputs sum using the + operator.
*/
// Example of a simple JavaScript function which will calculate the area of a rectangle:

function calculateArea(width, height){
    let area = width*height;
    console.log(area);
}

// Call the function with arguments
calculateArea(5, 10);

// Function Declarations
/*
In JavaScript, function declarations are one of the fundamental ways to define and create reusable blocks of code that can be called later in the program.
They allow you to encapsulate logic and operations, making your code more organized and easier to maintain.
*/

// Here's the syntax for a function declaration:

function functionName(parameter1, parameter2) {
    // Function body: code that is executed when the function is called
    // You can use parameters and perform operations here
    return result; // Optional: You can return a value from the function
}

// Let's break down the components of a function declaration:
/*
1. function: 
This keyword is used to declare a function in JavaScript.

2. functionName: 
Replace this with the desired name for your function. It should follow the rules for variable naming (e.g., no spaces, can't start with a number).

3. parameters: 
These are placeholders for values that you can pass to the function when calling it. They are optional, and you can have none or multiple parameters.

4. Function body: 
This is the block of code enclosed within curly braces {}. It contains the logic and operations the function will perform.

5. return: 
You can use the return keyword to specify the value that the function will produce and send back when called. If there is no return statement, the function will implicitly return undefined.

*/
// Here's an example of a simple function declaration:
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  const message = greet("Rohan");
  console.log(message);
  
  // Output
//   "Hello, Rohan!"

/*
In this example, the greet function takes a name parameter and returns a greeting message using that parameter.
Function declarations are hoisted in JavaScript, which means they can be called before they are defined in the code. 
This makes them accessible throughout the entire scope in which they are declared.
*/

// Calling a Function

/*
In JavaScript, calling a function is the process of executing the code inside the function's body. When you call a function, you use its name followed by parentheses ().
If the function has any parameters, you can pass arguments to those parameters within the parentheses. 
The function will then be executed with the provided arguments, and it may return a value if it contains a return statement.
*/

// Here's how you call a function in JavaScript:

// Function declaration
function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Function call with argument
  sayHello("John");
  
  // Output
//   "Hello, John!"

/*
In this example, the function sayHello is declared with one parameter name. When the function is called with the argument "John", 
the code inside the function's body will execute, printing "Hello, John!" to the console.

Functions can also return values. Here's an example of a function that calculates the sum of two numbers and returns the result:
*/

function add(a, b) {
    return a + b;
  }
  
  const result = add(3, 5);
  console.log(result);
  
// Output
//   8

/*
In this case, the function add takes two parameters a and b and returns their sum. When the function is called with add(3, 5), it evaluates to 8, 
which is then stored in the variable result and printed to the console.
*/

/*
Remember that when you call a function, the code inside the function's body executes, and any operations or calculations specified in the function will be performed 
based on the provided arguments.
*/

// “return” keyword
/*
The return keyword in JavaScript is used to specify the value that a function should produce and send back when called. When a function encounters a return statement, 
it immediately exits the function and returns the specified value to the caller. If there is no return statement in the function, it implicitly returns undefined.
*/
// Here's an example of a function using the "return" keyword:
function add(a, b) {
    return a + b;
  }
  
  const result1 = add(3, 5);
  console.log(result1);
  
  // Output
//   8
/*
In this example, the add function takes two parameters, a and b, and returns their sum using the return keyword.
*/
/*
The return keyword is vital when you want a function to produce a specific result or value that can be used in other parts of your code. 
It enables you to pass data between the function and the calling code, making functions powerful tools for encapsulating and reusing logic within JavaScript programs.
*/

/*
// Parameters & Arguments:

The functions we've developed so far carry out a task without input. Certain functions, however, can accept inputs and use those inputs to carry out a task.
In JavaScript functions, parameters and arguments are essential concepts related to passing data into and out of functions. 
They are often used to customize the behavior of functions and make them reusable with different values.
*/

/*
1. Parameters: 
Parameters are placeholders or variables defined in the function's declaration. They act as local variables within the function's body, representing 
the values that the function expects to receive when it is called. Parameters are listed inside the parentheses () when declaring a function.
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
}
/*
In this example, name is a parameter of the greet function. When the function is called, you can pass a value as an argument for name.
*/

/* 
2. Default Parameters: 
In JavaScript, default parameters allow you to specify default values for function parameters. 
If a function is called without providing a value for a parameter, the default value is used instead. 
This feature was introduced in ECMAScript 6 (ES6) and provides a convenient way to handle missing or undefined arguments.
*/
// Here's the syntax for defining default parameters in a function:
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
    // Function body
}
/*
If a value for parameter1 is not provided when the function is called, it will take on the value of defaultValue1, and if parameter2 is not provided, 
it will take on the value of defaultValue2.
*/
// Example:
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet();
  greet("John");
  
  // Output
//   "Hello, Guest!"   (no argument provided, default parameter used)
//   "Hello, John!"    (argument "John" provided, default parameter ignored)

/* 
In this example, the greet function has a default parameter name = "Guest". When the function is called without an argument, the default value "Guest" is used. 
If an argument is provided, the default parameter is overridden by the provided value.

Default parameters enhance the flexibility and readability of functions by providing sensible defaults for missing arguments, reducing 
the need for explicit checks for undefined values inside the function.
*/
/*
3. Arguments: 
Arguments are the actual values passed to the function when it is called. They correspond to the parameters defined in the function's declaration and provide 
the data with which the function will operate.
*/
greet("John");

/* 
In this example, "John" is an argument passed to the greet function. The function will use this argument to replace the name parameter within the function's body 
and produce the output "Hello, John!".

In summary, parameters are variables declared in the function's declaration that act as placeholders for values, while arguments are the actual values passed to 
the function when it is called. By providing arguments when calling a function, you can customize its behavior and perform operations with different data. 
Parameters and arguments make functions flexible and reusable in JavaScript code.
 
*/