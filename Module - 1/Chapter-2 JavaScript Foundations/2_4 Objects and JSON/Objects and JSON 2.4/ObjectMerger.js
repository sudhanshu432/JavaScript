/*
The Object Merger

In a world of data amalgamation, the people need a JavaScript function that can merge two objects into a single, unified object. They seek to combine the strengths of multiple objects to create a comprehensive data structure.

Write a JavaScript function called mergeObjects that takes two objects as inputs and returns a new object that combines the properties of both objects. If there are overlapping properties, the value from the second object should take precedence.

Example 1:
Input:
{ "name": "John", "age": 30 }

{ "isStudent": true, "age": 25 }

Output:
{ name: "John", age: 25, isStudent: true }

Example 2:
Input:
{ "a": 1, "b": 2 } { "c": 3 }

Output:
{ a: 1, b: 2, c: 3 }
*/
// Do not remove nor make any changes in  main() function
function main() {
    var obj1 = JSON.parse(readLine());
    var obj2 = JSON.parse(readLine());
    console.log(mergeObjects(obj1,obj2));
}
function mergeObjects(obj1, obj2) {
  // Your code goes here
//   Object.assign():
//   This method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
  Object.assign(obj1, obj2);
  return obj1;
}