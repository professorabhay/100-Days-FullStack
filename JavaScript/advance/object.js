// Array -> Object -> null
// String -> Object -> null
// Then the prototype stop after getting null type

// Now What is Function? 
// Function  or Object 

function mulby5(num){
    return num*5
}

console.log(mulby5(10));

mulby5.power = 2                // How can you give value to function by "." ? Yes Function is reference to object and has its own prototype
console.log(mulby5.power);
console.log(mulby5.prototype);

function createUser(username, score){
    // username = username - it create confusion, like for which you are talking about 
    this.username = username // set current context using this 
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++ // Jisne bhi bulaya hae uska kaam kar do bhai 😂😂
}

createUser.prototype.printMe = function(){
    console.log(`Score: ${this.score}`);
}

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250) // not work

const chai = new createUser("chai", 25)
const tea =  new createUser("tea", 250)
chai.printMe()
tea.printMe()