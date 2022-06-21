'use strict';

class Person {
    // constructor can have properties which we want object to have
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // you can create methods inside class here. All methods outside of the constructor will be in prototype and not in objects

    // instance methods
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

    // static method
    static hey() {
        console.log('hey there 👋👋');
        console.log(this);
    }
}

// to implement inheritance using es6 classes you only need 2 things extend  and super keyword

class Student extends Person {
    constructor(fullName, birthYear, course) {
        // always need to happen first
        // here super is simply constructor function of parent class
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
}

const gagan = new Student('Gagan Patidar', 1998, 'Human resource management');
console.log(gagan);
gagan.introduce();
gagan.calcAge();



// 