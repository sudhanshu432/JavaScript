/*
Working of JavaScript Array
Arrays in JavaScript are implemented as objects and their indices are treated as object keys.
As arrays are objects, their elements are stored as references, 
so when an array is copied, any modification to it will also be reflected in an original array.
*/
// For example:
let arr = [{name: 'John'}, {name: 'Jane'}];
let arr1 = arr;
arr1.push({name: 'Bob'});

console.log(arr); // [{name: 'John'}, {name: 'Jane'}, {name: 'Bob'}]
console.log(arr1); // [{name: 'John'}, {name: 'Jane'}, {name: 'Bob'}]

arr[0].name = 'Mike';
console.log(arr); // [{name: 'Mike'}, {name: 'Jane'}, {name: 'Bob'}]
console.log(arr1); // [{name: 'Mike'}, {name: 'Jane'}, {name: 'Bob'}]

// You can also store values by passing a named key in an array.
let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // ["h", "e"]
console.log(arr.name); // "John"
console.log(arr['name']); // "John"