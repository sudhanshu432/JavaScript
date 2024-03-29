// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    var size = parseInt(readLine());
    console.log(chunk(arr, size));
}
var chunk = function(arr, size) {
     //Your code goes here
    let chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        // Push subarrays of size 'size' into chunkedArray
        chunkedArray.push(arr.slice(i, i + size));
    }

    return chunkedArray;
};