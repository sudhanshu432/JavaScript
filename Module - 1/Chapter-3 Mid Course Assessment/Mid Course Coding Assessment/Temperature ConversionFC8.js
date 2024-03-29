/*
8. Temperature Conversion (F → C)
As a budding chef, Tom was determined to master the art of baking. However, he often found himself confused about the appropriate temperature conversions for his recipes. Can you help Tom write a JavaScript program to convert temperatures from Celsius to Fahrenheit and vice versa?

Example 1:
Input:
90

Output:
32.22222222222222
*/
//  Do not remove nor make any changes in  main() function
function main() {
    var a = parseInt(readLine());
    console.log(fahrenheitToCelsius(a));
}
function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here
  // Convert Fahrenheit to Celsius using the formula
    var celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}