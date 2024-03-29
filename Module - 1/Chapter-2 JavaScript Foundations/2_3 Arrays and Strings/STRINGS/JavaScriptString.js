/*
JavaScript String
JavaScript string is made up of a sequence of UTF-16 units.
String is a type of primitive data that is used to manipulate text.
Strings in JavaScript are immutable, which means once they are created, their values cannot be changed.
*/
// For instance:
const name = 'John';
console.log(name);

/* 
String Operations
Create JavaScript Strings
To create a string in JavaScript, surround the text with quotes.
There are three options to choose from:
Single quotes: 'Hello, World'
Double quotes: "Hello, World"
Template Literals (Backticks): `Hello, World`
*/
// For example:
// string example
let singleQuoteString = 'This is a string using single quotes.';
let doubleQuoteString = "This is a string using double quotes.";
let templateLiteralString = `This is a string using a template literal.`;
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);

/* 
Single or double quotes are preferred, as they have practically the same function.
Backticks are commonly used to incorporate variables or expressions into a string. 
The ${} syntax is used to interpolate the values of the variables into the string.
*/

const name1 = "Ryan";
const age = 28;

console.log(`My name is ${name1} and I am ${age} years old.`);

// Output
// My name is Ryan and I am 28 years old.

/*
Access String Characters
There are two ways to access the characters in a string.
*/

// 1. First approach is to treat strings as if they were arrays.
const a = 'hello';
console.log(`Line: 50  ${a[1]}`); // "e"
// Using for loop
for(let i of a){
    console.log(i)
}

// 2. Another option is to use the charAt() method. 
const a1 = 'hello';
console.log(`Line-57: ${a1.charAt(0)}`); // "e"
/* 
String Properties

*/

// 1. JavaScript Strings are immutable

// In JavaScript, strings are immutable, meaning their characters cannot be changed. 
let a2 = "hello";
a[0] = "k";
console.log(a); //hello will be printed kello will be not printed because  strings are immutable
// But we can do is we can change the value of a2
a2 = "sudhanshu";
console.log(a2);

/* 
2. JavaScript String is Case-Sensitive

It's important to remember that capitalizing letters matters. 
Lowercase and uppercase letters are treated as separate values. 

*/

const a3 = 'a';
const a4 = 'A';
console.log(a3 === a4); // false

/* 
In JavaScript, remember that a and A are considered distinct values.
*/

/* 
3. JavaScript Multiline Strings

You have two options to use a multiline string: the + operator or the \\ operator.
*/

// using the + operator
const message1 = 'This is a long message' + ' that spans across multiple lines' + ' in the code';
console.log(message1);

// using the \ operator
const message2 = 'This is a long message \ that spans across multiple lines \ in the code';
console.log(message2);

// using the \n operator
const message3 = 'This is a long message \n that spans across multiple lines \n in the code';
console.log(message3);

/* 
4. JavaScript String Length

To determine the length of a string, you can utilize the built-in length property. 
*/
const a5 = 'hello';
console.log(a.length); // 5;
 