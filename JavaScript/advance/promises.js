// In JS not classes only objects manner is prefer

// Promises has 3 state - pendind, fulfilled, rejected

const promiseOne = new Promise(function(resolve, reject){
    //Do an anync task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Task is Completed")
        resolve()
    }, 1000);
}) 

// Consumption 

promiseOne.then(() => {
    console.log("Promise Consumed");
})



new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Task-2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("2 Resolved");
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "abhayporwals", email: "abhay@gmail.com"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
    console.log(user.username);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false //true
        if (!error) {
            resolve({username: "Abhay", password: "123"})
        } else{
            reject('ERROR 404')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((usr) => {                      //Chaining
    console.log(usr);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("This will execute at any condition");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR JS went wrong')
        }
    }, 1000);
})

// Can do by async , await but they can't handle error directly

async function consumePromiseFive(){
    try {
        const response = await promiseFive // promise is an object, so don't write promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data = response.json() // code not print data still because data conversion also take some time so have to use await here also
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// getAllUsers()

// Then Catch method for same 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))