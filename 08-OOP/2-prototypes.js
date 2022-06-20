'use strict';

//Prototype: each and every function in js has a property called prototype, that includes constructor fxns also

const Person = function (firstName, birthYear) {
    console.log(this);
    // this will be instance properties, defined for each instance
    this.firstName = firstName;
    this.birthYear = birthYear;
};
// all the objects/ that are constructed using this constructor will inherit, i.e they will also have all the properties and methods defined in this constructor
console.log(Person.prototype);

// by defining methods this way we avoid having same function for each object created using constructor function.
// why this works: because any object has access to properties and methods of its prototype
Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const vinod = new Person('Vinod', 1996);
const gagan = new Person('Gagan', 1998);
// even though vinod doesn't have calcAge inside it but it can access calcAge method by prototypal inheritance
console.log(vinod);
vinod.calcAge();
gagan.calcAge();

// to check prototype
console.log(vinod.__proto__);
// person.prototype should be prototype of person but this is not the case, person constructor and objects constructed using this constructor will have same prototype
console.log(vinod.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(vinod));
// person.prototype is not prototype of person
console.log(Person.prototype.isPrototypeOf(Person));
//prototype = prototype of linked objects

// we can set properties also on prototypes
Person.prototype.species = 'Homo Sapiens';
console.log(vinod.species, gagan.species);

// own properties : properties that are declared in object itself
console.log(vinod.hasOwnProperty('firstName'));
console.log(vinod.hasOwnProperty('species'));
