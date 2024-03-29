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
// Do not remove nor make any changes in  main() function
function main() {
	var obj = JSON.parse(readLine());
        var propertyPath = readLine();
        console.log(findNestedValue(obj, propertyPath));
}
function findNestedValue(obj, propertyPath) {
  // Your code goes here
      // Split the property path into an array of property names
    const properties = propertyPath.split('.');

    // Iterate through the properties to find the nested value
    let currentObj = obj;
    for (const prop of properties) {
        if (currentObj && typeof currentObj === 'object' && prop in currentObj) {
            currentObj = currentObj[prop];
        } else {
            // Return null if the property is not found or if an intermediate property is not an object
            return null;
        }
    }

    // Return the final nested value
    return currentObj;

}