let greeting : string = "Hello, Abhay!"
// greeting = 10 //Number can't assign, it give error before running

let myNum = 6;

console.log(greeting);


// number  [!numbers]

let userId : number  = 5800
let userIdFloat : number  = 5800.50  // both is number, nothing like float, int or etc
let userRollNum = 2106391492 // Best Practice
// TS is smart enough to detect the number type directly and warn you next type while assigning something else
// userRollNum = 'abhay' // error

// boolean

let isLoggedIn : boolean = true;

// Any keyword [Using this everywhere not the good practice]
// Any is like the marker to turn of checking 
let hero ; // No idea what type is it later 

function getHero(){
    return "thor" // return string
}

hero = getHero(); //let hero: any

// Maybe program dependend on the string type but due to any maysomeone return bool or num then programm crash !


// Functions in TS

function addTwo(num : number){
    return num + 2;
}

addTwo(5) // Now, there is some problem, its ANY again.
// So, here we use the forcefully defined the type.
//  so here you saved from running if else 😂 

function getUpper(val : string){
    return val.toUpperCase();
}

//getUpper(5) // Now, there is some problem, its ANY again. It can take number also
getUpper('abhay') // string

function signUpUser(name : string, email : string, isPaid : boolean){
   console.log(name + ' ' + email + ' ' + isPaid); 
}

// here its important to use that : TYPE

signUpUser('Abhay', '<EMAIL>', true)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log(name +' '+ email +' '+ isPaid);
}

loginUser('Abhay', '<EMAIL>') // What if we give 2 arguments when need 3 as per function. Need default value for it !


// Advance Function 

function addThree(num : number){
    // return num + 3;
    return "Hello" // Its not giving error but its wrong. 🤔
}

// To fix the type of return value -> 

function addFour(num : number): number{
    // return num + 4;
    return "Hello" // Give Error !! 🙀
}

// function getValue(num : number): string{
//     if (num > 5) {
//         return true;
//     }
//     return '200 OK'
// }

// What to do now when you have 2 different return 🥲



// suntax in arrow function

const getHello = (s: string): string => {
    return ""
}

const heroes = ['hulk', 'thor', 'iron-man'] //Autometically string
// const heroes = [1, 2, 3] // Autometically number

heroes.map((hero): string =>{
    return `hero is ${hero}`
})

function consoleError(err: string): void { 
    console.log(err)
    // return 1 ; // Now return  not possible because void 
} 

function handleError(err: string): never { 
   throw  new Error(err);
} 

