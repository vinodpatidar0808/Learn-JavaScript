// no need to tell for strict mode as all module execute in strict mode by default

// importing module
// you can omit .js extension from module exports
// import './shoppingCart'
// addToCart from exporting module,  you have to give same name
// if you want different name you can do like this --> import totalPrice as price

// here you will need js extension
/* 
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);
 */

// imported code is parsed first then this code gets executed
console.log('importing module');

// import everything from a module, everything will be imported in an object. Like public Api's
/* 
import * as shopping from './shoppingCart.js';
shopping.addToCart('biscuit', 10);
console.log(shopping.totalPrice, shopping.tq);
 */

// importing things from same module twice won't create a problem but it is not a good practice

// you can give any name to default export while importing
//  to import default and named export together
// import add, {addToCart, totalPrice, tq} from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizzas', 10);
add('apples', 13);
add('oranges', 30);
console.log(cart);

// imports are not copied objects they are live connnections
