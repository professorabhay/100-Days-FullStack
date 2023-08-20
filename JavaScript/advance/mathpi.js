const descryptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descryptor);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: 'true',

    // Now Loop boom !!
    orderChai: function(){
        console.log("Chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)){
    if (typeof value != 'function') {
        console.log(`${key}: ${value}`);
    }
    
}