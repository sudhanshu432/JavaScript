/*
8. Zeros’ Chaos
Easy
+10 APs
unsolved
There was a magical array filled with random numbers. However, the array was plagued with zeros that were causing chaos and disorder. The wise wizard tasked with solving this problem, decided to push all the zeros to the end of the array, while keeping the order of all other elements the same.

The wizard knew that he had to be efficient in his solution, as the array was quite large. He needed to find a way to achieve this in linear time complexity, without using any extra space

Example 1:
Input:
arr[] = {1, 2, 0, 4, 3, 0, 5, 0};

Output:
[1, 2, 4, 3, 5, 0, 0, 0]


*/
// Initialize a variable to keep track of the position to swap non-zero elements
var nonZeroPosition = 0;

// Iterate through the array
for (var i = 0; i < arr.length; i++) {
    // If the current element is non-zero, swap it with the element at nonZeroPosition
    if (arr[i] !== 0) {
        var temp = arr[i];
        arr[i] = arr[nonZeroPosition];
        arr[nonZeroPosition] = temp;
        // Move the nonZeroPosition to the next index
        nonZeroPosition++;
    }
}

return arr;
