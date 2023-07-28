// Arrays

var myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

var myArray2 = [100, "Adam", true];

const myArr = [1,2,3,4,5,6,7]
const myArr2 = ['a', 'b', 'c']
const myArr3 = [1,2,3,'a',4,'r']
console.log(myArr) // output: (8)[1, 2, 3   
console.log(myArr2) // output: (3)['a', 'b', 'c']
console.log(myArr3) // output: (6)[1, 2, 3, 'a', 4, 'r']
console.log(myArr[0]) // output: 1
console.log(myArr2[1]) // output: b
console.log(myArr3[3]) // output: a
console.log(myArr.length) // output: 7
console.log(myArr2.length) // output: 3
console.log(myArr3.length) // output: 6
console.log(Array.isArray(myArr)) // output: true
console.log(Array.isArray(myArr2)) // output: true
console.log(Array.isArray(myArr3)) // output: true
console.log(myArr.indexOf(5)) // output: 4

// 2. Array Methods
console.log(myArr.push(8)) // output: 8
console.log(myArr) // output: (8)[1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArr.pop()) // output: 8
console.log(myArr) // output: (7)[1, 2, 3, 4, 5, 6, 7]
console.log(myArr.unshift(0)) // output: 8
console.log(myArr) // output: (8)[0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr.shift()) // output: 0
console.log(myArr) // output: (7)[1, 2, 3, 4, 5, 6, 7]

// .join ->
console.log(myArr.join()) // output: 1,2,3,4,5,6,7
console.log(myArr.join('')) // output: 1234567
console.log(myArr.join('-')) // output: 1-2-3-4-5-6-7
console.log(myArr.join(' ')) // output: 1 2 3 4 5 6 7

// .slice ->
console.log(myArr.slice(2)) // output: (5)[3, 4, 5, 6, 7]
console.log(myArr.slice(2, 5)) // output: (3)[3, 4, 5]

// .splice ->
console.log(myArr.splice(2)) // output: (5)[3, 4, 5, 6, 7]
console.log(myArr) // output: (2)[1, 2]
console.log(myArr.splice(2, 0, 'a', 'b')) // output: []
console.log(myArr) // output: (4)[1, 2, 'a', 'b']

// Difference b/w slice and splice 
// slice -> it will not change the original array
// splice -> it will change the original array

// .concat ->
console.log(myArr.concat(myArr2)) // output: (7)[1, 2, 'a', 'b', 'a', 'b', 'c']
console.log(myArr.concat(myArr2, myArr3)) // output: (13)[1, 2, 'a', 'b', 'a', 'b', 'c', 1, 2, 3, 'a', 4, 'r']

// .reverse ->
console.log(myArr.reverse()) // output: (4)['b', 'a', 2, 1]

// .sort ->
console.log(myArr.sort()) // output: (4)[1, 2, 'a', 'b']

// .fill ->
console.log(myArr.fill('a')) // output: (4)['a', 'a', 'a', 'a']

// .includes ->
console.log(myArr.includes('a')) // output: true

// .flat ->
const myArr4 = [1,2,3,[4,5,6,[7,8,9]]]
console.log(myArr4.flat()) // output: (9)[1, 2, 3, 4, 5, 6, Array(3)]
console.log(myArr4.flat(2)) // output: (9)[1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.from("Abhay"));
console.log(Array.from({name: "Abhay"})); // Interesting  Case -> give empty array when conversion nt happen
console.log(Array.from([1,2,3,4,5], x => x * 2)); // output: (5)[2, 4, 6, 8, 10]


// Objects 
// 1. Object Literal
const person = {
    firstName: "Abhay",
    lastName: "Kumar",
    age: 21,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}
console.log(person)
console.log(person.firstName, person.lastName)
console.log(person["firstName"])
console.log(person.hobbies[1])
console.log(person.address.city)

Object.freeze(person);
person.firstName = "Abhay Gupta"
console.log(person.firstName) // Not change the value of firstName because of freeze method



const mySym = Symbol("key1")
const person2 = {
    [mySym] : "myKey1", // correct syntax of symbol
    "full name" : "Abhay Gupta"
}

console.log(person2["full name"])
// console.log(person.full name) // Not possible to access like this 
console.log(person2[mySym]) 



// 2. Object Constructor
// const person1 = {}; // non-single term
const person1 = new Object(); // single term
person1.firstName = "Abhay";
person1.lastName = "Kumar";
person1.age = 21;

console.log(person1)
console.log(person1.firstName, person1.lastName)

// .objectassign ->
const person3 = Object.assign({}, person1, person2)
console.log(person3)
console.log("Abhay")

// 3. Object Constructor with function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
let p = new Person("John","Doe",'August 19, 1999');
console.log(p)


// 4. Object Prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
let p1 = new Person("John","Doe",'August 19, 1999');
console.log(p1.getBirthYear())
console.log(p1.getFullName())

// 5. Object.create
const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;
console.log(mary)
console.log(mary.greeting())


// 6. ES6 Classes
class Person5 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const p2 = new Person("John","Doe",'August 19, 1999');
console.log(p2.getBirthYear())


// Object De-Structure [Day3 || 28-07-2023]

const obj={name:'john', age : '40'}; // object declaration
// obj.name - Its old syntax

const {name: n} = obj
// console.log(name);
console.log(n)





