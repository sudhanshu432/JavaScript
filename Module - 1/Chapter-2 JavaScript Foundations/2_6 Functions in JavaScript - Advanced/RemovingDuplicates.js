/*
Removing Duplicates
Easy
+10 APs
solved
Once upon a time, there was a young boy named Max who loved to collect stamps. He would spend hours sorting through his collection, admiring the different designs and colors. One day, he decided to organize his collection by removing any duplicate stamps. He started going through his collection one stamp at a time, but soon realized that it was taking too long. He wished there was an easier way to remove the duplicates and keep only the unique stamps.

Can you help Max by writing a function that accepts an array of numbers representing the different stamps in his collection, and returns a new array with only the unique numbers, representing the unique stamps in his collection?

Example 1:
Input:
nums = [1, 2, 3, 2, 4, 4, 5]

Output:
[1, 2, 3, 4, 5]
*/
// Do not remove nor make any changes in  main() function

function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(getUniqueNumbers(nums));
}

function getUniqueNumbers(numbers) {
  // Your code goes here
  let uniqueSet = new Set(numbers);
  return Array.from(uniqueSet)
}