'use strict';

// math function are available on Math namespace

// square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// cubic root
console.log(125 ** (1 / 3));
console.log(Math.cbrt(125));

// max no
console.log(Math.max(1, 2, 4, 5, 6, 4, 5664, 34235436, 566, 45, 4));
// does not work when any number is NaN
console.log(Math.max(1, 2, 4, 5, 6, 4, 5664, 34235436, 566, 45, 4, '23px'));

// min no
console.log(Math.min(6, 3, 23, 2, 1, 3, 63, 3, 6, 7, 3));

// constants
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random numbers
console.log(Math.trunc(Math.random() * 6) + 1); // random from 1 to 6
// generalized b/w min and max
const randomInt = (min, max) =>
    Math.trunc(Math.random() * (max - min) + 1) + min;
// 0....1 -> 0....(max - min) -> min...max
console.log(randomInt(20, 30));

// rounding integers
// trunc: remove all digits after .
console.log(Math.trunc(4.9999));
// round : rounds to nearest integer
console.log(Math.round(2.3));
console.log(Math.round(2.9));
// 2.5 is rounded to 3
console.log(Math.round(2.5));

//floor round to nearest lowest/equal integer, does type coercion also
console.log(Math.floor(2.8));
console.log(Math.floor('2.3'));
console.log(Math.floor(-2.5));

//ceil round to nearest greater or equal integer
console.log(Math.ceil(4.6));
console.log(Math.ceil('4.6'));
console.log(Math.ceil(-4.5));

// rounding floating/decimal point numbers
// toFixed method: round decimal digits to give no, always returns a string
// 3.5345245 this is a number and it's primitive type , primitive types don't have methods so js behind the scenes will convert it to an object {boxing}
console.log((3.754353).toFixed(2));
// if less digits it adds 0 
console.log((3.1).toFixed(5));


// there are lot more function if you need logarithmic or trignometric function refer mdn