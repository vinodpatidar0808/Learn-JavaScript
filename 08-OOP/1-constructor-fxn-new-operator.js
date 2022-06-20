'use strict';

// constructor function : to create objects, it is similar to regular function with only differene that we call it using new operator

// remember function constructors are not a feature of js, they are simply a pattern developed by developers and now everyone uses them

// in OOP : constructor function always starts with capital letter, arrow function won't work as a constructor function as at doesn't have this keyword and we need that
const Person = function (firstName, birthYear) {
    console.log(this);
    // this will be instance properties, defined for each instance
    this.firstName = firstName;
    this.birthYear = birthYear;

    // methods:
    // NOTE: Never create a method inside constructor. Why?--> if we create many person objects using this constructor function than we will carry this method with all of this objects. Performance impact
    this.calcAge = function () {
        console.log(2022 - this.birthYear);
    };
};

// constructor function is called with new operator
/**NOTE:  behind the scene new does 4 things
 * 1. New empty object {} is created
 * 2. function is called, this keyword points to this {} object
 * 3. {} this created object is linked to prototype
 * 4. function automatically return {}
 */
const vinod = new Person('Vinod', 1991);
console.log(vinod);

const deekshith = new Person('Deekshith', 1997);
const gagan = new Person('Gagan', 1998);
console.log(deekshith);
console.log(gagan);

// we can check whether something is an instance of some constructor
console.log(vinod instanceof Person);


