'use strict';

// spread operator
const arr = [3, 4, 6];
const badWayNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badWayNewArray);

// good way
// spread operator takes out all elements of the array and then place them individually in the new array in same order
// creates a completely new array
const newArray = [1, 2, ...arr];
console.log(newArray);
// badway
console.log(newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]);
// good way
console.log(...newArray);

const newArr2 = [...newArray, 9];
console.log(newArr2);

// copy array : shallow copy
const newArr = [...newArray];

// join 2  arrays
const newArr3 = [...newArray, ...newArr2];
console.log('joining 2 arrays ', newArr3);

//  spread operator works on all iterables
// iterables: arrays, strings, maps, sets but not objects, but after ES-2018 spread operator also works with objects
// spread operator with strings
const str = 'Vinod';
const letters = [...str, ' ', 'p.'];
console.log(letters);
console.log(...str);
// spread operator doesn't work with string template literals

// objects
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
const newRestaurant = { ...restaurant, foundedIn: 2022, founder: 'asdkfjklsa' };
console.log(newRestaurant);

// shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);
