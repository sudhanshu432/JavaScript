/* 
Every thing in javaScript is an object 
Q-1:Wha is javaScript built on ? 
Ans: Object
*/
// JavaScript Objects and JSON
// JavaScript Object
/*
JavaScript's Object type is a data type that can be used to store collections of key-value pairs and more complex entities.
Keys are also called properties of an object.

In JavaScript, most objects are derived from Object, meaning they inherit properties, including methods, from Object.prototype. 
However, it's possible for these properties to be shadowed, or overridden, by properties with the same name in a derived object.

*/


let person = {
    name: "Sudhanshu Kumar",
    age: 22,
    college: "DIT UNIVERSITY",
    address: "Dehradun"
};
let person1 ={
    name: "Atish",
    age: 22,
    college: "Uttaranchal University",
    address: "Dehradun"
};

let personArr = ["Sudhanshu Kumar", "Atish", 22, 23];

console.log(`Name: ${person.name}, Age: ${person.age}, college: ${person.college}, Address: ${person.address}`);
console.log(`Name: ${person["name"]}`);

/* 
Here's an example of an object in JavaScript:

In this example, person is an object with three properties: firstName, lastName, and age.

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

*/

/* 
Object Declaration

In JavaScript, you can declare an object in two ways:
*/


/* 
1. Object literal method

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.firstName);
console.log(person.age);

// Output
"John"
30
*/

// 2. Object constructor method
let person2 = new Object();

person2.firstName = "Sudhanshu";
person2.middleName = "Kumar";
person2.lastName = "Singh";

console.log(person2.firstName);
console.log(person2.middleName);
console.log(person2.lastName);
// Output
// "Sudhanshu"
// "Kumar"
// "Singh"

/* 
Both of these methods will create an object with the same properties and values. However, using the object literal syntax is generally preferred because 
it is more concise and easier to read.
*/

/* 
Accessing Object Properties

Two main ways to access object properties are dot notation and bracket notation.
*/

/* 
1. Using dot Notation: 
Dot notation is used to access properties of an object using the dot (.) operator, followed by the property name. 
Syntax for Dot Notation is objectName.key.
*/
// Example:
let person3 = {
    name: 'Sudhanshu Kumar',
    age: 22,
    occupation: 'Developer'
  };
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.occupation);
  
// Output
// "Sudhanshu Kumar"
//  "age : 22"
// "occupation: 'Developer"

/* 
2. Using bracket Notation: 
Bracket notation is used to access object properties using square brackets ([ ]), with the property name as a string inside the brackets. 
Syntax for Bracket Notation is objectName["propertyName"].
*/
let person4 = {
    name: "Sudhanshu-Kumar-Singh",
    age: 22,
    occupation: "Developer"
};

console.log(person4["name"]);
console.log(person4["age"]);
console.log(person4["occupation"]);

// Output
// "Sudhanshu Kumar"
// 22
//  "Developer"

/* 
JavaScript Nested Objects

Objects can contain other objects as properties, known as Nested Objects.
*/
let person5 = {
    name: 'Sudhanshu Kumar',
    age: 22,
    address: {
        street: "123 doon street",
        city: "Dehradun",
        state: "Bihar",
        zip: "843128"
    }
};

/* 
In this example, the person object has a property called address, which is itself an object with properties street, city, state, and zip.

We can access these properties using either dot notation or bracket notation:
*/
console.log(person5.address.street);
console.log(person5['address']['city']);

// Output
// "123 doon street"
// "Dehradun"

/* 
We can also modify, add and remove (using delete keyword) properties of nested objects using dot notation or bracket notation:
*/
//  Modify existing properties in an object
person5.address.city = 'Othertown';
person5['address']['zip'] = '843128';

//  Add new properties to an object
person5.address.country = "India";
person['address']['phone'] = "7739244080";

// Remove properties from an object
delete person5.age;
delete person5['address']['phone'];
console.log(person5.age);