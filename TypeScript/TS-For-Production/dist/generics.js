"use strict";
const score = []; //empty array 
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// it saying that I'm similar to any but when something is input then the return type locked with the type of input [string, boolean, number ot anything. 
// so, it will not mismatch with the return type like above one and two]
function identityFour(val) {
    return val;
} // this is similar to the three 
identityFour({ brand: "Milton", type: 1 });
function getSearchProduct(product) {
    const myIndex = 3;
    return product[myIndex];
}
const getMoreSearchProducts = (product) => {
    const myIndex = 3;
    return product[myIndex];
}; // Generic another way = <T,> comma to show that this is not the part of jsx or html
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, {
    connection: "localhost:4404",
    usernames: "localhost"
});
class Sell {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
