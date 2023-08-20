// windows = {this = windows}
// node = {} //blank

function setName(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){

    // setName(username)
    // setName.call(username)
    setName.call(this, username)
    this.email  =email
    this.password = password

}

const chai  = new createUser("chai", "chai@.com", "123")
console.log(chai);