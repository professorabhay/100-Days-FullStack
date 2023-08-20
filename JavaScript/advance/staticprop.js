class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    
    // static createId(){
    //     return `123`
    // }

    createId(){
        return `123`
    }
}

const abhay = new User("abhay")
console.log(abhay.createId())
