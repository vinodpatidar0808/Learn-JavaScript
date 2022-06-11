'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

// Destructuring is ES-6 features ,
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// using array Destructuring(unpacking). dont forget to declare variable using let/const
const [x, y, z] = arr;
console.log(x, y, z);
// will take out only 1st and 2nd  element from the categories array of restaurant
const [first, second] = restaurant.categories;

// for first and third simply leave a hole in the Destructuring operation
const [f, , t] = restaurant.categories;
console.log(f, t);

// swapping 2 values , in general we use a temp variable
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// swap main and secondary
[main, secondary] = [secondary, main];
console.log(main, secondary);

// returning array from a function
const [starter, mainDish] = restaurant.order(2, 0);
console.log(starter, mainDish);

// nested arrays
const nested = [2, 4, [5, 6]];

const [i, , newArr] = nested;
console.log(i, newArr);

// to get individual values of nested arrays we have to do Destructuring inside Destructuring
const [p, , [q, r]] = nested;
console.log(p, q, r);

// default values
const array = [8, 9];
// assigning default values
const [j = 1, k = 2, l = 3] = array;
console.log(j, k, l);
