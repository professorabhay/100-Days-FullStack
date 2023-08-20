// let myName = "Abhay"
// console.log(myName.length);

let anotherUsername = "Cahii     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
anotherUsername.trueLength()
"Arjun".trueLength()


let myHeroes = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "green",
    getHulkPower: function(){
        console.log(`Power: ${this.hulk}`);
    }
}

Object.prototype.abhay = function(){
    console.log(`abhay is in all objects`);  //created in all objects
}

heroPower.abhay()
myHeroes.abhay() // It can also access because creates in global / Top-Level

// But What If power give to only array, than object also got the same power? Lets See => 

Array.prototype.heyAbhay = function(){
    console.log(`Hello from Array Abhay`);
}

myHeroes.heyAbhay() // You think that it has the power 
// heroPower.heyAbhay() // ANd it not has the power and you are correct a bit 

// inheritance

const user = {
    name: "chai",
    email: "chai@.com"
}
const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user //Can use outside, and Its for linking or accessing properties of each other 

//NEW Approach

Object.setPrototypeOf(TeachingSupport, Teacher)



