'use strict';

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
};

// this will show error as restaurant.openingHours.mon does not exist
// console.log(restaurant.openingHours.mon.open);

// old way
if (restaurant.openingHours.mon) console.log(mon.open);

// what if we also don't know about openingHours, whether it exist or not
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(...restaurant);

// this becomes messy when you have deeply nested object

// ES-2020: new feature for handling undefined properties
// with optional chaining, if ..mon exist then it will check for open property else returns from there
console.log(restaurant.openingHours.mon?.open);

// you can have multiple optional chaining, equivalent of line 35
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    // on saturday restaurant opens at 0 which is falsy so it doesn't work here as expected
    // const open = restaurant.openingHours[day]?.open || 'closed';
    const open = restaurant.openingHours[day]?.open ?? 'closed';

    console.log(`On ${day}, we open at ${open}`);
}

// nullish values: undefined and null , both optional chaining and nullish coalescing operators are defined in ES-2020 and works based on nullish values

// optional chaining also works for calling methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(
    restaurant.orderPizza?.('mushroom', 'onion') ?? 'Method does not exist'
);

// with arrays
// const users = [{ name: 'vinod', email: 'abc@gmail.com' }];
const users = [];
console.log(users[0]?.name ?? 'user array empty');

// old way
if (users.length > 0) console.log(users[0].name);
else console.log('user array is empty');
