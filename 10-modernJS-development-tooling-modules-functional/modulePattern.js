// Module pattern is simply the way of exporting  and importing modules before ES6

//  IIFE  gets executed only once when the script loads and returns data which can be accessed later, this is possible because of closures
const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 234;
    const totalQuantiy = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    // this things will be exported as a public api
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantiy,
    };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);

//for each different type of module you had to create different script for each type of module and also had to include the scripts inside your html, they had problem with bundling also

//-----------------------COMMMONJS MODULE------------------------------
/*

// NOTE: commonJS module system --> used widely before ES6 and nodejs also used to have modules based on commonJS, most of npm packages still use commonJS module as npm  initially was intended for node only. but now it is used for entire js ecosystem
// in commonJS one file is one module
// this won't work in our code and browser, but it will work with nodeJs
// export
const cart2 = [];
const shippingCost2  =60;
export.addToCart2 =function (product, quantity) {
    cart2.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost2})`)
}

// import : require is not defined in browser environment but it works well with NodeJS
const {addToCart } = require('./shoppingCart.js')


*/
