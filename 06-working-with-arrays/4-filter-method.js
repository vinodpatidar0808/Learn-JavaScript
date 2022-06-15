'use strict';

// filter method : filters elements which satisfy the given condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// calculate deposits in an array , deposits are greater than 0
// you have access to element, element index and entire array in filter also in same order
// you can use both regular and arrow function here, but arrow function is shorter for one liners like this
const deposits = movements.filter((mov, i, array) => {
    // console.log(i, array);
    return mov > 0;
});
console.log(movements);
console.log(deposits);

// withdrawals array
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// same thing using regular for of loop
/* 
const depositsFor = [];
for (const mov of movements) {
    if (mov > 0) depositsFor.push(mov);
}
 */
