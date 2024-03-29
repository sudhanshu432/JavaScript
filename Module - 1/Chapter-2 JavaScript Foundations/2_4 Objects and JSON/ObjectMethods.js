/* 
JavaScript Object Methods

JavaScript objects are collections of properties, and properties can be either values or functions. 
Functions that are attached to objects are called object methods.
Here are some commonly used object methods in JavaScript
*/

/* 
1. Object.keys(): This method returns an array of all the keys (property names) of an object.
*/
console.log("1. Object.keys():");
const obj1 = {name: "Sudhanshu Kumar", age:22};
const keys = Object.keys(obj1);
console.log(`Line-15: ${keys}`);
console.log(`Line-16: ${Object.keys(obj1)}`);

// 2. Object.values(): 
// This method returns an array of all the keys (property names) of an object.
console.log("2. Object.values(): ");
const obj2 = {name: "Sudhanshu Kumar", age:22};
const vlauesOfObj2 = Object.values(obj2);

console.log(`Line-24: ${vlauesOfObj2 }`);
console.log(`Line-25: ${Object.values(obj2)}`);

// 3. Object.entries(): 
// This method returns an array of arrays, where each sub-array contains a key-value pair of the object.
const myObj = {name: "Sudhanshu", age: 30};
const entries = Object.entries(myObj);

console.log(entries);

// Output
// [["name", "John"], ["age", 30]]


// 4. Object.assign(): 
// This method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
const targetObj = {name: "Sudhanshu"};
const sourceObj = {age: 30};
Object.assign(targetObj, sourceObj);

console.log(targetObj);

// Output
/*
{ 
  name: "Sudhanshu",
  age: 30
}
*/

// 5. Object.freeze(): 
// This method is used to prevent an object from being modifying.
const myObj1 = {name: "Sudhanshu", age: 30};
Object.freeze(myObj1);
myObj1.age = 40; // This will not modify the object

console.log(myObj1);

// Output:
/* 
{
    name: "Sudhanshu",
    age: 30
}
*/

// 6. Custom method: 
// An object can contain a function as one of its properties. 
// These functions are called methods when they are attached to an object.

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine: function(){
        console.log("Engine started!");
    }
};

car.startEngine();

// Output
// Engine started!

/*
In this example, we define an object car with properties for its make, model, and year. 
We also define a method startEngine that simply logs a message to the console when invoked.

To invoke the method, we use the object's name (car) followed by the method name (startEngine) and parentheses ().

objectName.methodKey();     // Dot Notation
objectName["methodKey"]();  // Bracket Notation
*/

/*
1. Accessing Object Property: You can access property by calling an objectName and a key.

2. Accessing Object Method: You can access a method by calling an objectName and a key for that method along with ().
*/

// Example:
const person1 = {
    name: "Sudhanshu Kumar",
    age: 22,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
};

// Accessing Object Property
console.log(person1.name);

// Accessing Object Method
person1.greet();

// Output
// "Sudhanshu"
// "Hello, my name is Sudhanhsu and I am 22 years old."

/*
Here, the greet method is accessed as person.greet() instead of person.greet.

If you try to access the method with only person.greet, it will give you a function definition.
*/
console.log(person1.greet);
/* 
// Output:
function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
*/

/*
Adding Object Methods

You can also add a method in an object.
*/
// For example:
// Creating an object
let student = {};

// adding a property
student.name = 'John';

// adding a method
student.greet = function(){
    console.log("Hello");
};

// accessing a method
student.greet(); // Hello

console.log(student.name); // Output: 
                          //    John

/*
In the above example, an empty student object is created. 
Then, the name property is added. Similarly, the greet method is also added. 
In this way, you can add a method as well as a property to an object.
*/

//  "this" keyword
/*
To access a property of an object from within a method of the same object, you need to use the this keyword.
*/
// For example:

// Define an object called "person"
let person2 = {
    name: "Rocky",
    age: 22,
    sayHello: function(){
        console.log("Hello, my name is " + this.name + "."); // Accessing the "name" property using "this"
    }
};

person2.sayHello(); // Calling the "sayHello" method on the "person" object

// Output
// "The name is Rocky"

// Explanation :
/*
In order to access the properties of an object, this keyword is used following by . and key. 
However, the function inside of an object can access its variable in a similar way as a normal function would.
*/
// For example:
const person3 = {
    name: "Sudhanshu",
    age: 22,
    greet: function(){
        let surname = 'Kumar';
        console.log('The name is '+''+this.name+' '+surname);
    }
};

person3.greet();

// Output
// "The name is Sudhanshu Kumar"