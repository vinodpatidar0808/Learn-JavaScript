'use strict';

// functions returning another function
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

// this works because of closures which will covered later
const greetHey = greet('hey');
greetHey('vinod');
greetHey('gagan');

// simiar to greet('hello')('vinod')
greet('hello')('vinod');

// arrow function
const sayHello = msg => {
    return name => {
        console.log(`${msg} ${name}`);
    };
};
// short of above function: arrow function returning another function
const sayHellArr = greeting => name => console.log(`${greeting} ${name}`);

const sayHelloToPerson = sayHello('hello');
sayHelloToPerson('vinod');
sayHelloToPerson('gagan');

const sayHelloShort = sayHellArr('hello');
sayHelloShort('deepak');
