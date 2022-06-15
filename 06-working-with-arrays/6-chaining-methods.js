'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// usd to inr , rate = 70
const usdToInr = 70;

// you can chain methods like this , be careful while chaining as each method requires an array, if you reduce before other methods it won't work
//PIPELINE
// to debug check out array(third argument in callback function) in each method to get the idea where is wrong
const totalDepositsInr = movements
    .filter(mov => mov > 0)
    .map(mov => mov * usdToInr)
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInr);

// remarks regarding chaining:
/* 
    we should not overuse it, we should optimize it.
    chaining tonnes of methods really causes performance issues if we have really large arrays
    it is bad practice in js to chain methods that mutate original array for eg  splice or reverse etc, for large scale apps it is advised to avoid chaining these methods.

*/
