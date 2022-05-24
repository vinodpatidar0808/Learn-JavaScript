//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2037;
const ageVinod = now - 1996;
const agePerson = now - 2018;

//mathematical operators executes from left to right
console.log(25 - 10 - 5);
// assignment is a right to left execution

let x, y;

x = y = 25 - 10 - 5; // x=y=10, x=10
// - has higher precedence than assignment operator
console.log(x, y);

console.log(ageVinod, agePerson);
// const averageAge = ageVinod + agePerson / 2; // division operator has higher precedence than addition +

const averageAge = (ageVinod + agePerson) / 2;

