'use strict';

// maps are key value pair data structure

// this creates an empty map
const rest = new Map();
// maps can have any type of data as keys
// set method returns the updated map
rest.set('name', 'classic Italiano');
rest.set(1, 'Firenze Italy');
// console.log(rest);

// you can chain set/or other methods like this
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 13)
    .set('close', 20)
    .set(true, 'We are open')
    .set(false, 'We are closed');
// console.log(rest);

// to get data from map we use get method
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(false));

const time = 18;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// to check presence of a key
// console.log(rest.has('categories'));

// delete method to delete key value pair
rest.delete(1);

// size method to get number of key value pairs
// console.log(rest.size);

// to clear the map
// rest.clear();

// you can use array or objects as map keys
rest.set([1, 2], 'Test');
// this both arrays are not same in the heap
// console.log(rest.get([1, 2]));

const arr = [1, 2, 3];
rest.set(arr, 'test2');
// console.log(rest.get(arr));

// another method to create a map
// in each first position is going to be key and second position is for  value
const question = new Map([
    ['question', 'what is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'Try again'],
]);
// console.log(question);

// convert object to Map

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
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// object is not iterable so we convert it to itereable using Object.entries() to iterate over it using for of loop
// maps iteration, maps are iterables by default
// item will contain both key and value of question
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// to convert map back to an array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
