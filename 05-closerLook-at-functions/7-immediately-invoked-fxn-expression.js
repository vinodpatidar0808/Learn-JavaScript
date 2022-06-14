'use strict';

const runOnce = function () {
    // but this is not true you can run this function as many times as you like
    console.log('this run once');
};
runOnce();

// solution: this is called immediately invoked function expression
(function () {
    console.log('this will never run again');
})();

// arrow function
(() => console.log('this will also never run again'))();
// we do this mainly for scoping: all data inside this function is encapsulated (private),

// let and const also declares scopes
{
    const isPrivate = 23;
    var notPrivate = 50;
}
// isPrivate throw an as it is not accessible
console.log(isPrivate);
console.log(notPrivate);
