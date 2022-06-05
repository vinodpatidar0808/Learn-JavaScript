'use strict';

// functions : a piece of code that we can use over and over again. A function can hold one more complete lines of code
// function structure
/*
    /params represent input data of a function. They get defined when function is called 
    function descriptiveFunctionName(params) {
        function body
    }
 */

function logger() {
    // function body
    // this part of code will be executed whenever a function is called
    console.log('welcome to JS functions');
}

// calling / running or invoking a function
logger();
logger();
logger();
logger();

// a function can also recieve and send data back

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    // we can return any value from a function using the return keyword
    return juice;
}

//declare a variable to store a value return by a function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// here we did not store the value returned by a function and directly printed it on console
console.log(fruitProcessor(5, 1));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// you should atleast call a function once because without  calling it function will not be executed
// not all function need to return something and not all function need parameters

// functions allow us to write maintenable code. DRY(Don't repeat yourself) principle in programming

// console.log() is also a function but it's called builtin function as it is built in language itself
