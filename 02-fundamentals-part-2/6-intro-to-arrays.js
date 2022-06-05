// first data structure
// const friend1 = 'deekshith';
// const friend2 = 'gagan';
// const friend3 = 'deepak';

// suppose we have 100's of friends whose names we want to store than above process becomes tedious. That's why we have data structures to store and process data
// arrays and objects are two most imp data structures in js

// const/let arrayName = [data, data2.....]
// literal syntax
const friends = ['deekshith', 'gagan', 'deepak'];
console.log(friends);

// const years = new Array(1991, 1992, 1664, 1995, 2001);
// console.log(years);

// accessing individual array elements using bracket notation
// indexes in arrays start from 0 and index of last element is length-1
console.log(friends[0]);

// length property  in array gives number of elements in the array
console.log(friends.length);
friends[2] = 'krispy';
console.log(friends);

// variables declared with const can't be changed. but remember only primitive values are immutable and array is not a primitive value so you can replace values inside arrays even after declaring them as const, but you can't replace entire array like below
// friends = ['bob', 'marry'];

// arrays can store different types of data. in js arrays expect expression at each position

const country = 'India';
const vinod = [
    'vinod',
    'patidar',
    country,
    2022 - 1996,
    ['array', 'inside', 'another', 'array'],
    friends,
];
console.log(vinod);

// exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};
const years = [1991, 1992, 1996, 2005, 2001];
// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length - 1]);
const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
console.log(ages);

//  array methods/ operations
//push method : pushes a new element at the end of the original array. Push function returns new length of the array

const newLen = friends.push('deepak');
console.log(friends);
console.log(newLen);

// unshift : add element at the beginning of the array. unshift also returns new length of the array
friends.unshift('ashish');

// pop : remove last element from the array. Pop returns the removed element from the array
const element = friends.pop();
console.log(friends);
console.log(element);

// shift : remove first element from the array. Pop return the removed element from the array
friends.shift();
console.log(friends);

// indexOf : returns the index of element passed in argument. returns -1 if element is not present in the array
console.log(friends.indexOf('gagan'));
console.log(friends.indexOf('ajay'));

//ES6-- includes : returns true or false depending on whether the element is present in array or not. Uses strict equality
console.log(friends.includes('gagan'));
console.log(friends.includes(45));




