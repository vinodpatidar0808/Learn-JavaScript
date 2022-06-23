'use strict';

// to create new promise we have to use new constructor,
// promise accepts only one function which is calle as executor function
// this executor function will create the asynchronous behaviour that we are trying to create with the promise, this executor function should eventually produce a resolved value
// as always you can use arrow functions also for executor function 0
const lotteryPromise = new Promise(function (resolve, reject) {
    // a promise always needs to end in one of the 2 states resolve or rejected
    // we win lottery if we get num>=0.5, we win means promise is resolved
    console.log('lottery draw is happening');
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            // calling this resolve function like this will make promise as resolved()
            // whatever you pass in resolve function will be available for then method
            resolve('You Win');
        } else {
            // whatever you pass will be available to catch method
            // reject('You lost your money');
            // instead of using string you can pass a new error object also
            reject(new Error('You lost your Money'));
        }
    }, 2000);
});

// consuming above promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// we usually consume promises, we build promises for promisifying

// promisifying: converting callback based asynchronous behaviour into promise based asynchronous behaviour.

// promisifying setTimeout function: this is what we generally do in promisifying. encapsulating asynchronous behaviour further
const wait = function (seconds) {
    // here we don't need reject because it is impossible for a timer to fail
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

//consuming promise
// now here we can execute anycode after 2 seconds, as timer is promified its task will go to microtask queue
wait(2)
    .then(() => {
        console.log('i waited for 2 seconds');
        return wait(1);
    })
    .then(() => console.log('i waited for 1 second'));

// now this callback hell can be converted to promise version using above function
/* 
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
 */

wait(1)
    .then(() => {
        console.log('1 second passed ');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed ');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed ');
        return wait(1);
    })
    .then(() => console.log('4 second passed '));

// easy way to create a rejected and fulfilled promise immediately
// resolve is a static method on static constructor
// this  one will resolve immediately

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));
