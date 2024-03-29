let condition = true;

let promiseVal = new Promise((resolve, reject) => {
    if(condition){
       resolve("Yeah!! Promise full filled");
    } else{
        reject("😭 promise not full filled");
    }
});

console.log(promiseVal);
