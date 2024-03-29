/*
JavaScript Event Loop

JavaScript single-threaded model

JavaScript, being single-threaded, can only perform one task at a time. When executing a script, the JavaScript engine processes 
it from the top of the file to the bottom, managing execution contexts and the call stack.

During the execution of a lengthy function, interactions with the web browser become unresponsive, causing the page to hang. 
Such functions are termed as blocking functions, as they block all interactions on the webpage, including mouse clicks.

An illustration of a blocking function is when a function calls an API from a remote server, which may introduce delays in the script's 
execution.

The following illustration simulates a blocking function using a huge loop:

*/
function task(message){
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log("Start script...");
task('Call an API');
console.log('Done!');

/*
In this example, the function "task()" contains a large "[while] loop that simulates a time-consuming activity. 
The blocking function "task()" is used.

Depending on how quickly the machine is running, the script hangs for a little while and outputs the following: 

Start script...
Download a file.
Done!

The JavaScript engine executes the script by placing the first call, "console.log( )" at the top of the call stack. 
The "task()" function is then executed after being positioned at the top of the call stack.

Nevertheless, the 'task()' function won't finish immediately. The notification "Download a file." will therefore appear shortly. 
The JavaScript engine removes the completed "task()" function from the call stack after it has finished.

The JavaScript engine makes the final call to the “console.log('Done!')” function, which is subsequently executed.
*/
