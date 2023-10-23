"use strict";
// Narrowing
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    } // now it first verifying and providing the property of admin
}
// instanceof keyword ->
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined
// }
// so basically its not able to determine is it fish or bird becuase function isFish return boolean value
function isFish(pet) {
    return pet.swim !== undefined;
}
// Now it will work 
// saying if fish then definetly ad swim method 
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return ' fish food ';
    }
    else {
        pet;
        return ' bird food ';
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.width * shape.length;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
