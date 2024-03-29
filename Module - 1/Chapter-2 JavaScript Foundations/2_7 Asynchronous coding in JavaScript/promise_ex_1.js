let condition = true;

function hurry() {
    console.log("Hurry!!!");
}

// let promiseVal = new Promise((resolve, reject) => {
//     if(condition){
//        resolve(hurry());
//     } else{
//         reject("😭 promise not full filled");
//     }
// });

// console.log(promiseVal);


let promiseVal = new Promise((resolve, reject) => {
    if(condition){
       resolve("Yeah!! Promise full filled");
    } else{
        reject("😭 promise not full filled");
    }
});

promiseVal.then((response) => {
    console.log("Line 27:", response);
}).catch((error) => {
    console.log("Line 29:",error);
}).finally(() => {
    console.log("This will execute no matter what");
})




