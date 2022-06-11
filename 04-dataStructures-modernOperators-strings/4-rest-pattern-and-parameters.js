'use strict';

// same syntax as spread operator but is different from spread operator. it's opposite of spread operator
// spread operator : spreads values of as individual values
// rest operator: compress values in array

// spread because on right side of =
const arr = [1, 2, ...[3, 4, 5]];

// rest syntax as left on = sign, called rest because it collects rest of the elements which are not destructured and forms a new array of remaining elements
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const [pizza, risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects: similar with array , here remaining objects will be collected in new object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// functions: to catch extra parameters. here this is called rest arguments
const add = (...numbers) => {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

console.log(add(2, 3));
console.log(add(3, 4, 5));
console.log(add(3, 4, 5, 1, 4, 8, 6, 2, 1, 4));

const x = [4, 5, 4, 7, 5];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


