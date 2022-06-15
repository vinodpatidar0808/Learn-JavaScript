'use strict';

// reduce method: reduces the entire array to one element, like adding all elements or any other operation
// reduce also gets the callback function but here in callback function we have first parameter as accumulator and 2nd is element, 3rd element index and 4th entire array
// reduce gets 2 parameters first is callback function and 2nd is initial value of accumulator
// you can have both regular and arrow function for callback
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulator is like a snowball
const balance = movements.reduce((acc, curr, i, arr) => {
    console.log(`iteration ${i + 1}: acc = ${acc}`);
    return acc + curr;
}, 100);

console.log(movements);
console.log(balance);

// same thing using for loop
/* 
let totalBalance = 0;
for (const mov of movements) {
    totalBalance += mov;
}
console.log(totalBalance);
 */

// we can do other things also with reduce

const maxValue = movements.reduce((maxVal, curr) => {
    if (maxVal < curr) maxVal = curr;
    console.log(maxVal);
    return maxVal;
}, movements[0]);
console.log(maxValue);


