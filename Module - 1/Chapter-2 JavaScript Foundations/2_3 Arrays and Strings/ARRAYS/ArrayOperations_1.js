/*
Array Operations

Creating an Array:
In JavaScript, there are two ways to create an array:

1. Array literal:
        This is the most common way to create an array, using square brackets [] and placing the array elements inside the brackets, 
        separated by commas. 
                                Example: let fruits = ['apple', 'banana', 'orange'];

2. Array Constructor
        An alternative method to create an array involves using the Array() constructor with the new keyword. With this approach, 
        the length of the array needs to be specified as an argument.
                                Example: let numbers = new Array(3); // creates an empty array with a length of 3


Note: It is recommended to create arrays using array literals instead of other methods.
 
*/

// 1. Array literal: Creating an Array
let fruits = ['apple', 'banana', 'orange'];

// Accessing Array Elements

// Method-1
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// console.log(fruits[3]); // this line will return undefined because we dont have any any element at 3rd intex

// Method-2
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Method-3
for(let i of fruits){
    console.log(i);
}

// Method-4
for(let i in fruits){
    console.log(fruits[i]);
}

/*
Adding Element to an Array

1. The push() method inserts an element to the array's last index.
2. The unshift() method inserts an element at the beginning of the array

*/
// 1. The push() method inserts an element to the array's last index.
// print the last element of array fruits
console.log(fruits[fruits.length-1]); // Output: Orange
//Now use push() Method and add cherry at the last
fruits.push("cherry");
// Now again print the last  element array fruits

// 2. The unshift() method inserts an element at the beginning of the array
// Print first element in array 
console.log(fruits[0]);
// use unshift() Method and add a element on first index
fruits[0] = "pear";
console.log(fruits[0]);

/*
Removing Array Element 

1. By using the pop() method, you can remove the final element from the array while also receiving its returned value.
*/
// For example:
// Print all elements of array fruits
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// Here as we can see last elemnt is cherry 
// Use pop() to remove cherry
fruits.pop();
for( let i of fruits){
    console.log(i); 
}
// Now last element is orange cherry is removed

/*
The shift() method will remove the first element and returns the removed element as its returned value.
*/
// For example:
let fruit = ['apple', 'banana', 'orange'];
console.log(fruit);
let removedFruit = fruit.shift();

console.log(fruit);         // Output: ['banana', 'orange']
console.log(removedFruit);   // Output: 'apple'

/*
Length of an Array
The length of an array can be obtained using the length property of the array.
*/
// For example:
let myArray = ["apple", "banana", "orange"];

console.log(myArray.length); // Output: 3

/*
An array in JavaScript can contain not only simple data types but also more complex ones, such as arrays, functions, and other objects. 

*/
// For example:
let exampleArray = [
    1, "Hello", true, [2, 4, 6],
    {
      name: "John",
      age: 30
    },
    function() {
      console.log("This is a function inside an array");
    }
  ];
  
  console.log(exampleArray[3][1]); // Output: 4
  
  exampleArray[5](); // Output: This is a function inside an array