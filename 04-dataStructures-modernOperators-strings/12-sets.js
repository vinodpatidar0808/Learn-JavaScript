'use strict';

// sets introduced in ES-6
// sets contain only unique values.
// sets also looks like array and they are also iterables but the order of elements in set irrelevent
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
// ordersSet contains only 3 values
console.log(ordersSet);

console.log(new Set('Vinod'));

// size of set
console.log(ordersSet.size);

// to check whether an element is inside of set or not, looks for exact match and returns a boolean

console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Pizza'));

// to add an element, returns the updated set
const val = ordersSet.add('Garlic bread');
console.log(val, ordersSet);
// to delete an element
ordersSet.delete('Risotto');
console.log(val, ordersSet);

// clearing set: clears the elements only does not delete the set itself
// ordersSet.clear();
// console.log(ordersSet);

// you can loop over sets also
for (const order of ordersSet) {
    console.log(order);
}

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// to check unique positions of staff
const staffUnique = new Set(staff);
console.log(staffUnique);
// to make an array from set
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

// indexing does not work with set , there is no way to take value out of set
