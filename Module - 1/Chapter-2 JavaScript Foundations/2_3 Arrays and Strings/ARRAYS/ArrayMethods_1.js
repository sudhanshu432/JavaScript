/*
Array Methods
JavaScript has several array methods that can be used to perform calculations and data manipulation.
*/
/*
1. push()
Description: Appends one or multiple elements to the end of an array.
Example: arr.push(4);
*/
console.log("1. push()");
let arr = [];
arr.push(3);
arr.push(4);
console.log(arr);

/*
2.pop()
Description: Eliminates the final element from an array, returning it.
Example: const last = arr.pop();
*/
console.log("2.pop()");
arr.pop();
console.log(arr);

/*
3. shift()
Description: Takes out the initial element from an array and gives it back.
Example: const first = arr.shift();
*/
console.log("3. shift()");
let arrTest = [1,2,3,4,5];
console.log(arrTest);
arrTest.shift();
console.log(arrTest);

/*
4. unshift()
Description: Inserts one or several elements at the start of an array.
Example: arr.unshift(1);
*/
console.log("4. unshift()");
console.log(arrTest);
arrTest.unshift(1);
console.log(arrTest);

/*
5. slice()
Description: Provides a shallow duplicate of a part of an array.
Example: const subArr = arr.slice(1, 3); // Here 3 is excluded
*/
console.log("5. slice()");
let arrForSlice = [11,12,13,14,15,16,17,18,19,20];
console.log(arrForSlice);
let dumyArr = arrForSlice.slice(1,4);
console.log(dumyArr);
console.log(arrForSlice.slice(1,2));

let animals = ["ant", "bison", "camel", "duck", "elephant"];
const newArr1 = animals.slice(2); // this will store 2nd intex to last
console.log(animals);
console.log(newArr1);

const newArr2 = animals.slice(1, 4); // this will store index 1 to 4-1
console.log(newArr2);

const newArr3 = animals.slice(-3); // This will store index 3rd last to 1
console.log(newArr3);


/*
6. splice()
Description: Inserts and/or deletes elements within an array.
Example: arr.splice(1, 0, 2, 3);
*/
console.log("6. splice()");
let months = ["Jan", "March", "April", "June"];
console.log("Months: ", months);

months.splice(1, 0, "Feb"); // This will add Feb at 1 index
console.log("Months modified: ", months);

months.splice(4, 1, "May"); // This will replace 4th indexed element with May
console.log("Months modified 2: ", months);
/*
7. indexOf()
Description: Gives back the first index where a specified element is located.
Example: const index = arr.indexOf(3);
*/
console.log("7. indexOf() '🐒'");
let animal = ["🐒", "🐮", "🐷"];
console.log(animal);
let indexOfMonkey = animal.indexOf("🐒");
console.log(indexOfMonkey);
console.log(animal.indexOf("🐷"));
animal.push("🐐");
animal.push("🐟");
animal.push("🐒");
animal.push("🦓");
animal.push("🐐");

console.log(animal);
console.log(animal.indexOf("🐒"));
console.log(animal.lastIndexOf("🐒"));


/*
8. lastIndexOf()
Description: Supplies the final index where a particular element is situated.
Example: const lastIndex = arr.lastIndexOf(3);
*/
console.log("8. lastIndexOf() '🐒'");
console.log(animal);
console.log(animal.indexOf("🐒"));
console.log(animal.lastIndexOf("🐒"));

/*
9. includes()
Description: Establishes if an array contains a specific element.
Example: const isIncluded = arr.includes(2);
*/
console.log("9. includes() '🐒");
console.log("Line-124: ",animal.includes("🐒"));
/*
10. find()
Description: Offers the initial element in the array that meets a certain criterion.
Example: const found = arr.find(num => num > 2);
*/
console.log("10. find() ");
const arrFind = [14, 23, 29, 100, 51, 55];

const foundVal = arrFind.find(function (e) {
  if (e > 50) {
    return e;
  }
});
console.log(foundVal);

/*
11. filter()
Description: Forms a new array containing elements that pass a certain test.
Example: const filtered = arr.filter(num => num > 2);
*/
console.log("11. filter()");

const found_Val = arrFind.filter(function (e) {
    if (e > 50) {
      return e;
    }
  });

console.log(found_Val);

/*

12. map()
Description: Produces a new array by applying a function to each array element.
Example: const doubled = arr.map(num => num * 2);
*/
console.log("12. map()");
const twosArr = [2, 4, 6, 8, 10];
// for loop
// forEach

const fivesArr = twosArr.map(function (e) {
  return e * 5;
});

console.log(fivesArr);
/*
13. reduce()
Description: Condenses an array into a single value using a function.
Example: const sum = arr.reduce((acc, num) => acc + num, 0);
*/
console.log("13. reduce()");
let arrReduceEx = [1, 2, 3, 4];
const initialValue = 0;

const sumWithValues = arrReduceEx.reduce(function (acc, currVal) {
  return acc + currVal;
}, initialValue);

console.log("sumWithValues: ", sumWithValues);
/*
14. concat()
Description: Unites two or more arrays into a fresh array.
Example: const merged = arr1.concat(arr2);
*/
console.log("14. concat()");
// Example of using concat() method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatenatedArray = array1.concat(array2);

console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

/*
15. join()
Description: Combines all elements of an array into a single string.
Example: const str = arr.join(', ');
*/
console.log("15. join()");
const elements = ["Fire", "Air", "Water"];
const str = elements.join("*");
console.log(str, typeof str);
/*
16. reverse()
Description: Inverts the sequence of the elements within an array.
Example: arr.reverse();
*/
console.log("16. reverse()");
const nums = [1, 2, 3];
console.log(nums);
console.log(nums.reverse().join(" "));
