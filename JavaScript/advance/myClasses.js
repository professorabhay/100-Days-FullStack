// ES6

class User {
    constructor(user, pswd){
        this.user = user;
        this.pswd = pswd;
    }

    encryptPswd(){
        return `${this.pswd}abc`
    }
    changeUser(){
        return `${this.user.toUpperCase()}`
    }
}


const chai = new User("chai", "123")
console.log(chai.encryptPswd());
console.log(chai.changeUser());

// Behind The Scene

function User1(username, password){
    this.username = username
    this.password = password
}


User1.prototype.encryptPswd = function(){
    return `${this.password}abc`
}

User1.prototype.changeUser = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea", "123")
console.log(tea.encryptPswd());
console.log(tea.changeUser());