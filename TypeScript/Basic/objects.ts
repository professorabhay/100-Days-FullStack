const User = {
    name: 'John',
    age: 16,
    isActive: false,
}

// let createUser = ({name: string, isPaid: boolean}) => {}

// createUser({name: 'John', isPaid: false})

function createCourse():{}{
    return {};
} // return type defined object and you can also add inside it the structure.

// Type alias : 

// type User = {
//     name: string;
//     age: number;
//     isActive: boolean;
// }

// function createUser1(user: User){
//     // defined User type as a obj structure. 
// }


// 3 special keywords -/

type User = {
    readonly _id: string; // Now you not able to change that !
    name : string;
    email : string;
    isActive : boolean;
    creditcardDetails?: number; // optional means not compulsary to give 
}

let myUser : User = {
    _id: "123",
    name: "John",
    email: "john@example.com",
    isActive: true
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
} // that & combine the result other func in that ! 

myUser.email = "new@example.com"
// myUser._id = "12334" // Not able to change now LOL !
