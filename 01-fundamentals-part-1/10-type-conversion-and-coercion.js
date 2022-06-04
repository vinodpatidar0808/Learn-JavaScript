//  type conversion : when we manually convert one type to another type \
//  type coercion : when js converts one type to another type

const inputYear = '1996';

console.log(Number(inputYear), inputYear); // the number function converts string to number, original value is not converted
// console.log(inputYear + 18); // 199618
console.log(Number(inputYear) + 18); //2014

// when you convert something impossible to convert into a number  JS will give a NaN(Not a Number )
console.log(Number('vinod'));
console.log(typeof NaN); // Number

// String(variable) : converts variable to string type, original variable remains same
console.log(String(23), 23);
// js can converts to only a few values like Number, String and Boolean you cannot convert to undefined or NaN etc

// type coercion : happens whenever an operator is dealing with operands of 2 different types
console.log('I am ' + 26 + ' years old '); // 26  will be converted to String

console.log('23' - '10' - 3); // here string will be converted to number
console.log('23' + '10' + 3);
//+ converts number to string and - converts strings to numbers

console.log('23' * '2'); // converts strings to numbers as this is the only way * operator can work

let n = '1' + 1; //'11'
n = n - 1; // '11' - 1
console.log(n);

console.log(2 + 3 + 4 + '5'); // 95 evaluates from left to right
console.log('10' - '4' - '3' - 2 + 5); // '6'
