class User {
    constructor(email, password){
            this.email = email;
            this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // setter never return
    }
    get password(){
        return `${this._password}defg`
    }
    set password(value){
        this._password = value // _ab, aa anything will work
    }

    //It give error because setter also setting the value and the above constructor also trying to set value 
    // Make new variable kind of _password and it can anything but for readibility we do this 
}

const abhay = new User("a@amail.com", "abc")

console.log(abhay.password);
console.log(abhay.email);