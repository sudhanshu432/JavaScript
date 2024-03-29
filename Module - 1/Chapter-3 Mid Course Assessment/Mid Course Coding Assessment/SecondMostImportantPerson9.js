/*
8. Second Most Important Person

There were three friends named A, B, and C. They were all very competitive and loved to compete with each other in everything they did.

One day, they decided to find out who among them was the second most important person in their group. They knew that the first most important person was whoever won their competitions, but they were unsure who would be the second most important.

To determine this, they came up with a game. They each had to pick a number, and the person who chose the second largest number would be declared the second most important person in the group. Write a program to find the second largest number in a, b, c to find the second most important among A, B, C.

Example 1:
Input:
a = 15 b=20 c=10

Output:
15
*/
// Do not remove nor make any changes in  main() function
function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var c = parseInt(readLine());
    console.log(secondImportant(a,b,c));
}
const secondImportant = function(a,b,c){
   // Your code goes here
   // Find the second largest number among a, b, c

    // Check if a is the second largest
    if ((b >= a && a >= c) || (c >= a && a >= b)) {
        return a;
    }
    // Check if b is the second largest
    else if ((a >= b && b >= c) || (c >= b && b >= a)) {
        return b;
    }
    // Check if c is the second largest
    else {
        return c;
    }
};