/*
const obj = {
    name: 'Rocky Randhawa',
    age: 30,
    intro: function(){
        console.log("Line 5: ",this);
        console.log(`Hi ${this.name} this side`);
        const test = () => {
            console.log(`Test in arrow func`);
            console.log("Line 9; ",this);
        };
        test();
    },

};

obj.intro();
*/
// Interview Question
// What is the value of this keyword inside an arrow function 
// The value will be the same as it present in the surrounding 
// Why arrow function where invented ?
function test(){
    console.log('Inside Test Function')
    console.log('this')
}

test();

const testII = () => {
    console.log("Arrow Func test");
    console.log(this);
}