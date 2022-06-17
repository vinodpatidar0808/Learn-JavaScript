'use strict';

// create a date : 4 ways to create dates all uses new Date constructor
// current date
const now = new Date();
console.log(now);
// hh:mm:ss -> hh in 24 hr formate
console.log(new Date('Jun 18 2022 08:05:45'));

// not adviced to use this one for your own strings, if date is created by js you can use this one
console.log(new Date('December 24, 2022'));
console.log(new Date());

// months in js are 0 based
console.log(new Date(2022, 10, 19, 15, 23, 5));
// november is 30 days only so 31 will be converted to 01 dec 2022
console.log(new Date(2022, 10, 31));

// amount of miliseconds passed from initial unix time
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //259200000 timestamp of jan 4 1970

// working with dates
const future = new Date(2022, 10, 19, 23, 15, 30);
console.log(future.getFullYear());
// month is zero based
console.log(future.getMonth());
// day is the day of week and its is also 0 based
console.log(future.getDay());
// date : date of the month
console.log(future.getDate());
// hours
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// nicely formated string
console.log(future.toISOString());

//  timestamp : miliseconds passed since jan 1 1970
console.log(future.getTime());
// from time stamp to date
console.log(new Date(1668879930000));

// timestamp of current time
console.log(Date.now());

// set methods

future.setFullYear(2023);
console.log(future);
// future.setMonth(11), future.setDate()  many other methods also exists