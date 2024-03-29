/*
2. Count Vowels
Count Vowels
Easy
+10 APs
unsolved
Write a function to count the number of vowels in a given string using Regular Expression in JavaScript.

Example 1:
Input:
Hello World!

Output:
3
*/
// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(countVowels(str));
}
function countVowels(str) {
  // Your code goes here
      // Use a regular expression to match vowels (case-insensitive)
    var vowelsRegex = /[aeiou]/gi;
    
    // Use the match method to find all matches and return the count
    var matches = str.match(vowelsRegex);
    return matches ? matches.length : 0;
}