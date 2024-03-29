/* 
Second smallest number
Easy
+10 APs
unsolved
Once upon a time, there was a young girl named Lily who loved to bake cookies. She would spend hours in the kitchen, mixing ingredients and trying out new recipes. One day, she decided to have a cookie baking competition with her friends. Each friend would bring their best batch of cookies, and they would all taste and judge each other’s cookies. Lily wanted to give a prize to the friend who baked the second-best batch of cookies, but she didn’t know how to determine the winner.

Can you help Lily by writing a function that takes an array of integers representing the scores given by the judges to each batch of cookies, and returns the second smallest number, representing the score of the second-best batch of cookies?

Example 1:
Input:
num = [5, 2, 8, 1, 9]

Output:
2
*/
// Do not remove nor make any changes in  main() function
function main() {
    var num = readLine().split(" ").map(x => parseInt(x));
    console.log(findSecondSmallest(num));
}
function findSecondSmallest(numbers) {
  // Your code goes here
    arr = numbers.sort((a, b) => a - b);
    return arr[1];
}
