// const age = 18;
const age = '18';
if (age === 18) {
    console.log('You just became an adult (strict)');
}

if (age == '18') {
    console.log('You just became an adult (loose)');
}

//  === (strict equality operator : no type coercion during comparison) : true only if both sides are exactly same in type and value
// == (loose equality operator : perform type coercion during comparison)

// for  clean code avoid loose equality operator as much as you can

// prompt function : to get input from user in a webpage

// const favourite = prompt("what's your favourite number");
const favourite = Number(prompt("what's your favourite number"));
console.log(favourite, typeof favourite);
if (favourite === 88) {
    console.log('88 is an amazing number');
} else if (favourite === 25) {
    console.log('25 is also  a cool number');
} else {
    console.log('number is not 88 or 25');
}

if (favourite !== 23) {
    console.log('why not 23');
}

/** like strict equality and loose equality there exist srict non equality (!==) and loose non equality (!=) operator

prefer strict non equality operator for clean code
*/

/** 
if(condition1) {
    if condition1 is true this block will execute
}else if(condition2){
    if condition2 is true this block will execute
}else if(condition3){
    if condition3 is true this block will execute
}
...
else{
    if none of the above conditions are true this block will execute
}
**/
