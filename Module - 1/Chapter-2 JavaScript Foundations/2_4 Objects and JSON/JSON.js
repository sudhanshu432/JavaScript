/* 
JavaScript Object Notation (JSON) is a lightweight data interchange format that is easy for both humans and machines to read and write. It is primarily used to transmit data between a server and a web application as an alternative to XML.

It is language-independent and widely supported in various programming languages, making it an ideal choice for data exchange over the web.
JSON data is represented as key-value pairs similar to JavaScript objects, and it follows a specific syntax:

Data is enclosed in curly braces {}.
Each data item is represented as a key-value pair separated by a colon :.
Keys (also known as properties) must be strings enclosed in double quotes ".
Values can be strings, numbers, booleans, null, arrays, or other JSON objects.
Data items are separated by commas ,.

*/

// Here's a simple example of JSON data representing information about a person:
/*
{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "isMarried": false,
    "hobbies": ["reading", "painting", "traveling"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    }
  }

*/
/*
JavaScript provides built-in methods to work with JSON: 

JSON is a native part of the language, so parsing and serialization are straightforward tasks using JSON.parse() and JSON.stringify() methods, respectively.
*/
/*
1. JSON.stringify(): 
This method is used to convert a JavaScript object or value to a JSON-formatted string.

2. JSON.parse(): 
This method is used to parse a JSON-formatted string and convert it back into a JavaScript object or value.
*/
// For Example:
// To convert a JavaScript object to a JSON string

const person = {
    name : "Sudhanshu Kumar",
    age: 22,
    email: "sudhanshuk497@gmail.com"
};

const jsonStr = JSON.stringify(person);
console.log(jsonStr);

// Output:
// {"name":"Sudhanshu Kumar","age":22,"email":"sudhanshuk497@gmail.com"}

// And to parse a JSON string back into a JavaScript object
const jsonString = '{"name":"Sudhanshu Kumar","age":22,"email":"sudhanshuk497@gmail.com"}';

const parseObject = JSON.parse(jsonString);

console.log(parseObject.name);
console.log(parseObject.age);
console.log(parseObject.email);
console.log(parseObject);

// Output
// "Sudhanshu Kumar"
// 22
// "sudhanshuk497@gmail.com"

/*
JSON vs JavaScript Objects

Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.

Feature                             JSON                                                                               JavaScript Object
Format                       Text-based format with strict syntax rules.                                       JavaScript native data type.
Keys                            Must be enclosed in double quotes.                                           Can be strings or symbols.
Property Assignment            Assignment with : between key and value.                                     Assignment with : between key and value.
Methods                       No methods or functions allowed.                                              Can have methods (functions) associated with the object.
Data Types                  Supports a limited set of data types: strings,                                  numbers, booleans, arrays, objects, and null.        Supports all JavaScript data types, including functions, and can hold references to other objects.
Duplicate Keys              Not allowed, each key must be unique.                                          Allowed, but duplicate keys will overwrite previous ones.
Data Serialization        Used for data interchange between different systems and programming languages.          Used for organizing data and implementing functionality within JavaScript code.
Usage                        Commonly used for data exchange with servers and APIs.                         Widely used for data manipulation and storage within JavaScript applications.

*/

/*
In summary, JSON is primarily used for data exchange between different systems, while JavaScript objects are an integral part of JavaScript and are used 
for data organization and manipulation within JavaScript code. JSON has a strict syntax and supports a limited set of data types, whereas 
JavaScript objects have more flexibility in terms of data types and can contain methods for performing actions.

According to BuiltWith, JSON is used by over 1.8 million websites, making it one of the most widely used data formats on the web.
*/

// Summary
// What did we learn?
/*
JavaScript objects are fundamental data type in the language and allow you to represent complex data structures, including arrays, functions, and even other objects. 

Objects can be created using the object literal syntax {key1: value1, key2: value2, ...} or using the Object constructor. 

They provide a flexible and versatile way to organize and store data in JavaScript and are widely used for tasks such as storing collections of data, 
organizing code into modules, and more.

You can access properties of an object using either dot notation object.property or bracket notation object["property"].

Object methods are functions that are associated with an object and can be invoked using the dot notation or bracket notation.

They can access the object properties and other methods within the same object using the this keyword.

Sets in JavaScript are a collection of unique values. They are similar to arrays, but each value in a set must be unique.

Maps in JavaScript are collections of key-value pairs. Unlike sets, maps allow you to store values with a specific key and retrieve values by that key.

The JavaScript Object Notation (JSON) is a lightweight format utilized for the exchange of data that can be effortlessly comprehended and produced 
by both human beings and machines.

JSON objects could be converted to JavaScript objects using the JSON.parse() method, and JavaScript objects can be converted to JSON using the JSON.stringify() method.

*/

// Shortcomings & Challenges
/*
Dynamically adding or removing properties from an object can create challenges in maintaining the object's structure and comprehending its properties.

Maps do not enforce any type restrictions on keys, which can lead to unexpected results if the keys are not of the expected type.

JSON only supports a limited set of data types, including numbers, strings, arrays, and objects.

JSON does not support JavaScript functions, so it is not possible to store a function in a JSON object.

*/
// Best practices to follow
/*
Store related data together in an object, to help reduce the amount of redundant data in your code.

Avoid using objects as associative arrays, where the keys are not meaningful and only serve as indices into the array. Instead, use arrays for this purpose.

Use the Object.freeze method to prevent objects from being modified.

Validate JSON strings before parsing them to ensure that they are valid and conform to the expected structure.
*/