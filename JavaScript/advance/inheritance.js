class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, password){
        super(username)
        this.password =password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "123")
chai.addCourse()

const masalaChai = new User("masala chai")
masalaChai.logMe()
console.log(chai instanceof User);