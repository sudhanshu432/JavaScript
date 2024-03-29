/*
Callbacks in JavaScript

Callbacks in JavaScript refer to functions that are passed as arguments to another function and are executed after the completion of that function. 
They are a way to handle asynchronous operations, allowing code to continue executing without waiting for the completion of the operation.

Callbacks are commonly used in scenarios like fetching data from a server, reading files, or handling user input events, 
where the operation may take some time to complete. Instead of blocking the code, a callback function is provided to be executed once the operation 
is finished, ensuring that the result is processed correctly.

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
//   "Name: John, Age: 30"

/*
In the example above, fetchDataFromServer is an asynchronous function that fetches data from a server after a delay of 1 second (simulated using setTimeout). 
It takes a callback function displayData as an argument. Once the data is fetched, the displayData function is executed with the retrieved data. 
This way, we can handle the fetched data without blocking the rest of the code execution.

Normally, blocking functions are placed in callback functions for subsequent execution to avoid interfering with other processes.
*/