function add(){
    let num1 = 5;
    return function(num2){
        console.log(num1);
        console.log(num2);
        console.log(num1 + num2);
    };
}

const returndFunc = add();
returndFunc(15);