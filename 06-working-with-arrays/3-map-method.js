'use strict';

// map method returns a brand new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// convert this USD's into indian rupees rate = 70

const usdToInr = 70;

// you can have 1,2 or all 3 arguments depending on your requirements but order must be same
// you can use arrow function here without any problem
const movementsInr = movements.map(function (mov, index, array) {
    // console.log(args);
    return mov * usdToInr;
});
console.log(movements);
console.log(movementsInr);

// using arrow, here we also get access to all 3 elements as callback function is called by map method we do not call it.
const movementsInrArr = movements.map(mov => mov * usdToInr);
console.log(movementsInrArr);

const movementsDescription = movements.map(
    (mov, i) =>
        `movement ${i + 1}: you ${
            mov > 0 ? 'deposited' : 'withdrew'
        } ${Math.abs(mov)}`
);
console.log(movementsDescription);
