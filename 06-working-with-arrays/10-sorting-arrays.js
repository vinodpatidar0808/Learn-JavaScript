'use strict';

// sort method mutates the original array and sorts based on strings

//strings
const friends = ['vinod', 'deekshith', 'gagan', 'deepak'];
console.log(friends.sort());
console.log(friends);

// Numbers
const transactions = [400, 500, 100, 200, 4000, 3000, -500, -1000, 200, -300];
console.log(transactions);
0;
// sorts based on strings
// console.log(transactions.sort());

// solution : pass  a callback function with two  args
// if we return <0 , A, B ascending order
// if return >0  , B, A   descending order
// a and b are 2 consecutive numbers of array
/* transactions.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
}); */
// alternate way for above callback function
transactions.sort((a, b) => a - b);
console.log(transactions);
// descending order
/* transactions.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
});
 */
transactions.sort((a, b) => b - a);
console.log(transactions);

// if you have an array of mixed data types it won't work 