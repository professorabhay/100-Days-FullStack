// For loop with break and continue in JavaScript (Iteration)

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my fav number");
    continue;
  }
  if (i === 5) {
    console.log("Stop the loop");
    break;
  }
  console.log("Number " + i);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}


// While loop with break and continue in JavaScript (Iteration)

let a = 0;
while (a < 10) {
    console.log("Number " + a);
    a++;
    }

// Do while loop with break and continue in JavaScript (Iteration)

let b = 0;
do {
    console.log("Number " + b);
    b++;
}
while (b <= 3 && true || false ); // This condition will always be True, so
// the loop will run forever.

// High Order Array loop ->
// forEach, map, filter

const cars = ["Ford", "Chevy", "Honda", "Toyota"];
cars.forEach((car) => console.log(`I like ${car}`));

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Karen" },
    { id: 4, name: "Steve" },
];
users
.filter(user=> user['id'] > 2 )
.map((user) => console.log(user.name));  

for(const user of users){
    console.log(`Name is ${user.name}`)
}

// For in loop with break and continue in JavaScript (Iteration)
var fruits = ['apple', 'banana','mango'];
for (var i in fruits) {
    console.log(fruits[i]);
}




// Looping through Objects
const person = {"name": "John Doe","age" : 34,"city" : "Miami"};
for (let x in person) {
    console.log(`${x} : ${person[x]}`);
}


// Maps  // map hold key value pair with no duplicate || map is not iterable 

const map = new Map()
map.set('in', 'india')
map.set('us', 'united states')
map.set('uk', 'united kingdom')

console.log(map);
console.log(map.size);
console.log(map.get('in'));
console.log(map.has('in'));

for ( const [key, value] of map){
    console.log(`${key} : ${value}`);
}


const myObject = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby'
}

for (const key in myObject){
    console.log(myObject[key],`${key} : ${myObject[key]}`);
}

// For Each loop ->

const coding =["js", "py","go","c"]

coding.forEach(function (item){
    console.log(item);
})

coding.forEach((i) => {
    console.log(i);
})

function print(item){
    console.log(item);
}

coding.forEach(print)

//Reduce in JavaScript
let sum=0;
sum+=123456789+1234567
89 +123456789 ;