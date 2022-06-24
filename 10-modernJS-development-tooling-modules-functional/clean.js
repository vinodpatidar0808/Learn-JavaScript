// fix bad code to meet modern js best practices

const budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'vinod' },
    { value: -45, description: 'Groceries 🥑', user: 'vinod' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'vinod' },
    { value: 300, description: 'Freentryancing 👩‍💻', user: 'vinod' },
    { value: -1100, description: 'New iPhone 📱', user: 'vinod' },
    { value: -20, description: 'Candy 🍭', user: 'gagan' },
    { value: -125, description: 'Toys 🚂', user: 'gagan' },
    { value: -1800, description: 'New Laptop 💻', user: 'vinod' },
];

const spendingLimits = {
    vinod: 1500,
    gagan: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'vinod') {
    // if (!user) user = 'vinod';
    user = user.toLowerCase();
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

    if (value <= getLimit(user)) {
        budget.push({ value: -value, description: description, user: user });
    }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'gagan');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
    for (const entry of budget) {
        // const limit = spendingLimits?.[entry.user] ?? 0;

        if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
    }
};
checkExpenses();

console.log(budget);

const bigExpenses = function (bigLimit) {
    let output = '';
    for (const entry of budget)
        output +=
            entry.value <= -bigLimit
                ? `${entry.description.slice(-2)} +  / `
                : ''; // Emojis are 2 chars

    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

bigExpenses(100);
