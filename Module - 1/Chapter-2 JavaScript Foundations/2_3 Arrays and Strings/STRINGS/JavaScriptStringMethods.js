// JavaScript String Methods
/* 
Below are some commonly used methods for working with strings in JavaScript:

Method:
1. length():	
Description:
Returns the length of the string
Example:
"hello".length returns 5
*/
const hello = 'hello';
console.log(`1. length(): ${hello.length}`);

/* 
2. toUpperCase():	
Description:
Returns the string with all characters converted to uppercase letters.
Example:
"hello".toUpperCase() returns "HELLO"
*/
console.log(`2. toUpperCase(): ${hello.toUpperCase()}`);
/*

3. toLowerCase():
Description:
Returns the string with all characters converted to lowercase letters
Example:
"HELLO".toLowerCase() returns "hello"
*/
const hello1 = 'HELLO';
console.log(`3. toLowerCase(): ${hello1.toLocaleLowerCase()}`);
/*

4. indexOf(substr):
Description:
Returns the index of the first occurrence of a substring in the string
Example:
"hello".indexOf("e") returns 1
*/
// Method-1
console.log("4. indexOf(substr):");
console.log("sudhnahsu".indexOf("s")); // 0
console.log("sudhnahsu".indexOf("S")); // -1 because capital 'S' is not present in string
// Method-2
let name = "sudhnahsuKumar";
let ind = name.indexOf("s");
console.log(ind);
console.log(name.indexOf("K"));

/*
5. concat():
Description:
Joins two or more strings and returns a new string.
Example:
'hello'.concat(' ', 'world') returns 'hello world'
*/
// Method-1
console.log("5. concat():");
console.log("hello".concat(' ','world'));
//Method-2
let greet = "Hello";
console.log(greet.concat(',',' Sudhanshu Kumar'));
// Method-3
let greet1 = "HELLO";
let name1 = " SUDH";
let greet2 = " WELCOME";
let finalGreet = greet.concat(name1,greet2);
console.log(finalGreet);
// Method-4
let greet3 = " dear"
let finalGreet2 = greet1.concat(name1,greet2, greet3);
console.log(finalGreet2);

/*
6. slice(start, [end]):
Description:
Extracts a portion of the string and returns it as a new string
Example:
"hello".slice(1, 3) returns "el"
*/
console.log("6. slice(start, [end]):");
console.log("sudhanshuKumar".slice(6,7)); // 7 is excluded 
let name4 = "SUDHANSHUKUMAR";
console.log(name4);
console.log(name4.slice(1,6));

/*
7. charAt(index):
Description:
Returns the character at a specified index in the string
Example:
"hello".charAt(1) returns "e"
*/
console.log("7. charAt(index):");
const name5 = "ATISH";
console.log(name5[4]);
console.log(name5.charAt(1));
let strNameReverse = "";
console.log(strNameReverse);
for(let i = name5.length-1; i>=0; i--){
    strNameReverse+= name5[i];
}
console.log(strNameReverse);

/*
8. replace(searchValue, replaceValue):
Description:
Replaces a substring in the string with another substring and returns the new string
Example:
"hello".replace("e", "a") returns "hallo"
*/
console.log("8. replace(searchValue, replaceValue):");
let name6 = "lol";
name6.replace('L', 'k');
console.log(name6);

name6.replace('l', 'k');
console.log(name6); // String in javaScript are immutable data type
console.log(name6.replace('L','K'));
console.log(name6.replace('l','k'));
let newStr = name6.replace('l','k');
console.log(newStr);


/*
9. split([separator]):
Description:
Splits the string into an array of substrings, optionally using a separator
Example:
"hello world".split(" ") returns ["hello", "world"]
*/
console.log("9. split([separator]):")
let name7 = "Sudhanshu Kumar Singh";
console.log(name7.split(" "));
let listName7 = name7.split(" ");
for (let i of listName7){
    console.log(i);
}
// Reverse the name by  first name middle name and last name
console.log(`Length of listName7: ${listName7.length}`);
let listName7Reverse = "";
for (let i = listName7.length-1; i>=0; i--){
listName7Reverse += listName7[i] + " ";
}
console.log(listName7Reverse);

/*
10. trim():
Description:
Removes whitespace from both ends of the string
Example:
" hello ".trim() returns "hello"
*/
console.log("10. trim():");
console.log("     hello".trim());
let name9 = "    sudhanshu kumar";
console.log(name9.trim());

/* 
These methods provide various ways to manipulate strings in JavaScript, such as finding specific characters or substrings, 
joining multiple strings together, or converting a string to all lowercase or uppercase.

// 1. JavaScript String() Function

The String() function converts different data types to strings. 

*/
// For instance:
console.log("1. JavaScript String() Function: ");
let  a = 255;
console.log(`Type of a = 255 is : ${typeof(a)}`);
console.log("Convert it in string");
a = String(a);
console.log(`Line 175: ${typeof(a)}`);


/* 
2. Escape Character

To include special characters in a string, you can use the escape character \, 
also known as a backslash.
*/
// For example:
console.log("2. Escape Character: ");
const name10 = 'My name is \'Peter\'.';
console.log(`O/p: ${name10}`);   // My name is 'Peter'.
