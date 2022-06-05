'use strict';
// added in ES 6

// regular function
const calcAge1 = function (birthYear) {
    return 2022 - birthYear;
};

// arrow function
// syntax
// const fxnName = (params)=>{fxnBody}

// if arrow function has only one parameter you can omit parentheses also if fxn body has only return statement you can omit braces and return keyword
const calcAge2 = birthYear => 2022 - birthYear;

// to use arrow fxn
const age = calcAge2(1996);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, 'vinod'));

// there is fundamental difference between regular function and arrow function mainly related with this keyword.
