/*
6. XOR of two numbers
XOR of two numbers is a bitwise operator that returns 1 if the corresponding bits of its operands are different, and 0 if they are the same. For example, the XOR of 5 (in binary 101) and 3 (in binary 011) is 6 (in binary 110), because the first and third bits are different in the operands.

Once upon a time, there was a problem where we had to find the XOR of two integers without using the XOR operator. This was a tricky problem because XOR is a commonly used operator for finding the XOR of two integers. However, we had to find a solution without using it.

Example 1:
Input:
x = 1, y = 2

Output:
3

Example 2:
Input:
x = 3, y = 5

Output:
6
*/
// Do not remove nor make any changes in  main() function
function main() {
    var x = parseInt(readLine());
    var y = parseInt(readLine());
    console.log(myXOR(x, y));
}
function myXOR(x, y)
{
  // Your code goes here
  // Initialize result to 0
    var result = 0;

    // Iterate through each bit position
    for (var i = 31; i >= 0; i--) {
        // Extract the i-th bit of x and y
        var bitX = (x & (1 << i)) >> i;
        var bitY = (y & (1 << i)) >> i;

        // Calculate the XOR of the i-th bits and set the result
        result |= (bitX ^ bitY) << i;
    }

    return result;
}