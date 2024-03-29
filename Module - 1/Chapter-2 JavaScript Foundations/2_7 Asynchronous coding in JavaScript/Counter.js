// Do not remove nor make any changes in  main() function
function main() {
    var n = parseInt(readLine());
    const counter=createCounter(n);
    console.log(counter());
    console.log(counter());
    console.log(counter());
}

var createCounter = function(n) {
    // Your code goes here
    return function () {
        // Increment n by 1 and return the updated value
        return n++;
    };
};