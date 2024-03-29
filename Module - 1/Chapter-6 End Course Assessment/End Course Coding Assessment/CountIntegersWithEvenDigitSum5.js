/*
5. Count Integers With Even Digit Sum

+10 APs
unsolved
Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.

Example 1:
Input:
num = 4

Output:
2

Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.

Example 2:
Input:
num = 30

Output:
14

Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.

Constraints:
1 <= num <= 1000
*/
// Do not remove nor make any changes in  main() function
function main() {
    var num = parseInt(readLine());
    console.log(countEven(num));
}
var countEven = function(num) {
     // Your code goes here
     // Helper function to calculate the digit sum of a number
    function getDigitSum(number) {
        return String(number).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    var count = 0;

    // Iterate through numbers from 1 to num
    for (var i = 1; i <= num; i++) {
        // Check if the digit sum is even
        if (getDigitSum(i) % 2 === 0) {
            count++;
        }
    }

    return count;
};