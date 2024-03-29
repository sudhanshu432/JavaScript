/*
The Palindrome Detector

In the mystical land of characters and strings, a group of adventurers seeks to identify palindromes—words or phrases that read 
the same forwards and backwards. To aid them in their quest, they need a JavaScript function that can determine whether a given 
string is a palindrome.

Write a JavaScript function called isPalindrome that takes a string as input and returns true if it is a palindrome, and false otherwise.

A palindrome is case-sensitive and should be read from left to right and right to left in the same way.

Example 1:
Input:
"racecar"

Output:
true+

Example 2:
Input:
"hello"

Output:
false

Example 3:
Input:
"Madam In Eden, I'm Adam"

Output:
true
*/
// Do not remove nor make any changes in  main() function

  // Your code goes here
let str = prompt("Enter a string to check palindrome: ");
const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
// Compare the original string with its reverse
const reversedStr = cleanStr.split('').reverse().join('');
    
console.log(cleanStr === reversedStr);






// .........................................................................................................................
// Rough work
/*
let input = "rabecar";
let arr = input.split("");
console.log(arr);
let arr_length = arr.length;
console.log(arr_length);
let i = 0;
let j = arr_length-1;
let flag = true;
while(i<=j){
    if(arr[i] != arr[j]){
        flag = false;
        break;
    }
    i++;
    j--;
}
console.log(flag);
*/
/*
// Method - 1 
// Step-1 : Get the input
let str = 'racecar';
// Step-2 : convert it in lower case
const inputStr = str.toLowerCase();
console.log(inputStr);
//  Step-3 : split it by "" Because we need to mathch word by word
const splitInput = inputStr.split("");
console.log(splitInput);
//  step-4 now reverse it 
const reverseInput = splitInput.reverse();
console.log(reverseInput);
// if reverse is same as original then it will be palindrom
console.log(splitInput === reverseInput);


// const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
// console.log(cleanStr);
// // Compare the original string with its reverse
// const reversedStr = cleanStr.split('').reverse().join('');
// console.log(reversedStr);  
// console.log(cleanStr === reversedStr);
// Method-2 code in sort
let inputStr2 = "racecar";

// Convert it in lower case
let lowercaseStr2 = inputStr2.toLowerCase();
// Split it because reverse will work in array only
let splittedStr2 = lowercaseStr2.split("");
// Reverse 
let reverseOfStr2 = splittedStr2.reverse().join("");
console.log(lowercaseStr2 === reverseOfStr2);

*/