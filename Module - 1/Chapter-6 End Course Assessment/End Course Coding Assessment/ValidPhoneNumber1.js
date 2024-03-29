/*
1. Valid Phone Number
Easy
+10 APs
unsolved
Write a function to check if a given string contains a valid phone number or not using Regular Expression in JavaScript. A valid phone number should have 10 digits and should start with either 7, 8 or 9.

Example 1:
Input:
9876543210

Output:
true

Example 2:
Input:
1234567890

Output:
false
*/
// Do not remove nor make any changes in  main() function
function main() {
    var phoneNumber = parseInt(readLine());
    console.log(isValidPhoneNumber(phoneNumber));
}
function isValidPhoneNumber(phoneNumber) {
  // Your code goes here
      // Use a regular expression to check if the phone number is valid
    var regex = /^[789]\d{9}$/;
    return regex.test(phoneNumber);
}