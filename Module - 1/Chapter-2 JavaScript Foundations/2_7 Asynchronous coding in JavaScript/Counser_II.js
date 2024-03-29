// Do not remove nor make any changes in  main() function
function main() {
    var init = parseInt(readLine());
    const counter=createCounter(init);
	console.log(counter.increment());   
	console.log(counter.reset()); 
	console.log(counter.decrement()); 
}
var createCounter = function(init) {
  // Your code goes here
      let currentLap = init;

    return {
        increment: function () {
            // Increment currentLap by 1 and return the updated value
            return ++currentLap;
        },
        decrement: function () {
            // Decrement currentLap by 1 and return the updated value
            return --currentLap;
        },
        reset: function () {
            // Reset currentLap to the initial value (init) and return it
            currentLap = init;
            return currentLap;
        }
    };
};