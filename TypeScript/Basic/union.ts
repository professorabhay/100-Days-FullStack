// WHen you don't know what type of data is coming.

let score: number | string  = 33
score = "22"

// Way to give 2 types of data 😱

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let Abhay: User | Admin = {
    name: "Abhay", id: 334
}

Abhay = {username: "akg", id:334}

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);
}

getDbId(3)
getDbId('3')


// array - 


const data : number[] = [1,2,3]
const data2 : string[] = ['1','2','3']
// const data3 : string [] | number[] = [1,2,3, '1'] // error
const data3 : (string  | number)[] = [1,2,3, '1'] // correct type to do this !!


let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = 'aisle'
// seatAllotment = 'crew' // not possible 




export {}