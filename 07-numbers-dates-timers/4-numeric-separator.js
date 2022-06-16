'use strict';

// ES 2021: numeric separator : to make numbers readable

// these _ are numeric separator the engine completely ignores these separators
// we can place _ only between numbers
const diameter = 287_460_000_000_000;

console.log(diameter);
const price = 300_78;
console.log(price);

const PI = 3.14_15;
// const PI = 3._1415; // illegal
// const PI = 3.1415_;  //illegal
// const PI = _3.1415;  //illegal
console.log(PI);

console.log(Number('342_4534')); // not allowed may introduce bugs
