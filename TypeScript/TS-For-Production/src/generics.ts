const score : Array<number> = [] //empty array 
const names : Array<string> = []

function identityOne(val: boolean | number) : boolean | number {
    return val 
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// it saying that I'm similar to any but when something is input then the return type locked with the type of input [string, boolean, number ot anything. 
// so, it will not mismatch with the return type like above one and two]

function identityFour<T>(val: T):T{
    return val
} // this is similar to the three 


interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Milton", type:1})

function getSearchProduct<T>(product : T[]): T {
    const myIndex = 3
    return product[myIndex]
}

const getMoreSearchProducts = <T>(product: T[]): T=> {
    const myIndex = 3
    return product[myIndex]   
} // Generic another way = <T,> comma to show that this is not the part of jsx or html

interface Database {
    connection: string,
    usernames: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {
    connection: "localhost:4404",
    usernames: "localhost"
})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sell<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}







