/*
The JSON Parser

In a world of data exchange, the people need a JavaScript function that can parse JSON strings and convert them into JavaScript objects. They seek the power to transform their data structures seamlessly, enabling communication and understanding between systems.

Write a JavaScript function called parseJSON that takes a JSON string as input and returns the corresponding JavaScript object. Assume that the input JSON string will always be valid.

Example 1:
Input:
{"name": "John", "age": 30, "isStudent": true}

Output:
{ name: 'John', age: 30, isStudent: true }

Example 2:
Input:
{"colors": ["red", "green", "blue"], "length": 3}

Output:
{ colors: ['red', 'green', 'blue'], length: 3 }

Example 3:
Input:
{"data": {"x": 10, "y": 20}, "isValid": false}

Output:
{ data: { x: 10, y: 20 }, isValid: false }
*/

// Do not remove nor make any changes in  main() function
function main() {
    var jsonString = readLine();
    console.log(parseJSON(jsonString));
}
function parseJSON(jsonString) {
  // Your code goes here
//   JSON.parse() is use to parse a JSON string back into a JavaScript object
  const parseObject = JSON.parse(jsonString);
  return parseObject;
}