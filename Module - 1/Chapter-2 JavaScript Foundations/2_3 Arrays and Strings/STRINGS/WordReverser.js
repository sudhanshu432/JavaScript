/*
ArrayReverse:
let arr = [1,2,3,4,5];
console.log(arr.reverse());
*/

/* 
The Word Reverser

In a realm of linguistic marvels, a task has been bestowed upon you to create a JavaScript function that can reverse 
the order of words in a given string. The people of the realm are eager to explore the magic of word reversal to 
unlock hidden meanings within their sentences.

Write a JavaScript function called reverseWords that takes a sentence (a string containing multiple words separated by spaces) 
as input and returns the sentence with the order of words reversed.

Example 1:
Input:
"Hello, world!"

Output:
"world! Hello,"

Example 2:
Input:
"The quick brown fox"

Output:
"fox brown quick The"
*/

let greet = prompt("Enter greet: ");
// console.log(typeof(greet)); // Object
let greetInput = greet.split(" ");
// console.log(typeof(greetInput)); // Object
let greetList = greetInput.reverse();
// console.log(typeof(greetList)); // Object
let reversedGreet = greetInput.join(" ");
console.log(typeof(reversedGreet)); // Object
console.log(reversedGreet);