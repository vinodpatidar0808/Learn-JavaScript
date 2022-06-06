'use strict';

// for(let i=0;i<10;i++){}

/*
    while(condition){
        statements
        change in condition variable/ or stoping condition or break  
    }
*/
// initialize loop variable before loop
let rep = 1;
while (rep < 7) {
    console.log(`lifting weight repetition ${rep}`);
    // if you don't provide any stopping condition the loop will run infinitely
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end');
}
// when you don't know how many times a loop need to run then use while loop
