/*
Addition with closures
Easy
+10 APs
solved
Once upon a time, there was a young boy named Jack who loved to play with numbers. He would spend hours adding, subtracting, multiplying and dividing numbers in his head. One day, he discovered a new game where he had to add a given number to another number as quickly as possible. He found the game challenging and fun, but wished there was an easier way to add the numbers without having to do the calculation every time.

Can you help Jack by writing a closure function that takes a given number as a parameter and returns a new function that takes another number as a parameter and adds it to the given number?

Example 1:
Input:
3

Output:
8

Example 2:
Input:
7

Output:
12

*/
// Do not remove nor make any changes in  main() function
function main() {
    var target = parseInt(readLine());
    const addFive = addNumber(5);
    console.log(addFive(target));
}

function addNumber(num1) {
  //Your code goes here
  return function(num2) {
        return num1 + num2;
    };
}