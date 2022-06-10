'use strict';

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    // in sloppy mode this will also be global object i.e window
    // in strcit mode this will be undefined
    console.log(this);
};

calcAge(1996);

// arrow function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // arrow fxn does not get its own this keyword. instead arrow function uses lexical this keyword which means arrow function get this of its parent. here parent of this function is global i.e window
    console.log(this);
};

calcAgeArrow(1996);

// this keyword inside a method
console.log('------this inside a method----');
const vinod = {
    year: 1996,
    calcAge: function () {
        // method will get this as the object which calls it not always the object which includes the method.
        console.log(this);
    },
};
vinod.calcAge();

const person = {
    year: 1995,
};
// method borrowing
person.calcAge = vinod.calcAge;
console.log(person);
// here this will get person object as person object calcAge method
person.calcAge();

const f = vinod.calcAge;
f();
