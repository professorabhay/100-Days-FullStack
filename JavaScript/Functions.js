// DAY-3 [28-07-2023]

// FUNCTIONS IN JAVASCRIPT

function greet(name) {
  console.log("Hello " + name); // prints Hello John or any other given input string.
}

// let name = "Abhay";
greet("Abhay");

// function addNumber(num1, num2){ // here values says parameter
//     console.log(num1+num2);
// }

// let num1 = 10;
// let num2 = 20;
// addNumber(num1, num2) // here input values says arguments

function addNumber(num1, num2){ // here values says parameter
    return (num1+num2);
}

let num1 = 10;
let num2 = 20;
let ans = addNumber(num1, num2)
console.log(ans)

function loginUser(username = "Default"){
    // if(username === undefined)
    if(!username){
        console.log("Enter Username")
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUser("Abhay"))
console.log(loginUser())


// When you don't know the number of arguments || params [Eg - Shopping Cart]

function calculateCartPrice(val1, val2, ...num1){  // ...num1 solve and it return array 
    return num1;          // * here val1 and val2 take 1st & 2nd value from input and rest will go in num1. 
}

console.log(calculateCartPrice(200, 400, 500)); // Now its exceed and function only return only 200 but we use rest operator in parameter

const user = {name: "Abhay", age:20}
function handleObject(anyobject){ //write anyobject not name of object
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleObject(user)

// Scopes in simple way 

// let a =10
// const b =20
// var c =30

if(true){
    let a =10
    const b =20
    var c =30
}

// console.log(a);
// console.log(b);
console.log(c);  // this is problem because its in the if scope but its still accessible 

/// Browser global scope is different and node environment scope is different

// nested scope

function one(){
    const username = "Abhay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();