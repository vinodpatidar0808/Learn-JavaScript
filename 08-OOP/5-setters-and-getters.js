'use strict';

// setters and getters: every object in js can have setter and getter  properties, this special properties are called assessor properties while normal properties are called data properties

const account = {
    owner: 'vinod',
    movements: [100, 200, -200, 5000, -1000],
    // getter, last transaction
    // getter now can be read as a property instead of a method
    get latest() {
        return this.movements.slice(-1).pop();
    },
    // any setter method needs to have exactly one parameter
    // it is not mandatory to have both getter and setter for same property you can have them independently
    set latest(mov) {
        this.movements.push(mov);
    },
};
// getter
console.log(account.latest);

//setter
account.latest = 8000;
console.log(account.latest);

// classes can also have getters and setters : look file 4-ES6-classes.js

// setters and getters can be very useful for data validation
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

    // getters and setters : for explanation see file 5-setters-and-getters.js
    get age() {
        return 2022 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        // if you define properties with _ then you have to define getter for that property
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }
    get _fName() {
        return this._fullName;
    }
}

const vinod = new Person('Vinod Patidar', 1996);
vinod.fullName = 'vinod patidar';
console.log(vinod._fName);
const naina = new Person('naina', 2002);
naina.fullName = 'naina';
