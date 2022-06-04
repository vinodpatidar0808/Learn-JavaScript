const firstName = 'vinod';
const job = 'programmer';
const birthYear = 1996;
const year = 2022;

const vinod =
    "I'm " +
    firstName +
    ', a ' +
    (year - birthYear) +
    ' years old ' +
    job +
    '!';
console.log(vinod);
// look  at above string how painful it is to manage everything like spaces and expressions etc. Starting from ES-6 we have much better tool template literal for doing stuff like this

// template literal-> starts and ends with backticks(``)
const vinodNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} ! `;
console.log(vinodNew);
// template literals can be used for regular strings also
console.log(`regulr string`);

//multi line strings before ES6
console.log('string with  \n  multiple \n lines');
// with template literals/backticks
console.log(`String with 
multiple 
lines`);
