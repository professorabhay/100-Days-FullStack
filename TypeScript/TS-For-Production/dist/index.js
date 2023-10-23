"use strict";
console.log("TypeScript is Here");
// Classes ->
// class User {
//     public email: string;
//     name: string;
//     readonly city: string = "Canada";
//     private readonly password: string  = "Password@123" // private can replace by # [#password is same t private password]
//     constructor(email : string, name : string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Canada";
        this.password = "Password@123"; // private can replace by # [#password is same t private password]
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (value <= 1) {
            throw new Error("Error 404");
        }
        this._courseCount = value;
    }
    delToken() {
        console.log("delToken");
    }
}
// accessModifier = Public, Private, Protected [it can use within the class and also in the class which is inherited ]
// private can also not accessible to the inherit class like 
class subUser extends User {
}
// const abhay = new User(email: "abhay@gmail.com", name: "Abhay");
const abhay = new User("abhay@gmail.com", "Abhay");
