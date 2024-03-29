/*
7. Temperature Conversion (C → F)
As a budding chef, Tom was determined to master the art of baking. However, he often found himself confused about the appropriate temperature conversions for his recipes. Can you help Tom write a JavaScript program to convert temperatures from Celsius to Fahrenheit and vice versa?

Example 1:
Input:
25

Output:
77
*/
// Do not remove nor make any changes in  main() function
function main() {
    var celsius = parseInt(readLine());
    console.log(celsiusToFahrenheit(celsius));
}
function celsiusToFahrenheit(celsius) {
  //  Your code goes here
      // Convert Celsius to Fahrenheit using the formula
    var fahrenheit = (9/5) * celsius + 32;
    return fahrenheit;
}