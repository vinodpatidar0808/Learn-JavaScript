'use strict';

// there are two timers in js settimeout and setinterval
// set timeout run once after a defined time, use to execute some code after sometime in future
/* 

    timeout is always in miliseconds, arguments after timeout are callback function argument
    setTimeout(() => {
        
    }, timeout,[arg1],[arg2],....);
*/

// code execution does not stop here
setTimeout(
    (ing1, ing2) => {
        // console.log(`here is your pizza with ${ing1} and ${ing2}`);
    },
    3000,
    'olive',
    'spinach'
);

// this executes immediately after above instruction does not wait for setTimeout to finish.
// console.log('i am after pizza delivery');

// you can stop settimeout timer before its time is over
const ingredients = ['olive', 'spinach', 'onion'];
const pizzaTimer = setTimeout(
    (ing1, ing2, ing3) => {
        // console.log(`here is your pizza with ${ing1}, ${ing2} and ${ing3} `);
    },
    4000,
    ...ingredients
);

// to stop setTimeout you need to save it in a variable which returns the timer id like above
if (ingredients.includes('onion')) clearTimeout(pizzaTimer);

// setinterval : this runs repeatedly after a given time until you stop it

const clockTimer = setInterval(() => {
    const now = new Date();

    console.log(
        new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(now)
    );
}, 1000);

// to stop setInterval  timer from executing you can use clearInterval similar to clearTimeout

// suppose we want to stop clock after 13 seconds
setTimeout(
    timerId => {
        clearInterval(timerId);
        console.log('stoping clock here');
    },
    13000,
    clockTimer
);
