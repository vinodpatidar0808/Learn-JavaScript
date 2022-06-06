'use strict';

// allow us to automate the repetitive tasks like printing something 100 times

// for loop with a control variable
/*
    // for loop keeps running while condition is true
    here let bcoz this counter variable will be updated after each iteration
    for (let rep=1;rep<=10;rep=rep+2){
        loop body;
        rep variable will be accessible inside this loop body
    }
    for(let variable=initial value; conditon on variable; change in variable after each iteration)

*/

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetion ${i}`);
}

// looping through arrays
const friends = ['deepak', 'gagan', 'deekshith', 'krispy'];
//array[array.length] does not exist

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
// const array = [] ; // creating an empty array

const years = [1991, 1992, 1994, 1998, 1996, 2001];

const ages = [];
for (let i = 0; i < years.length; i++) {
    ages[i] = 2022 - years[i];
}
console.log(ages);

// continue and break statement
// continue: to skip the current iteration of the loop and continue with the next iteration
// break completely stops the loop and exits the loop

// continue
console.log('continue in loop');
for (let i = 0; i < years.length; i++) {
    if (years[i] === 1996) continue;
    console.log(years[i]);
}

// break
console.log('break statement in loop');
for (let i = 0; i < years.length; i++) {
    if (years[i] === 1994) break;
    console.log(years[i]);
}

// looping backwards
console.log('looping backwards');
for (let i = years.length - 1; i >= 0; i--) {
    console.log(years[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------starting exercise ${exercise}----`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} lifting weight repetition ${rep}`);
    }
}
// for each iteration of outer loop internal loop will execute 5 times
