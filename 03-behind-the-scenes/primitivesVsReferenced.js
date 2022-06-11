'use strict';
// primitive vs objects (primitives vs referenced)
let age = 26;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);
const me = { name: 'Vinod', age: 26 };
const friend = me;
friend.age = 30;
console.log('Friend ', friend);
console.log('Me ', me);
// age of both friend and me object becomes 30, this is the source of confusion
/**
 * primitives: Number, string , boolean, undefined, null, symbol and bigInt
 * objects : object literal , arrays, functions and many more
 */
let city = 'ratlam';
let oldCity = city;

city = 'indore';
console.log(city, oldCity);

// referenced types
const myCity = {
    name: 'ratlam',
    pin: 457001,
    state: 'm.p.',
    family: ['harshil', 'manan', 'hetarth'],
};
// this does not create a new object in the heap, this just stores the address of old object in the call stack.More in theory notes
const myNewCity = myCity;
// myNewCity.pin = 452001;
console.log('my old city ', myCity);
console.log('my new city ', myNewCity);
// new assignment cannot be done with const , but you can propery values
// myNewCity = {};

// copying a object to a completely new object with same properties
// the assign method copies all the properties of city to another object
// works only at the first level , of mycity had object inside that would still be the same
// creates a shallow copy, we need a deep copy
const myNewCity2 = Object.assign({}, myCity);
myNewCity.pin = 452001;
// console.log('old city ', myCity);
// console.log('new city ', myNewCity2);
myNewCity2.family.push('sona');
myNewCity2.family.push('mona');
console.log('old city ', myCity);
console.log('new city ', myNewCity2);
