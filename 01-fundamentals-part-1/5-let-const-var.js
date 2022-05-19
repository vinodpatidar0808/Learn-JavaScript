let age = 26;
age = 25; // change the value -> reassigning the variable or mutating the age variable
let emptyVar;
emptyVar = 34;

const birthYear = 1996;

var job = 'programmer';
job = 'teacher';

firstName = 'vinod'; // variable without let const and var, works without error but you should never do this.

// ************* NOTES *******************
// let and const are introduced in ES6, while var is old way of declaring variables
// use let for declaring variables that can change value later, for declaring empty variables

// const  creates a variable that  we can not reassign or mutate or immutable variable
// we can not declare empty variable with const
// which one to use for writing clean code : when your are sure that your variable will change value in future use let else const.  suppose you have a variable that is not supposed to change like birthYear use const

// it is good practice to have as less mutations as possible
//var should be avoided -> legacy, it similar to let
