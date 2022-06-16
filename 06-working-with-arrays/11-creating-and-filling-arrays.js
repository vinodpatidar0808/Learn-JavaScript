'use strict';

console.log([1, 2, 3, 4, 5, 5, 5, 6]);
console.log(new Array(2, 3, 4, 45, 56, 6, 7));

// array constructor
// this creates array of length 7 with empty elements , here we can not use methods like map on x , not really useful
const x = new Array(7);
// fill method : fill the entire array with given value. Mutates the original array
// x.fill(1)

// x.fill(value,[startIndex], [endIndex]): endIndex will be excluded
x.fill(1, 3, 5);
console.log(x);
x.fill(23, 5, 6);
console.log(x);

// Array.from (ES6) : here we use from method on Array constructor
// Array.from takes 2 parameters and object with length property and callback function which return a value to fill the array
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// [1,2,3,4,5,6,7] ; creating this array usign Array.from
// here you can throw curr using _ in place of curr: this is similar to map method's callback function
// both below statement are same
// const z = Array.from({length:7},(curr,i)=>i+1)
const z = Array.from({length:7},(_,i)=>i+1)

// real use case of Array.from
/**
 * initially introduced to create arrays from array like structures{iterables}
 * another example of array like structures is querySelectorAll which returns a nodelist of elements which  is not an actual array and you can't use most of array methods on this nodelist. to use array methods on this nodelist we have to convert it to an actual array using Array.from 
 *  
 * */ 

/* 
const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), el=>Number(el.textContent)
)
 */
// you can do this mapping (2nd argument) separately using map method on movementsUI

// alternately : this will also return an array but here you will have to apply map method separately
// const movementsUI = [...document.querySelectorAll('.movements__value')];