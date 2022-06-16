'use strict';

const account1 = {
    owner: 'Vinod Patidar',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Gagan Patidar',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

// in js numbers are always represented in form floating point data, 64base2 formate internally
console.log(23 === 23.0);
// Base 10 : 0 to 9, 10/3 =  3.333333333333
// Base 2 : 0 1 : in binary same happens with 0.1
// that's reason you can't do precise and accurate scientific calculations in js
console.log(0.1 + 0.2);
// looks true and it is but not for js
console.log(0.1 + 0.2 === 0.3);

console.log(Number('23'));
console.log(+'23'); // after seeing + sign js does type coercion

//parsing : parses string even when it contains some symbols. but first letter must be a number
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('px39'));
// parseInt accepts an optional 2nd argument known as radix (base), default is base 10
// console.log(Number.parseInt('30px', 2));

// parsefloat: parsing decimal numbers from strings
console.log(Number.parseFloat('2.4rem'));

// parseFloat and parseInt : both are global function you don't have to call them on Number you can also call them directly, but this is traditional way. In modern js it is recommended to use this functions on Number as Number here provides namespace
console.log(parseFloat('24.3px'));

// isNaN : to check whether a value is NaN or not
// check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'23X'));
console.log(Number.isNaN(34 / 0));
console.log(23 / 0); // gives infinity

// better way to check whether number is finite or not
console.log(Number.isFinite(56 / 0));
console.log(Number.isFinite(56 / 4));
console.log(Number.isFinite('234')); // NaN is also not finite 

// isFinite is better way of checking NaN prefer isFinite


