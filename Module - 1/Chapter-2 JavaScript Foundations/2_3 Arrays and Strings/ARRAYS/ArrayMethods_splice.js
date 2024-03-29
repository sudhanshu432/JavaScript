/*
In JavaScript, the splice() method is used to modify an array by adding or removing elements. The basic syntax of the splice() method is as follows:

// array.splice(start, deleteCount, item1, item2, ...);

start: The index at which to start changing the array.
deleteCount: An integer indicating the number of elements to remove from the array.
item1, item2, ...: The elements to add to the array, starting at the start index.

Here's an example to illustrate how to use splice():

*/
// Code:
// Initial array
let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log("Line-16: ",fruits);
// Insert an element at index 2 (cherry)
fruits.splice(2, 0, 'grape');
console.log("Line-17: ",fruits); // Output: ['apple', 'banana', 'grape', 'cherry', 'date']

// Remove 1 element at index 3 (cherry)
fruits.splice(2, 1);
console.log("Line-13: ",fruits); // Output: ['apple', 'banana', 'grape', 'date']

// Replace 1 element at index 1 (banana) with 'kiwi'
fruits.splice(2, 1, 'kiwi');
console.log("Line-27: ",fruits); // Output: ['apple', 'kiwi', 'grape', 'date']

fruits.splice(2,0,"Add2nd", 'Add3rd');
console.log("Line-30: ",fruits);

// fruits.splice(2,1,1,"Add2.1nd", 'Add3.1rd');
// console.log("Line-33: ",fruits);
/*
In the first example, we insert the element 'grape' at index 2 without removing any elements. 
In the second example, we remove one element starting from index 3. 
In the third example, we replace the element at index 1 with 'kiwi'.
*/