/*
3. Sword-Fighting Math

+10 APs
unsolved
In a faraway kingdom, there lived a group of knights who loved to challenge each other in sword fights. However, one day, they decided to put down their swords and engage in a new challenge - the challenge of creating triangles.

The knights were given an array of positive integers, but the catch was that they had to find the number of triangles that could be formed with three different array elements as three sides of triangles. They were told that for a triangle to be possible from three values, the sum of any of the two values (or sides) must be greater than the third value (or third side).

The knights were puzzled at first, but soon they realized that they could use their knowledge of sword-fighting to solve the challenge. They imagined each integer in the array as a length of a sword, and then tried to find the possible combinations of swords that could form a triangle.

Example 1:
Input:
n = 3 arr[] = {3, 5, 4}

Output:
1

Explanation:
A triangle is possible with all the elements 5, 3 and 4.

Example 2:
Input:
n = 5 arr[] = {6, 4, 9, 7, 8}

Output:
10

Explanation:
There are 10 triangles possible with the given elements like (6,4,9), (6,7,8),...
*/
// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    var n = parseInt(readLine());
    console.log(findNumberOfTriangles(arr, n));
}
function findNumberOfTriangles(arr, n)
{
    // Your code goes here
        // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Initialize a variable to count triangles
    var count = 0;

    // Iterate through array elements
    for (var i = 0; i < n - 2; i++) {
        var k = i + 2;

        // Iterate for all other pairs
        // of elements
        for (var j = i + 1; j < n; j++) {
            // Find the rightmost element
            // which is smaller than the
            // sum of two fixed elements
            // The important part here is that the array is sorted
            while (k < n && arr[i] + arr[j] > arr[k]) {
                k++;
            }

            // All elements between j and k-1
            // form a triangle with arr[i] and arr[j]
            // as the other two sides
            count += k - j - 1;
        }
    }

    return count;
}