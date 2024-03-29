/*
1. Area of Triangle

+10 APs
solved
Mary is a geometry teacher who wants to create a web application that calculates the area of a triangle. She needs to write a JavaScript function to achieve this. How can she write a function to find the area of a triangle?

Example 1:
Input:
side1 = 5, side2 = 6, side3 = 7

Output:
14.696938456699069

Example 2:
Input:
side1 = 3, side2 = 4, side3 = 5

Output:
6
*/
// Do not remove nor make any changes in  main() function
function main() {
    var side1 = parseInt(readLine());
    var side2 = parseInt(readLine());
    var side3 = parseInt(readLine());
    console.log(getTriangleArea(side1, side2, side3));
}
function getTriangleArea(side1, side2, side3) {
  // Your code goes here
    // Calculate semi-perimeter
  var s = (side1 + side2 + side3) / 2;

  // Calculate area using Heron's formula
  var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  return area;
}