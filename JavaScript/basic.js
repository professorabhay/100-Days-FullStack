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






// const id= Symbol('123')
// console.log(id) 
// const bigNumber = 223322322228887n
// console.log(typeof bigNumber)
// let name = "John" // string type variable declaration with value John assigned in it
// let age = 25 // number type variable declaration with value 25 assigned in it
// let isApproved = true // boolean type variable declaration with value true assigned in it
// let firstName = undefined // undefined type variable declaration with value undefined assigned in it
// let lastName = null // null type variable declaration with value null assigned in it
// const PI = Math.PI;
// const gravity = 9.8;

// console.log(name)
// console.log(age)
// console.table([name, age, isApproved, firstName, lastName, PI, gravity])

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isApproved)
// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof PI)
// console.log(typeof gravity)


// Type Conversion ->
// 1. Implicit Type Conversion
// 2. Explicit Type Conversion
// let x = '7'    // String to Number conversion using unary plus operator (+x),
// let y = 7      // Number to String conversion using String() function
// console.log(x+y)
// console.log(typeof x)
// console.log(typeof y)   
// console.log(typeof (x+y)) 
// let z = Number(x)
// console.log(typeof z)


// Arrays and Objects
// console.log({name, age, isApproved, firstName, lastName, PI, gravity})



// Operators ->
// 1. Arithmetic Operators -> +, -, *, /, %, ++, --
// 2. Assignment Operators -> =, +=, -=, *=, /=, %=, **=
// 3. Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators -> &&, ||, !
// 5. Bitwise Operators -> &, |, ^, ~, <<, >>

let num1 = 10
let num2 = 20
++num1   // incrementing the first operand before performing addition operation (Pre Increment Operator)
--num2   // decrementing the second operand before performing subtraction operation (Pre Decrement Operator)
console.log(num1 + " " + num2);
console.log(++num1);
console.log(num1++);
console.log(num1 +" "+ num2 + ":" + (num1 + num2 ))

// var num3 = 10
// num3 = 11
// var num3 = 4

// console.log(num3)
// console.log(49*49)


// Important Conversion

// let str1 ="hello"
// let str2 ="abhay"
// console.log(str1+str2)

console.log(10 + "20") // 1020
console.log(10 - "20") // -10
// console.log(10 + 20 + "30") // 3030
// console.log("1" + 2 + 2) //122
// console.log(3+4*5%3)
// console.log(+true);

// const myFunc = function(){
//     console.log("Hello World");
// }


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
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// var personObj= new Person('John', 'Doe');
// console.log(personObj);

// function addNumbers() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }
//     console.log(sum)
// }
// addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// Stack Example // always get copy 
// let myName = "Abhay"
// let anotherName = myName
// anotherName = "Arjun"

// console.log(myName)
// console.log(anotherName)

// Heap Example // always get reference
// let myArray = [1, 2, 3, 4, 5]
// let anotherArray = myArray
// anotherArray.push(6)
// console.log(myArray)
// console.log(anotherArray)


//DAY-02 (27-07-2023)

// Strings -> 

// Basic String -> 'Abhay'  "Abhay" Can written in " ",  ' '

// 1. String Concatenation -> "Abhay" + "Abhay"
// modern syntax -> 

// const a = "Abhay"
// const b = 51

// console.log(a + b)
// console.log(`hello my name is ${a} and my repo size is ${b}`); // modern way
// console.log(a[0])

// 2. String Length
// console.log(a.length)

// 3. String Methods
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.substring(0, 3))
// console.log(a.split(''))
// console.log(a.split('a'))

// 4. String Template Literals
// console.log(`My name is ${a} and my age is ${b}`)
// console.log("My name is " + a + " and my age is " + b)


// console.log(a.charAt(2));
// console.log(a.indexOf('y'));
// const anotherA = a.slice(-4,4)
// console.log(anotherA)
// console.log(a.includes('h'))
// console.log(a.includes('z'))
// console.log(a.endsWith('y'))

// 5. String Escape Sequence
// console.log('My name is \'Abhay\'')
// console.log("My name is \"Abhay\"")
// console.log("My name is \nAbhay")
// console.log("My name is \tAbhay")
// console.log("My name is \\Abhay")

// 6. String Comparison
// console.log('a' > 'b')
// console.log('a' < 'b')
// console.log('a' == 'b')
// console.log('a' === 'b')
// console.log('a' != 'b')
// console.log('a' !== 'b')

// 7. String Searching
// console.log(a.indexOf('h'))
// console.log(a.lastIndexOf('h'))
// console.log(a.search('h'))

// 8. String Extracting
// console.log(a.slice(0, 3))
// console.log(a.slice(-4, 4))
// console.log(a.substring(0, 3))
// console.log(a.substr(0, 3))

// 9. String Replacing
// console.log(a.replace('h', 'z'))
// console.log(a.replaceAll('h', 'z'))

// 10. String Padding
// console.log(a.padStart(10, '0'))
// console.log(a.padEnd(10, '0'))

// 11. String Trim
// console.log('   Abhay   '.trim())
// console.log('   Abhay   '.trimStart())
// console.log('   Abhay   '.trimEnd())

// // 12. String Extracting
// console.log(a.charAt(2))
// console.log(a.charCodeAt(2))
// console.log(a[2])

// 13. String Conversion
// console.log(String(123))
// console.log(String(123 + 123))
// console.log(String(123) + String(123))

// 14. String Iteration
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }


// Number and Maths 

// const balance = new Number(100000)
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(2));
// console.log(balance.toString().length);
// console.log(balance.toLocaleString('en-IN'));


// Math Object
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(2.4));
// console.log(Math.ceil(2.4));
// console.log(Math.floor(2.4));
// console.log(Math.sqrt(2.4));
// console.log(Math.abs(-2.4));
// console.log(Math.pow(2, 4));
// console.log(Math.min(2, 4, 5, 6, 7, 8, 9, 10));
// console.log(Math.max(2, 4, 5, 6, 7, 8, 9, 10));
// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10) + 1));
// const min = 1
// const max = 4
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// Date and Time
const dateObj = new Date(); // current time stamp object creation using the constructor function of Date class
// console.log(dateObj);
// console.log(dateObj.toString());
// console.log(dateObj.toDateString());
// console.log(dateObj.toTimeString());
// console.log(dateObj.toLocaleString());
// console.log(dateObj.toLocaleDateString());
// console.log(dateObj.toLocaleTimeString());
// console.log(dateObj.getFullYear());
// console.log(dateObj.getMonth());
// console.log(dateObj.getDate());
// console.log(dateObj.getDay());
// console.log(dateObj.getHours());
// console.log(dateObj.getMinutes());
// console.log(dateObj.getSeconds());
// console.log(typeof dateObj);

// let myDate = new Date(2023, 0, 23, 5, 3)
// let myDate1 = new Date("01-14-2023")
// console.log(myDate1.toLocaleString());
// console.log(Math.floor(Date.now()/1000));

// myDate.toLocaleString('default', {
//     weekday: 'long'
// })


// Operations in JavaScript
// 1. Addition (+)
// 2. Subtraction (-)
// 3. Multiplication (*)
// 4. Division (/)
// 5. Modulus (%)
// 6. Exponentiation (**)
// 7. Increment (++)
// 8. Decrement (--)
// 9. Assignment (=)
// 10. Equality (==)
// 11. Strict Equality (===)
// 12. Inequality (!=)
// 13. Strict Inequality (!==)
// 14. Greater than (>)
// 15. Less than (<)
// 16. Greater than or equal to (>=)
// 17. Less than or equal to (<=)
// 18. Logical AND (&&)
// 19. Logical OR (||)
// 20. Logical NOT (!)
// 21. Bitwise AND (&)
// 22. Bitwise OR (|)
// 23. Bitwise XOR (^)
// 24. Bitwise NOT (~)
// 25. Left shift (<<)
// 26. Right shift (>>)
// 27. Unsigned right shift (>>>)
// 28. Bitwise AND assignment (&=)
// 29. Bitwise OR assignment (|=)
// 30. Bitwise XOR assignment (^=)
// 31. Left shift assignment (<<=)
// 32. Right shift assignment (>>=)
// 33. Unsigned right shift assignment (>>>=)
// 34. Comma (,)
// 35. Conditional (ternary) operator (?:)
// 36. delete
