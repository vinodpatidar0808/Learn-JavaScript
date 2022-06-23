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

//NOTE:  ES2022 : earlier you are not allowed to use await outside of async functions, but after ES2022 you can use top level await in ES6 modules
// to make your top level await work you have to give type='module' to your script in index.html
// this is cool and great but it does cause blocking of code below it.  can be useful in some situation but can also be harmful if there is a long running request
/* 
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

console.log('something blocked')
 */

// practical application
// calling an async function always returns promise
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
//use then and catch for getting value or error, however doing this is not very clean
lastPost.then(last => console.log(last));

//NOTE: using top-level await for above task
const lastPost2 = await getLastPost();
console.log(lastPost2);
