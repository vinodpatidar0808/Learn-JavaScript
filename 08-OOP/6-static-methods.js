'use strict';

const arr = Array.from([1, 2, 3, 4]);
console.log(arr);

// NOTE: this from method is attached to array constructor and not to prototype so you can not use it from all the arrays
// array.from is a simple function but it is attached to array constructor
// from method is in Array namespace :

//creating static methods
class Person {
    // constructor can have properties which we want object to have
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const vinod = new Person('vinod ', 1996);

// creating static method hey
Person.hey = function () {
    console.log('hey there 👋👋👋');
    console.log(this);
};

// just call the hey method immediately
Person.hey();
// now this hey method won't be available to objects defined using Person constructor
// console.log(vinod.hey());
