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
