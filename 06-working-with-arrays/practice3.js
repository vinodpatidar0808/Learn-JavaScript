'use strict';

const account1 = {
    owner: 'Vinod Patidar',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Gagan Patidar',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Deepak Patidar',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Deekshith Velgapuni Raya',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// calculate total deposit  in bank
/* 
const bankTotalDeposit = accounts
    .map(acc => acc.movements)
    .flat()
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
console.log(bankTotalDeposit);
 */
// remember whenever you have map and then flat use flatMap
const bankTotalDeposit = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
console.log(bankTotalDeposit);

//2. how many deposits in the bank with atleast 1000
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);
// same problem but using reduce to count elements
const numDeposits10002 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
// count++ does not work here:  because it is a post increment operator, hence use ++count preincrement operator
console.log(numDeposits10002);

// 3. create new object : advance use case for reduce
// here the object in reduce method is initial value of sums object, you can generate object using reduce method like this
// you can use destructuring also
const sums = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
            // alternate way
            sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
            return sums;
        },
        { deposits: 0, withdrawals: 0 }
    );

console.log(sums);

//4.  this is a nice title -> This Is a Nice Title
const convertTitleCase = title => {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = [
        'a',
        'an',
        'and',
        'the',
        'but',
        'or',
        'on',
        'in',
        'with',
    ];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => (exceptions.includes(word) ? word : capitalize(word)))
        .join(' ');
    // capitalize the first word if was an exception
    return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
