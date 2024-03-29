/*
Multidimensional Array
A multidimensional array is an array that holds one or more arrays as its elements.
*/
// For instance:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix);

// let matrix_1 = [
//     [1,1,1,1],
//     [2,1],
//     [1,2,3,4],
//     [1,2,321,1]
// ];
// console.log(matrix_1);

/*
Create a Multidimensional Array

Example: We have created a 2-dimensional array called myArray with three rows and two columns. 
Each row is an array containing two strings.
*/
const myArray = [];
myArray.push(["apple", "orange"]);
myArray.push(["grape", "pear"]);
myArray.push(["pineapple", "mango"]);

console.log(myArray);

/* Output
[["apple", "orange"], ["grape", "pear"], ["pineapple", "mango"]]


/*

Access Elements of Multidimensional Array

The elements belonging to the multidimensional array can be accessed using indices (0, 1, 2, etc.).

*/
// For example:
let x = [
    ['Jack', 24],
    ['Sara', 25],
    ['Peter', 26]
    ];
    
    // accessing the first item
    console.log(x[0]); // ["Jack", 24]
    
    // accessing the first item of the first inner array
    console.log(x[0][0]); // Jack
    
    // accessing the second item of the third inner array
    console.log(x[2][1]); // 26

/* 
Add an Element to Multidimensional Array

Array's push() method or an indexing notation can be used to add elements to a multi-dimensional array.
*/
// 1. Adding Element to the Outer Array
console.log(" 1. Adding Element to the Outer Array")
let studentData = [['Jack', 24], ['Sara', 23],];
studentData.push(['Mark', 24]);

console.log(studentData); //[["Jack", 24], ["Sara", 23], ["Mark", 24]

// 2. Adding Element to the Inner Array
// 1. Using Index Notation
console.log("2. Adding Element to the Inner Array");
console.log("1. Using Index Notation");
studentsData = [['Jak', 23], ['Sara', 24],];
studentsData[1][2] = 'hello';

console.log(studentsData); // [["Jack", 23], ["Sara", 24, "hello"]]

// 2. Using push() method
console.log("2. Using push() method");
studentsData = [['Jack', 23], ['Sara', 24],];
studentsData[1].push('hello');

console.log(studentsData); // [["Jack", 23], ["Sara", 24, "hello dear"]]

// 3. An element can be added at a specific index using the splice() method of an array.
studentsData = [['Sara', 23],['Jack', 24],];
console.log("splice() method");
// adding element at index 1
studentsData.splice(1, 0, ['Mark', 24]);

console.log(studentsData); // [['Sara', 23], ["Mark", 24], ['Jack', 24]]

/*
Remove an Element from a Multidimensional Array
Array's pop() method can be used to remove an element from a multi-dimensional array. 
*/

// 1. Remove Element from Outer Array
/*
Array's pop() method can be used to remove an element from a multi-dimensional array. 
*/

// 1. Remove Element from Outer Array
console.log("1. Remove Element from Outer Array");
studentsData = [['Jack', 23], ['Sara', 24],];
console.log(studentData);

studentData.pop();
console.log(studentData);

// 2. Remove Element from Inner Array
console.log("2. Remove Element from Inner Array");
let studentData2 = [['Jack', 25], ['Sarah', 23]];
console.log(studentData2);
studentData2[1].pop();

console.log(studentData2); // [["Jack", 25], ["Sarah"]]

/*
Using the splice() method of an array, it is possible to remove an element at a particular index.
*/
console.log("splice()");
studentsData = [['Jack', 24], ['Mark', 23]];
console.log(studentData);
// removing 1 index array item
studentsData.splice(1,1);
console.log(studentsData); // [["Jack", 24]]

// Iterating over Multidimensional Array
/*
1. To iterate over a multidimensional array, you can use the forEach() method of the Array object.
*/

// For example:
studentsData = [['Ryan', 24], ['Sara', 23],];

// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

// Output
// Ryan
// 24
// Sara
// 23

/*
The outer array elements are iterated using the first forEach() method, 
while the inner array elements are iterated using the second forEach() method.
*/

/* 
2. Iterating over a multidimensional array can also be achieved using the for...of loop.
*/
// For example:
let studentsData = [['Ryan', 24], ['Sara', 23]];

for (let i of studentsData) {
  for (let j of i) {
    console.log(j);
  }
}

/* 
3. To iterate over a multidimensional array, you can also use a for() loop.
*/
// For example:
studentsData = [['Ryan', 24], ['Sara', 27]];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // gives the length of the inner array elements
    let innerArrayLength = studentsData[i].length;

    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}