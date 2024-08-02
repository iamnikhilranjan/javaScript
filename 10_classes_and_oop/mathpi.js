const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Uncomment the following lines to modify the 'name' property descriptor
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) { // using Object.entries we make it iterable
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

