// ternary operator is also a conditional operator. equivalent (not replacement) of if-else statement
// ternary operator structure:
// cond ? executes if cond is true : executes if cond is false;

const age = 26;
age >= 18
    ? console.log('you can drive')
    : console.log("you can't drive as of now");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

