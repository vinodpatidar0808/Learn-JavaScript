'use strict';

// internationalization API, google mdn Intl

const now = new Date();
// argument is called locale string
// part before .format is called formater and .format tells the formater which date to formate
// us mm/dd/yyyy
const formattedDate = new Intl.DateTimeFormat('en-US').format(now);
// console.log(formattedDate);

// 'en-GB' // for britain
// for more codes lingoes.net

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    // month: 'numeric', // for month you can also write long, 2-digit
    month: 'long',
    year: 'numeric',
    weekday: 'long', // short , narrow more properties are there
};

// you can pass object directly but it becomes messy when you have more options, with this options argument you get properties which are in options object
console.log(new Intl.DateTimeFormat('en-GB', options).format(now));
