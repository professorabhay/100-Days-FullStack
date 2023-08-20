const User = {
    _email: 'a@amail.com', // _ underscore shows its a private property
    _password: 'Abhay',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
// USing factory function [new is constructor]
const chai = Object.create(User);
console.log(chai.email);
