/*
4. Digit Shuffle

+10 APs
unsolved
Kaushal works at a company called MoEngage, and his boss has given him a task. She hands him a piece of paper with a positive integer N written on it and says, "I want you to determine if it is possible to rearrange the digits of N and obtain a multiple of 5.” For example, when N=108, we can rearrange its digits to construct 180=36⋅5 which is a multiple of 5.

Write a program to help Kaushal find if a number can be rearranged to obtain a multiple of 5.

Example 1:
Input:
5

Output:
true

Example 2:
Input:
119

Output:
false
*/
// Do not remove nor make any changes in  main() function
function main() {
    var n = parseInt(readLine());
    console.log(isMultipleOfFive(n));
}
function isMultipleOfFive(n) {
  // Your code goes here
    // Convert the number to a string to manipulate digits
    var numString = n.toString();

    // Count occurrences of each digit
    var digitCounts = Array.from({ length: 10 }, () => 0);

    for (var i = 0; i < numString.length; i++) {
        var digit = parseInt(numString[i]);
        digitCounts[digit]++;
    }

    // Check if the last digit is 0 or 5 (as multiples of 5 end with 0 or 5)
    if (numString.endsWith('0') || numString.endsWith('5')) {
        return true;
    }

    // Check if there is any multiple of 5 arrangement using the remaining digits
    for (var i = 1; i < 10; i++) {
        if (digitCounts[i] > 0 && ((i * 10) % 5 === 0)) {
            return true;
        }
    }

    return false;
}