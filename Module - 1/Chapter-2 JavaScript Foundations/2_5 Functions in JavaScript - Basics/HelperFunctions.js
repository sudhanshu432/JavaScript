/*
Helper Functions:
Helper functions, also known as utility functions or helper methods, are functions in programming that are created to assist other functions or modules
by performing specific tasks or providing reusable functionality. They are designed to handle repetitive or complex tasks, making code more organized, modular, 
and easier to maintain.
*/
// Here's an example of a helper function that calculates the area of a rectangle:
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  const area = calculateRectangleArea(5, 10);
  console.log(area);
  
  // Output
//   50
/* 
In this example, calculateRectangleArea is a helper function that takes width and height as parameters and returns their product. 
This function can be reused in various parts of the program or combined with other functions to perform more complex calculations.
*/

/* 
Use cases of Helper Function:
Using helper functions helps improve code maintainability, readability, and organization by promoting the principle of Don't Repeat Yourself (DRY). 
They are a fundamental part of building scalable and maintainable software systems.

1. Modularize Code: 
By isolating specific tasks into helper functions, you can break down complex operations into smaller, more manageable pieces, making the code easier to read 
and understand.

Let's say you have a complex task that involves multiple steps, such as uploading a file, parsing its contents, and saving the results to a database. 
You can break down this task into smaller functions and call them sequentially:
*/
function uploadFile() {
    // code to upload file
  }
  
  function parseFile() {
    // code to parse file contents
  }
  
  function saveToDatabase(data) {
    // code to save data to database
  }
  
  uploadFile();
  let data = parseFile();
  saveToDatabase(data);

/*
2. Reusability: 
Helper functions can be used in multiple places within a program or across different projects, promoting code reuse and reducing redundancy.

Let's say you have a function called calculateArea that calculates the area of a rectangle. You can call this function multiple times with different parameters 
to calculate the area of different rectangles:
*/
function calculateArea(length, width) {
    return length * width;
  }
  
  let area1 = calculateArea(5, 10); // returns 50
  let area2 = calculateArea(3, 7); // returns 21

/*
3. Encapsulation: 
They allow you to encapsulate specific logic or operations, hiding the implementation details from the main functions, and promoting abstraction.

Let's say you have a function called toggleButton that toggles the state of a button between on and off. Instead of manipulating the button directly in your code, 
you can encapsulate this behavior in a function and call it whenever you need to toggle the button:
*/
function toggleButton(button) {
    if (button.getAttribute('data-state') === 'on') {
      button.setAttribute('data-state', 'off');
      button.textContent = 'Off';
    } else {
      button.setAttribute('data-state', 'on');
      button.textContent = 'On';
    }
  }
  
  let myButton = document.querySelector('#my-button');
  toggleButton(myButton); // toggles button state

/*
4. Scope: 
Functions have their own scope, which means they can access and modify variables within their scope, but not outside of it. 
This can help prevent naming collisions and make your code more secure.

Let's say you have a function called calculateTotal that calculates the total cost of an order. Within this function, you define a variable called subtotal. 
This variable is only accessible within the scope of the function, and cannot be accessed or modified from outside of it:
*/
function calculateTotal(items) {
    let subtotal = 0;
    for (let item of items) {
      subtotal += item.price;
    }
    let tax = subtotal * 0.1;
    let total = subtotal + tax;
    return total;
  }
  
  let myItems = [
    { name: 'Widget', price: 9.99 },
    { name: 'Gadget', price: 14.99 },
    { name: 'Doohickey', price: 4.99 }
  ];
  
  let myTotal = calculateTotal(myItems); // returns 31.47

  /*
  Error Handling: 
  Helper functions can be used to handle error scenarios, input validation, or provide fallback options when things go wrong.

  According to TIOBE Index March 2023, JavaScript is developer’s seventh most loved programming language.
  */
  