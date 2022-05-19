// mathematical/arithmatic operators: ; +, /, *, -, %, **
const now = 2035;

const ageVinod = now - 1996;
const agePerson = now - 2019;

console.log(ageVinod, agePerson);
console.log(ageVinod * 2);
console.log(agePerson + ageVinod, ageVinod / 2, 2 ** 3, ageVinod % agePerson);
const firstName = 'vinod';
const lastName = 'patidar';
const fullName = firstName + lastName; // both strings will be joined without any space in bw them
console.log(fullName);

// asignment operators:
let x = 3 + 4; // x = 7
console.log(x);
x += 10; // x = x+10 --> 17
console.log(x);
x -= 5; // x = x-5
console.log(x);
x *= 2; // x=x*2
console.log(x);
x /= 3; // x=x/3
console.log(x);
x++; // x= x+1
console.log(x);
x--; // x=x-1
console.log(x);

//comparison operators: to produce a boolean value-> >,>=, <, <= , ==, === , !, !==, !=
console.log(agePerson > ageVinod);
console.log(firstName > lastName);
const compResult = firstName > lastName;
console.log(compResult);

// *************  NOTES *****************
/*
Operators : an operator allows us to transform values or combine values
there are many types of operators in js like mathematical operators, assignment operators , logical operators

arithematic operators:
 ** -> exponentian operator 2**3-> 2 raised to the power 3 
 /  -> divison operator 
 *  -> multiplication opertor 
 +  -> addition operator , concatenate strings also 
 -  -> substraction operator
 %  -> remainder/modulo operator

assignment Operators
  = -> assigns right side value to the left side variable
  += ->  
 */
