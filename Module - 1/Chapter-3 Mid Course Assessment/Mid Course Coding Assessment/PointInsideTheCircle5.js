/*
5.Point inside the circle
Medium
+10 APs
solved
A group of friends went on a picnic to a park where they found a circular fountain with a statue in the center. They were curious to find out if a small toy boat they had would fit inside the fountain. Write a JavaScript program to help them determine if the boat, represented by a point, lies strictly inside the circle formed by the fountain.

Can you write a JavaScript program to check whether a given point lies strictly inside a given circle?

Example 1:
Input:
Center of the circle: (0, 0) Radius of circle: 5 Point inside the circle: (2, 2)

Output:
true

Example 2:
Input:
Center of the circle: (4, 4) Radius of circle: 3 Point inside the circle: (6, 9)

Output:
false
*/
// Do not remove nor make any changes in  main() function
function main() {
	/*Input:
	Center of the circle (x, y)
	Radius of circle: r
	Point inside a circle (a, b) */
    var x = parseInt(readLine());
    var y = parseInt(readLine());
    var r = parseInt(readLine());
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    console.log(check_a_point(a, b, x, y, r));
}
function check_a_point(a, b, x, y, r) {
    // Your code goes here
    // Calculate the distance between the center of the circle and the given point
    var distance = Math.sqrt((a - x) ** 2 + (b - y) ** 2);

    // Check if the distance is strictly less than the radius of the circle
    return distance < r;
}