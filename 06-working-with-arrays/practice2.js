'use strict';

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)

4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages => {
    const humanAge = ages.map(dogAge =>
        dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
    );
    console.log(humanAge);
    const dogsAbove18 = humanAge.filter(age => age >= 18);
    console.log(dogsAbove18);
    const avg =
        dogsAbove18.reduce((acc, curr) => acc + curr, 0) / dogsAbove18.length;
    // console.log(total);
    // const avg = total / dogsAbove18.length;
    // console.log(avg);
    return avg;
};
// console.log(calcAverageHumanAge(data1));
// console.log(calcAverageHumanAge(data2));

// short version using chaining
const calcAverageHumanAgeShort = ages => {
    let count = 0;
    const total = ages
        .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
        .filter(age => {
            count = age >= 18 ? count + 1 : count;
            // console.log(count);
            return age >= 18;
        })
        .reduce((acc, curr) => acc + curr, 0);
    // console.log(count);
    // console.log(total);
    const avg = total / count;
    return avg;
};

console.log(calcAverageHumanAgeShort(data1));
console.log(calcAverageHumanAgeShort(data2));
