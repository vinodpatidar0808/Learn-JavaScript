'use strict';

// top level code runs first : code that is not in any callback

console.log('test start');
//NOTE: timer occured first in the queue and hence its callback will be placed in callback queue, but callback of promise will be placed in microtasks queue which has more priority then callback queue when call stack is empty. if microtask takes a long time then timer will be delayed
// this 0 second timer will not guarantee that your code will execute after 0sec
setTimeout(() => console.log('0 second timer'), 0);
// promise resolved immediately
Promise.resolve('resolved promise 1').then(res => console.log(res));

// promise will resolve immediately but microtask will take time
Promise.resolve('resolved promise 2').then(res => {
    for (let i = 0; i < 100000; i++) {}
    console.log(res);
});

console.log('test end');
