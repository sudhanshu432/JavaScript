/* 
The Array Rotator
Medium
+10 APs
unsolved
In the land of cyclical arrays, the people need a JavaScript function that can rotate an array by a given number of positions to the right. They seek to shift their array elements in a circular manner, enabling them to explore new possibilities with their data.

Write a JavaScript function called rotateArray that takes an array of integers and a positive integer k as inputs. The function should rotate the array k positions to the right.

Note: The value of k can be greater than the length of the array, so multiple rotations might be needed.

Example 1:
Input:
[1, 2, 3, 4, 5]

2

Output:
[4, 5, 1, 2, 3]

Example 2:
Input:
[7, 8, 9]

5

Output:
[ 8, 9, 7 ]
*/

// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    var k = parseInt(readLine());
    console.log(rotateArray(arr, k));
}
function rotateArray(arr, k) {
  // Your code goes here
  // Calculate the effective rotation using modulo to handle cases where k is greater than the array length
    const effectiveRotation = k % arr.length;

    // Use array slicing to rotate the array
    const rotatedArray = arr.slice(-effectiveRotation).concat(arr.slice(0, arr.length - effectiveRotation));

    return rotatedArray;
}