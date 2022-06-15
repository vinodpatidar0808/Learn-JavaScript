'use strict';

// flat and flatMap method: ES-2019

// flat method: returns new array with one layer of nesting flattened i.e flats for one layer only
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, [8, 9, 10]],
];
console.log(arr.flat());
console.log(arr);

// solution: flat(depth) : depth by default is 1
console.log(arr.flat(2)); //goes 2 level deep

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

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);
const overAllBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
// you can shorten all of the stuff above using chaining
const totalBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, curr) => acc + curr, 0);

console.log(totalBalance);

// using map and then flat is very common , to solve this flatMap method was introduced, this is better for performance
// flatMap only goes one level deep, if you need to go more deeper to flatten use the earlier approach
// you need to give flatmap same callback function which you will give to map method when using flat method
const total = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, curr) => acc + curr, 0);
console.log(total);
