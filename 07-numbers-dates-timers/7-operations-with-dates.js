'use strict';

// you can perform calculations on dates : addition, substraction etc. but operations will result in timestamp (in miliseconds) so convert them back to date

const future = new Date(2022, 10, 19, 15, 23);
console.log(+future);
// const calcDaysPassed = (date1, date2) => date2 - date1;
const calcDaysPassed = (date1, date2) =>
    Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days = calcDaysPassed(new Date(2022, 3, 14), new Date(2022, 3, 24));
const days2 = calcDaysPassed(new Date(2022, 3, 14), new Date(2022, 3, 4));
console.log(days);
console.log(days2);


