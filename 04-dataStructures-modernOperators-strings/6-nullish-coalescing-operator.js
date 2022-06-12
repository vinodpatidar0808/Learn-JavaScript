'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

restaurant.numGuests = 0;
// when we want to set default value for guest to be 0 when there are no guest but 0 is a falsy value so it sets guest to 10
const guest = restaurant.numGuests || 10;

// ES-2022 : nullish coalesce operator, works with nullish values. 
// nullish values are null and undefined only
// non nullish values short circuit the operator
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// when both nullish last value will be returned
console.log(undefined ?? null);
console.log(undefined ?? 89);
console.log(45 ?? undefined);
