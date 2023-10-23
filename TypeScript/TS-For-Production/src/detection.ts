// Narrowing

function detectType(val: number | string){
    if(typeof val === 'string'){
       return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if (!id) {
        console.log('Please provide ID')
        return
    }
    id.toLowerCase()
}

// typeof is also known as type guard 

// in keyword -> 

interface User {
    name: string,
    email: string
}

interface Admin {
    name : string,
    email : string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ('isAdmin' in account) {
        return account.isAdmin
    } // now it first verifying and providing the property of admin
}

// instanceof keyword ->

function logValue(x : Date | string){
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}


// type predicates ->

type Fish = {
    swim: () => void 
};

type Bird = {
    fly: () => void 
};

// function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined
// }
// so basically its not able to determine is it fish or bird becuase function isFish return boolean value

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}
// Now it will work 

// saying if fish then definetly ad swim method 

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return ' fish food '
    } else {
        pet
        return ' bird food '
    }
}

// Discriminated unions

interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    } 
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.width * shape.length
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
        
    }
}