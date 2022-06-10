'use strict';

// console.log(this);

const calcAge = function (birthYear) {
    // console.log(2037 - birthYear);
    // in sloppy mode this will also be global object i.e window
    // in strcit mode this will be undefined
    // console.log(this);
};

calcAge(1996);

// arrow function
const calcAgeArrow = birthYear => {
    // console.log(2037 - birthYear);
    // arrow fxn does not get its own this keyword. instead arrow function uses lexical this keyword which means arrow function get this of its parent. here parent of this function is global i.e window
    // console.log(this);
};

calcAgeArrow(1996);

// this keyword inside a method
// console.log('------this inside a method----');
const vinod = {
    year: 1996,
    calcAge: function () {
        // method will get this as the object which calls it not always the object which includes the method.
        // console.log(this);
    },
};
vinod.calcAge();

const person = {
    year: 1995,
};
// method borrowing
person.calcAge = vinod.calcAge;
// console.log(person);
// here this will get person object as person object calcAge method
person.calcAge();

const f = vinod.calcAge;
f();

// regular and arrow functions

// this var will declare a varible inside global window and the arrow function of vinod1 mehtod will have access to this firstName from global window object. comment it and you will have undefined in the arrow function this. that's why not to use var
// var firstName = 'vinod';

const vinod1 = {
    firstName: 'vinod',
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
    // here this will be undefined. parent scope of greet method is global scope, hence arrow function will this of window object.
    // never use arrow function as a method
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
vinod1.greet();

//  function inside method
const vinod2 = {
    firstName: 'vinod',
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
        /*
        // pre ES 6 solution.
        const self = this;
        const isMillenial = function () {
            // this here is undefined.  solution is to use self outside of this
            console.log(this);
            console.log(self.year >= 1981 && self.year <= 1996);
            // console.log(this.year >= 1981 && this.year <= 1996);
        };
        // this will be undefined bcoz this is just a regular function call
        */
        //    solution 2: use arrow function
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    // here this will be undefined. parent scope of greet method is global scope, hence arrow function will this of window object.
    // never use arrow function as a method
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
vinod2.calcAge();

// function also gets access to the arguments keyword along with this keyword
// arguments keyword is available only in regular functions (function declaration and function expression both) but not in arrow functions
// useful when we need to pass more arguments than parameters

const exmExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
exmExpr(1, 3);
exmExpr(1, 3, 5);

const exmArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
