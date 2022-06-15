'use strict';

// includes method : here we check for equality if some element is equal to the give element or expression
// what if we wanted to check for a condition

// some method: returns boolean value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every method: pretty similar to some method but only returns true when all elements satisfy the give condition
// you can write callback function seperately and use this function as argument wherever you need this function

const allDeposits = movements.every(mov => mov > 0);
console.log(allDeposits);

const movements2 = [430, 1000, 700, 50, 90];
const allDep = movements2.every(mov => mov > 0);
console.log(allDep);

// separate  callback
const callbackFxn = mov => mov < 0;

const allWithdrawals = movements2.every(callbackFxn);
console.log(allWithdrawals);
