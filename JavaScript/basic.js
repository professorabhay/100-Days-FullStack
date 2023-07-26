// DAY-01 (26-07-2023)

// "use strict"; // tral all JS code as newer version

// Basics -> 
// 1. console.log() -> to print something on console
// 2. alert() -> to show a pop-up
// 3. prompt() -> to take input from user
// 4. confirm() -> to confirm something from user
// Node.js and Deno.js to setup local environment to run js 
// To execute file by terminal ->  node .\26_First.js
// To execute file by terminal ->  deno run .\26_First.js
// We can you gtihub.com to bypass local environment by creating repo and using codespaces and adding configuration file.

console.log("Hello World")

// Variables ->
// 1. var -> global scope
// 2. let -> block scope
// 3. const -> block scope


// Data Types ->
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. Object
// 7. Array
// 8. Symbol

// Primitive dataTypes -> 7types -> String, Number, Boolean, null, undefined, symbol, bigInt
// Non-Primitive dataTypes -> Object, Array, Functions  (Reference type)
// JS is dynamic language 






const id= Symbol('123')
console.log(id) 
const bigNumber = 223322322228887n
console.log(typeof bigNumber)
let name = "John" // string type variable declaration with value John assigned in it
let age = 25 // number type variable declaration with value 25 assigned in it
let isApproved = true // boolean type variable declaration with value true assigned in it
let firstName = undefined // undefined type variable declaration with value undefined assigned in it
let lastName = null // null type variable declaration with value null assigned in it
const PI = Math.PI;
const gravity = 9.8;

console.log(name)
console.log(age)
console.table([name, age, isApproved, firstName, lastName, PI, gravity])

console.log(typeof name)
console.log(typeof age)
console.log(typeof isApproved)
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof PI)
console.log(typeof gravity)


// Type Conversion ->
// 1. Implicit Type Conversion
// 2. Explicit Type Conversion
let x = '7'    // String to Number conversion using unary plus operator (+x),
let y = 7      // Number to String conversion using String() function
console.log(x+y)
console.log(typeof x)
console.log(typeof y)   
console.log(typeof (x+y)) 
let z = Number(x)
console.log(typeof z)


// Arrays and Objects
console.log({name, age, isApproved, firstName, lastName, PI, gravity})



// Operators ->
// 1. Arithmetic Operators -> +, -, *, /, %, ++, --
// 2. Assignment Operators -> =, +=, -=, *=, /=, %=, **=
// 3. Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators -> &&, ||, !
// 5. Bitwise Operators -> &, |, ^, ~, <<, >>

let num1 = 10
let num2 = 20
num1++   // incrementing the first operand before performing addition operation (Pre Increment Operator)
num2--   // decrementing the second operand before performing subtraction operation (Pre Decrement Operator)
console.log(num1 + num2)

var num3 = 10
num3 = 11
var num3 = 4

console.log(num3)
console.log(49*49)


// Important Conversion

let str1 ="hello"
let str2 ="abhay"
console.log(str1+str2)

console.log(10 + "20") // 1020
console.log(10 - "20") // -10
console.log(10 + 20 + "30") // 3030
console.log("1" + 2 + 2) //122
console.log(3+4*5%3)
console.log(+true);

const myFunc = function(){
    console.log("Hello World");
}


// Memory 
// 1. Stack -> Primitive Data Types
// 2. Heap -> Non-Primitive Data Types
// Define Stack and Heap ?
// Stack -> LIFO (Last In First Out)
// Heap -> Dynamic Memory Allocation
// Example of using heap memory in JavaScript
// 1. Object
// 2. Array
// 3. Function
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
var personObj= new Person('John', 'Doe');
console.log(personObj);

function addNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    console.log(sum)
}
addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// Stack Example // always get copy 
let myName = "Abhay"
let anotherName = myName
anotherName = "Arjun"

console.log(myName)
console.log(anotherName)

// Heap Example // always get reference
let myArray = [1, 2, 3, 4, 5]
let anotherArray = myArray
anotherArray.push(6)
console.log(myArray)
console.log(anotherArray)


