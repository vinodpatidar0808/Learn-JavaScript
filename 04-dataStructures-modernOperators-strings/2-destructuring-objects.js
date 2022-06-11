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
    // Destructuring in function params,  this is common in many third party libraries.
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20 hours',
        address,
    }) {
        console.log(starterIndex, mainIndex, address, time);
    },
};

restaurant.orderDelivery({
    time: '12:34',
    address: 'ratlam',
    mainIndex: 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    address: 'indore',
    starterIndex: 1,
});

// object Destructuring, really important in development
// we need to give exact property names for Destructuring objects, in objects order of elements doesn't matter so we don't have to skip an object using ,

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// to give different names for properties
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default values  using =. here we assign starterMenu a new name and also gives it a default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables/ swapping variables
let a = 333;
let b = 44;
const obj = { a: 23, b: 7, c: 6 };
// this will throw  as error as anything that starts with a { js assumes it as a code block
// {a,b} = obj;
// solution: wrap in parentheses
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
    fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
