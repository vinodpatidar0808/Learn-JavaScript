const age = 18;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log(`you are eligible for a driving license `);
} else {
    const yearsLeft = 18 - age;
    console.log(`you are too young wait another ${yearsLeft}  years`);
}
/*
    if(condition){
        if condition is true then this block will be executed
    }else{
        if condition is false then this block will be executed
    }

    this type of if else statements are called control structures bcoz these controls how our code is executed 
*/

const birthYear = 1996;
let centuary;
if (birthYear <= 2000) {
    // let centuar = 20;
    centuary = 20;
} else {
    // let centuary = 21;
    centuary = 20;
}
// when you declare centuary inside if else block this will give error , uncomment line 22 and 25 and comment out line  20,23 and 26 to see
console.log(centuary);


