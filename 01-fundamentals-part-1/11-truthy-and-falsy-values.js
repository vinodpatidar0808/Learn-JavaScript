// falsy values are not exactly false but will become false when we try to convert them
// in JS there are only 5 falsy values
/*
    0 
    '' : empty String
    undefined
    null
    NaN
*/

//everything else will be a truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({})); // {}-> empty object
console.log(Boolean(NaN));
console.log(Boolean('Vinod'));
console.log(Boolean(''));

// conversion to boolean is explicitly coercion

const money = 0;
if (money) {
    console.log("don't spend it all: ");
} else {
    console.log('you should get a job!');
}

let height = 123;
// let height = 0
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is undefined');
}
