// Object Literal

const user = {
    username: "Abhay",
    loginCOunt: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got details from DB");
        // console.log(`Username: ${username}`); // It give error of not defined beacuse context [Talking about which username, so we have to tell this using "this" keyword]
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // But in browser it has windows in global context

// Constructor Function 

// const promiseOne = new  Promise()
// const date = new Date()

// new is use to make new context and known as contructor function

function User(username, loginCOunt, signedIn){
    this.username = username
    this.loginCOunt = loginCOunt
    this.signedIn - signedIn

    // return this [Implicitily defined]
}

// const userOne = User("Abhay", 12, true)
// const userTwo = User("Arjun", 11, false) // It overwrite the main 
const userOne = new User("Abhay", 12, true)
const userTwo = new User("Arjun", 11, false) 
console.log(userOne);
console.log(userTwo);

