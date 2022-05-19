// console.log(jsIsFun);
let jsIsFun = true;
//variable declaration should come before it is used as js programs run in top to bottom manner
console.log(jsIsFun);

// typeof operator shows the value type of its arguments
console.log(typeof true);
console.log(typeof 'hello');
console.log(typeof 3454);
console.log(typeof jsIsFun);

// dynamic typing in action
jsIsFun = 'Yes!'; //we changed the value of variable along with it's type. earliear -boolean, now string
console.log(jsIsFun);

let year;
console.log(year); // whenever we declare an empty variable the value of the variable will be defined.

console.log(typeof year); // type of an empty variable will also be Undefined

year = 1996;
console.log(year);

console.log(typeof null); // this will return object which is weird it should be null but js considers it as an object keep this in mind

// **************  NOTES  *********************
//  in js every value is either an object or a primitive

// primitive data types : 7 types
// 1 Numbers: floating point numbers
// 2 string : sequence of characters , used for text , strings should always be enclosed inside quotes either single or double
// 3 Boolean : logical type that can onlyy be true or false , used for taking decisions
// 4 Undefined: value taken by a viariable that is not defined yet(empty value)
// 5 null : also means empty value
// 6 symbol : ES2015-> value that is unique and cannot be changed
// 7 BigInt : ES2020 -> larger integers than the number type can hold

// js has dynamic typing -> you don't have to define the data type of the value stored in a variable. Data types are determined automatically.
//  value has a type not the variable
