'use strict';

// a closure is not a feature we use i.e we don't create closure it happens automatically in certain situations we just have to recognize those situations
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(passengerCount);
    };
};

const booker = secureBooking();
// our code is currently in global execution context

// booker function is able to increment the passengerCount
// booker();
// booker();
// booker();

console.dir(booker);
// double [[]] around some properties means that we cannot access these properties from our code

// examples

let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

g();
// f function close over any value that is in execution context
f();

const h = function () {
    const b = 77;
    f = function () {
        console.log(b * 2);
    };
};

console.log('-------g function--------');
g();
console.log('-------f function--------');
f();
console.log('-------h function--------');
h();
console.log('-------f function--------');
// f again get reassigned, here it will remember variable of it's birth place
f();

// example 2:
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`will start boarding in ${wait} seconds`);
};

// closure has more priority than scope chain
const perGroup = 1000;
boardPassengers(180, 3);
