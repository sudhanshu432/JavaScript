let numbers = [3, 5, 1, 8, 2];

// sort the array in ascending order
numbers.sort();
console.log(numbers);             // [1, 2, 3, 5, 8]

// find the index of the element with value 5
let index = numbers.indexOf(5);
console.log(index);               // 3

// adding elements to array's end
numbers.push(4, 7);
console.log(numbers);             // [1, 2, 3, 5, 8, 4, 7]

// concatenate two arrays
let moreNumbers = [6, 9];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers);          // [1, 2, 3, 5, 8, 4, 7, 6, 9]

// check if the array includes a certain element
let hasFive = allNumbers.includes(5);
console.log(hasFive);             // true

// find the first element that is satisfying a condition
let greaterThanFour = allNumbers.find(number => number > 4);
console.log(greaterThanFour);     // 5

// NOTE: Note that if the element is not in an array, indexOf() gives -1.