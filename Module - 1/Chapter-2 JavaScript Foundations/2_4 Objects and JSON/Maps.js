/*
JavaScript Maps

In JavaScript, a Map is a built-in object that allows you to store key-value pairs, 
where each key can be of any data type, and each value can also be of any data type. 
Maps are useful for associating data and performing lookups based on specific keys.

*/

// Map Operations
// Here's an overview of how to work with JavaScript Sets:

/*
1. Creating a Map: 
You can create a Map in JavaScript using the new keyword with the Map() constructor.
*/

const myMap = new Map();

/*
2. Adding and Removing Entries: 
To add key-value pairs to a Map, you can use the .set() method, and to remove entries, 
you can use the .delete() method.
*/
myMap.set('name', 'Sudhanshu');
myMap.set('age', 22);
console.log(myMap);

myMap.delete('age');
console.log(myMap);

myMap.clear();
console.log(myMap);

/*
// Output
Map(2) { 'name' => 'Sudhanshu', 'age' => 22 }
Map(1) { 'name' => 'Sudhanshu' }
Map(0) {}
*/

/*
3. Getting the Size of the Map: 
You can use the .size property to get the number of entries in the Map.
*/
const myMap1 = new Map([['name', 'John'],['age', 22]]);

console.log(myMap1.size);

// Output
// 2

/*
4. Checking if a Key Exists: 
To check if a specific key exists in the Map, you can use the .has() method.
*/
const myMap2 = new Map([
    ['name', 'Sudhanshu'],
    ['age', 22]
]);

console.log(myMap2.has('name'));
console.log(myMap2.has('gender'));

// Output
// true
// false


/*
5. Getting the Value for a Key:
To retrieve the value associated with a specific key, you can use the .get() method.
*/

const myMap3 = new Map([
    ['name', 'Sudhanshu'],
    ['age', 22]
]);

console.log(myMap3.get('name'));
console.log(myMap3.get('age'));

// Output
// 'Sudhanshu'
// 22

/*
6. Iterating through a Map: 
You can use various methods to iterate through the entries of a Map, such as forEach() and for...of loop.
*/

const myMap4 = new Map([
    ['name', 'Sudhanshu'],
    ['age', 22]
]);

// Using for of loop
for(let [key, value] of myMap4){
    console.log(`Line: 99 ${key}: ${value}`);
}

/*
7. Converting Map to Array: 
To convert a Map into an array of key-value pairs, you can use the Array.from() method.
*/

const myMap5 = new Map([
    ['name', 'John'],
    ['age', 22]
]);

const entriesArray = Array.from(myMap5);
console.log(entriesArray);

// Output
// [ [ 'name', 'John' ], [ 'age', 22 ] ]

/*
Remember that unlike objects, Maps maintain the insertion order of elements, making them suitable for scenarios where order matters. 
Additionally, Maps allow you to use any data type as keys, making them more versatile than objects for certain use cases.
*/