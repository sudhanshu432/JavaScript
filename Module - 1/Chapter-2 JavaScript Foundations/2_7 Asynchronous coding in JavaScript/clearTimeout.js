function sayHello() {
    console.log("Hello, World!");
  }
  
  const timerId = setTimeout(sayHello, 1000); // Schedule sayHello function to run after 1000 milliseconds (1 second)
  
  // Now, if you want to cancel the execution of the sayHello function before it runs:
console.log("1 sec");
console.log("2 sec");
console.log("3 sec");

// clearTimeout() is useful when you want to abort the execution of a function that has been scheduled but is no longer needed
//  or relevant, helping to avoid unnecessary or unwanted function calls.

clearTimeout(timerId);

console.log("4 sec");