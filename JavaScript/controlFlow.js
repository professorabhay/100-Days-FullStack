// DAY-4 [29-07-2023]

// Logical Flow and Control Flow
// 1. if-else
// 2. switch-case
// 3. for loop
// 4. while loop
// 5. do-while loop
// 6. for-in loop
// 7. for-of loop

const isUser = true;

if (false != isUser) {
  console.log("Hello");
}

if (2 === "2") {
  console.log("Hello1");
}

// Shorthand notation
// if (condition) {
//     statement
// }

if (2 > 1) console.log("Abhay"); //Im-mature code, better to use curly braces {}

// Nested If-Else Example  ->

const age = 15;
const isUser1 = true;
if (age >= 18) {
  if (isUser1) {
    console.log("You can vote");
  } else {
    console.log("You can't vote");
  }
} else {
  console.log("You can't");
}

// Switch Case Example ->
const day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
}

// trutthy statement ->  1. 1, " ", [], {}, true, 'false', function(){}
// falsy statement -> 0, "", undefined, null, NaN, false, -0, BigInt 0n

const userEmail = "abhay@mail.com";

if (userEmail) {
  //no comparison
  console.log("Got mail");
} else {
  console.log("No mail");
}

if (userEmail.length === 0) {
  console.log("mail is empty");
}

const empObj = {};

if (Object.keys(empObj).length === 0) {
  console.log("Empty Object");
}

// false == 0 give true
// false === 0 give false
// true!= "" gives true
// true !== "" gives true
// false == '' gives true
// 0 == '' give true

// Nullish Coalescing Operator (??): null undefined
// Logical OR (||): null undefined "" 0 false NaN
// Logical AND (&&): any value

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1)

// Terniary Operator 
// condition ? true : false

const age1 = 18;
const isUser2 = true;
age1 >= 18 && isUser2 ? console.log("You can vote") : console.log("You can't vote");

