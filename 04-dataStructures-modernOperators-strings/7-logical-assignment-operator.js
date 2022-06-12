'use strict';
// introduced in ES-2021

const restaurant = {
    name: 'national',
    //  numGuest: 28 ,
    numGuest: 0,
};
const restaurant2 = { name: 'xyz', owner: 'person' };

// giving default numGuests for each restaurant
// restaurant.numGuest = restaurant.numGuest || 10;
// restaurant2.numGuest = restaurant2.numGuest || 10;
// console.log(restaurant);
// console.log(restaurant2);

// logical assignment operator : OR
// restaurant.numGuest ||= 10;
// restaurant2.numGuest ||= 10;

// if restaurant.numGuest is 0 then we can use nullish coalescing operator

// nullish coalescing assignment operator
restaurant.numGuest ??= 10;
restaurant2.numGuest ??= 10;

// logical && assignment operator
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';
// restaurant.owner = restaurant.owner && '<ANONYMOUS>';

restaurant.owner &&= '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';

console.log(restaurant);
console.log(restaurant2);
