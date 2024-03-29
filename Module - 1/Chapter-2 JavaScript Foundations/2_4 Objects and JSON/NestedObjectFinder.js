/*
The Nested Object Finder

In a world of complex data structures, the people need a JavaScript function that can find the value of a given property within a nested object. They seek to explore the depths of their data and retrieve valuable information.

Write a JavaScript function called findNestedValue that takes an object and a string representing the property path as inputs. The property path will be a dot-separated string, representing the hierarchy of nested properties.

The function should return the value of the property if found within the nested object. If the property is not found or any intermediate property is not an object, the function should return null.

Example 1:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.name

Output:
John

Example 2:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.address.city

Output:
New York

Example 3:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.address.postalCode

Output:
null
*/
const obj = {"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}};

console.log((obj.name));