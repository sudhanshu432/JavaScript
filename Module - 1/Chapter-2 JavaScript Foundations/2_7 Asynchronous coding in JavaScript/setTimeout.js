// display a text using the setTimeout method
function greet() {
    console.log('This will appear next. Hello World!');
}
  
setTimeout(function() {
    console.log("This message appears after 3 seconds");
    greet();
}, 3000);
  
//   // Output
//   "This message appears after 3 seconds"
//   "This will appear next. Hello World!"

function sayHello(name, message) {
    console.log(`Hello, ${name}! ${message}`);
  }
  
  setTimeout(sayHello, 3000, "John", "How are you?");
  
  // Output
//   Hello, John! How are you?     // After 3 seconds