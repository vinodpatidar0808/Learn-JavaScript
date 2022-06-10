'use strict';

// scoping in practice
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // this doesn't creates the problem as the function is called after  variable declaration. so variable is already in global execution context before the function is called and variable is used
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // firstName declared again as it is inside a different scope and will be accessible inside this if block only.
            const firstName = 'rahul';
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);

            // this function will be block scoped
            function add(a, b) {
                return a + b;
            }
            // reassigining outer scop variable
            // output = 'New output';

            // creating new variable with same name as outer scope's variable
            // const output = 'new output variable inside if block'
        }
        // this doesn't work as str is defined as const inside a block
        // console.log(str);
        // this works as the var variables extends their scope to nearest function scope
        console.log(millenial);
        // add function will not be accessible here
        // add(6, 5);
    }
    printAge();
    return age;
}

const firstName = 'Vinod';
calcAge(1996);
// this doesn't work as the age in not accessible here. Variables are accessible in parent to child scoping manner so global execution context variables are accessible inside functions but not the vice versa
// console.log(age)

// hoisting and TDZ (temporal dead zone)

console.log('-----------HOISTING and TDZ------------');
// var: undefined
console.log(me);
// TDZ
// console.log(job);
// TDZ
// console.log(year);

var me = 'Vinod';
let job = 'Programmer';
const year = 1996;

// functions
console.log('hoisting in functions');
// function declaration can be hoisted
console.log(addDec(2, 5));
// function expression cannot be hoisted
// console.log(addExpr(2, 5));
// arrow function cannot be hoisted
// console.log(addArrow(2, 5));
function addDec(a, b) {
    return a + b;
}

// const addExpr = function (a, b) {
//     return a + b;
// };
var addExpr = function (a, b) {
    return a + b;
};

// const addArrow = (a, b) => a + b;
var addArrow = (a, b) => a + b;

// even if we declare functions as var both function expression and arrow function will still be not hoisted. as hoisting var varible results in undefined here we are doing something like undefined(2,5) which will result in error like addArrow is not a function

//  pitfall of hoisting : Example

// numProducts is undefined here and undefined is a falsy value. so this if block will  be executed even if numProducts become 10

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
    console.log('all products delete');
}

// diff b/w var, let and const
var x = 1;
let y = 2;
const z = 3;
// x will be available in global window object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
