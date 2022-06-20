'use strict';

// classes in js does not work like c++ or java, classes here are just syntactic sugar for what we learned in last lectures

// class experession
/*
const Personcl = class{

}
*/

// this is class declarations, but you have class expression also
class Person {
    // constructor can have properties which we want object to have
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // you can create methods inside class here. All methods outside of the constructor will be in prototype and not in objects
    calcAge() {
        console.log(2022 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.firstName}`);
    }
}

// creating object
const gagan = new Person('Gagan', 1997);
console.log(gagan);
gagan.calcAge();

console.log(gagan.__proto__ === Person.prototype);

// you can also declare methods using prototype with classes, but declaring them inside class brings it close to other languages
/* 
Person.prototype.greet = function () {
    console.log(`hey ${this.firstName}`);
};
 */
gagan.greet();

// Important notes about classes:
// 1. classes are not hoisted.
// 2. classes are first class citizens : i.e you can pass them to function or return from function
//  3. classes are executed in strict mode
//  4. you can use class syntax or constructor function whatever you like
