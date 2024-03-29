/*
3.“Py” before String

+10 APs
solved
Jack was learning JavaScript programming and his teacher gave him a task. He was supposed to create a program that modifies a given string. Jack needed to add the characters "Py" in front of the string. But, if the original string already starts with "Py", he should return the original string without any modification.

How can you create a JavaScript program to modify a given string by adding "Py" in front of it, while returning the original string without modification if it already starts with "Py"?

Example 1:
Input:
thon

Output:
Python

Example 2:
Input:
Pygame

Output:
Pygame
*/
// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(addPy(str));
}
function addPy(str) {
  // Your code goes here
   // Check if the string already starts with "Py"
  if (str.startsWith("Py")) {
    // Return the original string without modification
    return str;
  } else {
    // Add "Py" in front of the string and return the modified string
    return "Py" + str;
  }
}