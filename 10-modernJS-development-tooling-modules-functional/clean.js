'use strict';
// fix bad code to meet modern js best practices
// Object.freeze --> makes object immutable, you can not add new properties or change existing properties object becomes read only
// you can change nested properties as it works only for first layer not a deep freeze
const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'vinod' },
    { value: -45, description: 'Groceries 🥑', user: 'vinod' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'vinod' },
    { value: 300, description: 'Freentryancing 👩‍💻', user: 'vinod' },
    { value: -1100, description: 'New iPhone 📱', user: 'vinod' },
    { value: -20, description: 'Candy 🍭', user: 'gagan' },
    { value: -125, description: 'Toys 🚂', user: 'gagan' },
    { value: -1800, description: 'New Laptop 💻', user: 'vinod' },
]);

const spendingLimits = Object.freeze({
    vinod: 1500,
    gagan: 100,
});
// both will throw errors
// spendingLimits.jay = 500;
// spendingLimits.gagan = 500;
console.log(spendingLimits);

const getLimit = (user, limits) => limits?.[user] ?? 0;

// NOTE: this function has side effects : as it modifies outside values/ does something other than returning values. function which have side effects are called impure functions.
// how to fix: always pass all the data that function depends on. function should not change any of these values-> create a copy and mutate that copy (this is useful in react states where states are immutable)

// PURE function :
const addExpense = function (
    state,
    limits,
    value,
    description,
    user = 'vinod'
) {
    // if (!user) user = 'vinod';
    //NOTE: avoid this data mutations whenever possible

    const cleanUser = user.toLowerCase();
    /* 
    let lim;
    if (spendingLimits[user]) {
        lim = spendingLimits[user];
    } entryse {
        lim = 0;
    }
     */

    // const limit = spendingLimits[user] ? spendingLimits : 0;
    // const limit = spendingLimits?.[user] ?? 0;

    return value <= getLimit(user, limits)
        ? [
              ...state,
              { value: -value, description: description, user: cleanUser },
          ]
        : state;
};

//NOTE: giving data of one function to another and to another is efficiently handled by something called composing and currying read about both of them important for interviews

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
// console.log(newBudget);
const newBudget2 = addExpense(
    newBudget1,
    spendingLimits,
    100,
    'Going to movies 🍿',
    'gagan'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function (state, limits) {
    // replacing below loop with data transformation methods
    return state.map(entry => {
        return entry.value < -getLimit(entry.user)
            ? { ...entry, flag: 'limit' }
            : entry;
    });

    /* 
    for (const entry of budget) {
        // const limit = spendingLimits?.[entry.user] ?? 0;

        if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
    }
     */
};

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

// impure : doing console.log also, we need side effects but in functional programming we push side effects to as far to the edge as possible
const logBigExpenses = function (state, bigLimit) {
    // imperative:
    /* 
    let output = '';
    for (const entry of budget)
        output +=
            entry.value <= -bigLimit
                ? `${entry.description.slice(-2)} +  / `
                : ''; // Emojis are 2 chars

    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
 */
    // declarative / functional
    const bigExpenses = state
        .filter(entry => entry.value <= -bigLimit)
        // .map(entry => endtry.description.slice(-2))
        // .join(' / ');
        .reduce((str, curr) => `${str} ${curr.description.slice(-2)} / `, '');
    console.log(bigExpenses);
};

logBigExpenses(finalBudget, 100);

// functional programming : 1 immutability 2. side effects 3. making data transformations using pure function like map filter reduce etc
