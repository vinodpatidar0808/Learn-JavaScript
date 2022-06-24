//NOTE: commented for parcel
/* 

// in module names it's a convention to use camelcase for file names
// exporting module

console.log('exporting module');

// Blocking code: importing module will let first finish it
/* console.log('start fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('finish fetching');

// variable declared inside modules are module scoped
// all variable are private here i.e you can not use them in importing module directly, you have to export them from here first
const shippingCost = 10;
export const cart = [];

// NOTE:
// exports always need to be in top level, they won't work if they are in block scope or somewhere else other than top level.
// there 2 types of export : name export and default export.

// named export : just put export in front of whatever you want to export ( function, variables etc)

// named export, you can get access to this function in importing module(s) by importing it
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
};

// you can export multiple things using named export and that is the main use of named export

const totalPrice = 214;
const totalQuantiy = 23;
// you can change names for export using as keyword
export { totalPrice, totalQuantiy as tq };

// default export : use when you want to export only one thing, you don't have to give it any name

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the default cart`);
}

// export import are live connections: changes in exported module will be available in imported also
*/

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
