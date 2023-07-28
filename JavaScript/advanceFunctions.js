// DAY-3 [28-07-2023]

// Arrow Function and This Keyword

// const usr = {
//     name: "John",
//     age: 45,

//     welcomeMessage: function(){
//         console.log(`${this.name}, welcome to india`); // THIS refer the current context 
//         console.log(this);
//     }
// }

// usr.welcomeMessage()
// usr.name = "Abhay"  // context changed
// usr.welcomeMessage()
// console.log(this); // it give empty object and browser has window object

// function chai(){
//     let name = "Abhay"
//     console.log(this.name); // Can't work here, it give undefined || only worked in objects not only in function
// }
// chai();

// const chai = function (){
//     let name = "Abhay"
//     console.log(this.name);
// }
// chai()

// const chai =  ()=>{                        // remove function keyword and use arrow
//     let name = "Abhay"
//     console.log(this.name);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// } // curly braces need return statement || explicit rreturn method

// const addTwo = (num1, num2) =>  num1 + num2; // Implicit Return
// const addTwo = (num1, num2) =>  (num1 + num2); // Implicit Return by second method
const addTwo = (num1, num2) =>  ({name: "Abhay"})
console.log("Add two numbers:",addTwo(6,9));




// Immediately Invoked Function Expression (IIFE) 
// to remove global scope pollution


(function chai(){             // its also known as named iffe
    console.log(`DB Connected`);
})() ; // it is end, now below will also work

(function chai2(){
    console.log(`DB Connected2`);   // It give error because iife don't know where to stop the context 
})();

(() => {                  // unnamed iffe
    console.log(`DB Connected3`);
})()