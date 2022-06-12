'use strict';

// you can loop over both key/property and values
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

const openingHours = {
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
};

// properties is an array of keys
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
    console.log(day);
}

// property values
// values are also an array
const values = Object.values(openingHours);
console.log(values);

// entries : for keys and values
console.log('----Entries------');
const entries = Object.entries(openingHours);
console.log(entries);

for (const [prop, value] of Object.entries(openingHours)) {
    console.log(prop, value);
}
// you could have destructures value in loop also {open,close}

