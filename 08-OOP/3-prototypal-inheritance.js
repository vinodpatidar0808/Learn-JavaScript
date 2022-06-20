'use strict';

// prototypal inheritance
const Person = function (firstName, birthYear) {
    console.log(this);
    // this will be instance properties, defined for each instance
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const vinod = new Person('Vinod', 1996);
const gagan = new Person('Gagan', 1998);

Person.prototype.species = 'Homo Sapiens';

console.log(vinod.__proto__);
// object.prototype (top of prototype chain)
console.log(vinod.__proto__.__proto__);
console.log(vinod.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 6, 6, 7]; // same as new Array === [], array constructor
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// you can create new methods on prototypes so that all the instances/objects can have access to them
// this unique property will now be accessible to all the arrays in program, avoid it just for educational purpose
Array.prototype.unique = function () {
    return [...new Set(this)];
};
console.log(arr.unique());

// built-in objects
const h1 = document.querySelector('h1');
console.dir(h1);
