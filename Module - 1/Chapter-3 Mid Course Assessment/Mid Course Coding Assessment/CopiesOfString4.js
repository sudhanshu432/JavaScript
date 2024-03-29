/*
4.
Copies of String
Easy
+10 APs
solved
A young programmer named Alice wanted to create a program that would make her work easier. She often had to repeat the same string multiple times in her code, which was tedious and time-consuming. Can you help Alice by writing a JavaScript program that takes in a string and a positive number, and returns a new string consisting of the original string repeated the specified number of times?

Example 1:
Input:
str = "hello"; num = 3;

Output:
hellohellohello
*/
// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    var n = parseInt(readLine());
    console.log(string_copies(str,n));
}
function string_copies(str,n) 
{
  // Your code goes here
    // Use the repeat method to repeat the original string n times
  return str.repeat(n);
}