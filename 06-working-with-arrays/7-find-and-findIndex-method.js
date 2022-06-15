'use strict';

// find method
/**
 * to retrieve one element of array based on a condition
 * find also accepts a callback function and you can access index and array using function params
 * you can use both arrow and regular function for your callback function
 * returns the first element which satisfy the condition
 *
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const first = movements.find((mov, ind, arr) => {
    // console.log(ind, arr);
    return mov < 0;
});

console.log(first);

const account1 = {
    owner: 'Vinod Patidar',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Gagan Patidar',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Deepak Patidar',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Deekshith Velgapuni Raya',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);
// if does not exist it returns undefined
const account = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(account);

// findIndex method: close cousin of find method works in same manner as find works with only difference that it returns index of the first occurence of element which satisfy the given condition
// useful in cases like when we want to delete an element from array based on a condition, we use splice to delete element in array

console.log('---findIndex method ---------');
const ind = movements.findIndex(mov => mov === -400);
console.log(ind);
console.log(movements);
movements.splice(2, 1);
console.log(movements);
