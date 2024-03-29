/*
JavaScript Sets

In JavaScript, a Set is a built-in object that allows you to store unique values of any type. 
This means that a Set can contain only distinct values, and any duplicate values are automatically ignored.

Sets are often used when you need to work with collections of unique elements and perform set operations 
like union, intersection, and difference.

In JavaScript, you can create a Set using three different approaches:
*/

// 1. Using the new keyword with the Set() constructor:
const mySet = new Set();

// 2. Initializing a Set with an array containing initial values using the new keyword and the Set() constructor:
const fruitsArray = ['apple', 'banana', 'orange'];
const fruitsSet = new Set(fruitsArray);

// 3. Using the Set Literal (Available from ECMAScript 6):
const myset1 = new Set(['a', 'b', 'c', 1]);
console.log(myset1);

for (let i of myset1){
    console.log(i);
}

/*
All three methods create a new Set, but they offer different ways to initialize the Set with initial values. 
The first method creates an empty Set, and you can later add elements using the .add() method. 
The second and third methods allow you to create a Set with initial values provided in an array, 
which is convenient when you have a collection of unique elements.
*/

// Set Operations
// 1. Adding and Removing Elements:
const mySet2 = new Set();

mySet2.add('apple');
mySet2.add('banana');
mySet2.add('orange');
mySet2.add('apple'); // Ignored, as 'apple' is already in the Set 
console.log(mySet2);

mySet2.delete('banana'); // Removes 'banana' from the Set
console.log(mySet2);

mySet2.clear(); // Removes all elements from a Set
console.log(mySet2);

/*
// Output
Set(3) { 'apple', 'banana', 'orange' }
Set(2) { 'apple', 'orange' }
Set(0) {}
*/


// 2. Checking if an Element is in the Set:
const mySet3 = new Set(['apple', 'banana', 'orange']);

console.log(mySet3.has('banana'));
console.log(mySet3.has('grape'));

// Output
// true
// false

// 3. Getting the Size of the Set:
const mySet4 = new Set(['🍎', '🍌', '🍊']);
console.log(mySet4.size);

// Output
// 3

// 4. Iterating through a Set:
const mySet5 = new Set(['🍎', '🍏', '🍌', '🍊']);

// Using forEach
mySet5.forEach((value)=>{
    console.log(value);
});

// Using for of loop
for(const fruit of mySet5){
    console.log(fruit);
}

// 5. Converting Set to Array:
const mySet6 = new Set(['🍌','🍊','🍇','🍏','🍎']);

const myFruitsArray = Array.from(mySet6);
console.log(myFruitsArray);

// Output
// ['🍌','🍊','🍇','🍏','🍎']

/*
Remember that Sets store elements based on their value's uniqueness, not the reference. 
So, objects with the same contents but different references will be considered unique in a Set.
*/

// For example:
const obj1 = { name: "Sudhanshu", age: 22 };
const obj2 = { name: "Sudhanshu", age: 22 };

const myObjSet = new Set();

mySet.add(obj1);
mySet.add(obj2);

console.log(mySet.size);
console.log(myObjSet);

// Output
// 2    // Even though obj1 and obj2 have the same contents, they are considered unique in the Set
