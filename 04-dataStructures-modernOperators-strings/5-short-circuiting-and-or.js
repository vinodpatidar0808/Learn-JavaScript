'use strict';

// short circuiting && and || operator
// they can use any data type, return any data type and short-circuiting

// short-circuiting in || :if first operand(value) is a truthy value it will immediately return this value without looking at the second operator

// useful for setting default values can be used in place of ternary or if else statement for setting value
console.log(3 || 'vinod'); //3

console.log('' || 'vinod');
console.log(true || 0);
// if both values are falsy value it returns second value(operand)
console.log(undefined || null);
// || returns first truthy value, or last falsy value when all are false
console.log(undefined || 0 || '' || 'hello' || 23 || null);

// when all are false last value is returned
console.log(undefined || 0 || '' || null);

// && operator: works exact opposite of or operator
console.log('------AND (&&)------');
// return first falsy when atleast one falsy value is encountered
console.log(0 && 'vinod');

// when all are truthy first value will be returned
console.log(1 || 'vinod' || true);



