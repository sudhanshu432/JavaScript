/*
Asynchronous coding in JavaScript

Introduction
Asynchronous programming in JavaScript allows you to run multiple tasks simultaneously without blocking the main thread and ensures fast and efficient execution of code.
Focus: 
JavaScript loops and various methods such as - setTimeOut() and setInterval()
Prerequisites: 
VS Code IDE with Node.js installed, JavaScript Basics


Theme
The JavaScript engine uses an event loop to efficiently manage multiple tasks in a web application. 
The event loop is like a never-ending loop that constantly checks the message queue for any new tasks that need to be executed, 
such as user interactions, network requests, timers, or any other actions. As soon as a task is added to the message queue, 
the event loop picks it up and executes it, and once it's completed, the event loop goes back to recheck the message queue for any new tasks.

The event loop in JavaScript ensures that the web application runs smoothly and efficiently, allowing for a seamless user experience. 
It acts like a chef in a restaurant who must manage multiple tasks at once, such as preparing different dishes for multiple customers and, 
monitoring the oven, plating the finished dishes. Just like the chef, the event loop must constantly check for new tasks and execute them 
as efficiently as possible.

Primary Goals
Understand the usage of setTimeout() and setInterval() for handling asynchronous tasks in JavaScript.
Learn how the event loop works and its role in managing asynchronous code execution, ensuring smooth performance and responsiveness in 
JavaScript applications.

Asynchronous coding in JavaScript
Samantha was a software developer who had just started working on a new project. She was excited to be working with JavaScript. Still, 
she quickly realized that she would need to learn about asynchronous programming if she was going to build a responsive and fast application.
At first, Samantha found asynchronous programming to be challenging. She was used to writing code that executed linearly, from top to bottom. 
But with asynchronous programming, she had to deal with code that was executed out of order and callbacks that fired at unpredictable times.
However, she was determined to learn, so she dove into the topic headfirst. She started by learning about callbacks, promises, and async/await. 
She also learned about the event loop, which was responsible for managing the execution of asynchronous code in JavaScript.
She discovered that asynchronous programming could make her application more responsive and faster. By using callbacks and promises, 
she could avoid blocking the main thread of the application, which could cause the application to freeze or become unresponsive.

JavaScript Event Loop

JavaScript single-threaded model

JavaScript, being single-threaded, can only perform one task at a time. When executing a script, the JavaScript engine processes it from 
the top of the file to the bottom, managing execution contexts and the call stack.
During the execution of a lengthy function, interactions with the web browser become unresponsive, causing the page to hang. 
Such functions are termed as blocking functions, as they block all interactions on the webpage, including mouse clicks.
An illustration of a blocking function is when a function calls an API from a remote server, which may introduce delays in the script's execution.

The following illustration simulates a blocking function using a huge loop:
*/

function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');

/*
In this example, the function "task()" contains a large "[while] loop that simulates a time-consuming activity. The blocking function "task()" is used.

Depending on how quickly the machine is running, the script hangs for a little while and outputs the following:

Start script...
Download a file.
Done!

The JavaScript engine executes the script by placing the first call, "console.log( )" at the top of the call stack. The "task()" function is then executed after 
being positioned at the top of the call stack.

Nevertheless, the 'task()' function won't finish immediately. The notification "Download a file." will therefore appear shortly. The JavaScript engine removes 
the completed "task()" function from the call stack after it has finished.

The JavaScript engine makes the final call to the “console.log('Done!')” function, which is subsequently executed.

Callbacks in JavaScript

Callbacks in JavaScript refer to functions that are passed as arguments to another function and are executed after the completion of that function. They are a way to handle asynchronous operations, allowing code to continue executing without waiting for the completion of the operation.

Callbacks are commonly used in scenarios like fetching data from a server, reading files, or handling user input events, where the operation may take some time to complete. Instead of blocking the code, a callback function is provided to be executed once the operation is finished, ensuring that the result is processed correctly.

Example:
*/

// Function with a callback
function fetchDataFromServer(callback) {
  // Simulating an asynchronous operation
  setTimeout(function() {
    const data = {
      name: "John",
      age: 30
    };
    callback(data); // Execute the callback function with the fetched data
  }, 1000);
}

// Callback function to handle the fetched data
function displayData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

// Call the function with the callback
fetchDataFromServer(displayData);

// Output
// "Name: John, Age: 30"

/*
In the example above, fetchDataFromServer is an asynchronous function that fetches data from a server after a delay of 1 second (simulated using setTimeout). 
It takes a callback function displayData as an argument. Once the data is fetched, the displayData function is executed with the retrieved data. This way, 
we can handle the fetched data without blocking the rest of the code execution.
Normally, blocking functions are placed in callback functions for subsequent execution to avoid interfering with other processes.

For instance:
*/
function task(message) {
  // emulate time consuming task
  let n = 100000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

console.log('Start script...');

setTimeout(() => {
  task('Download a file.');
}, 1000);

console.log('Done!');

// Output
// Start script...
// Done!
// Download a file.
/*
You'll see the messages "Start script..." and "Done!" right away in this case. You will then see the notice "Download a file" after that.

The JavaScript engine can only perform one task at once, as was already described. To be more specific, the JavaScript runtime can only perform one action at once.

The JavaScript engine is only one of the parts of the web browser. The web browser can perform these tasks simultaneously and asynchronously when you use the setTimeout()
 function, send a fetch request, or click a button.

Fetch requests, DOM events, and setTimeout() are all a part of the web browser's Web APIs.

In our example: The JavaScript engine calls the setTimeout() method, which the Web API inserts on the call stack and sets to expire in one second.

Then JavaScript engine place the task() function is into a queue called a callback queue or a task queue:
The callback queue and the call stack are both continuously monitored by the event loop, which runs in the background.

The next function from the callback queue is added to the call stack if the call stack is not empty. If it is not empty, the event loop waits until it is. Nothing happens if the callback queue is empty:
See another example:
*/
console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');

// Output
// Hi!
// Bye!
// Execute immediately.

/*
The message "Execute instantly." should come before the message "Bye!" in this example because the timeout is zero seconds. But that isn't how it operates.
Once the call stack is devoid of any functions, the JavaScript engine proceeds to execute the next function call that had been added to the callback queue. In other words, it is executed by the JavaScript engine after "console.log('Bye!')".

The following picture illustrates JavaScript runtime, Web API, Call stack, and Event loop:


In order to achieve concurrency, the call stack and callback queue duties are coordinated by the JavaScript event loop, which is a continuously running process.

*/