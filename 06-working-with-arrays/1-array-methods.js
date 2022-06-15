// check bankist app also for more concepts


// why array have methods: arrays are objects and so they get access to this attached tools to make working with this arrays

// slice: returns a new array does not mutate original array
// slice(startPos, [OptionalEndPos]) : end pos  will not be inluded , by default it give tilll the end
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4));
// return last 2 elements of array
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
// you can use slice method to create shallo copy of an array
const newArr = arr.slice();
console.log(newArr);

// splice : almost same as slice but mutates the original array
// splice(startPos, [endPos])
// return array of removed elements
console.log(arr.splice(2));
// now only 2 elements remain in original array
console.log(arr);

// reverse : reverses the array, mutate the original array
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// console.log(arr.reverse());
// console.log(arr);

// concate: to concatenate 2 arrays, does not mutate any of the involved arrays
const letters = ['i', 'j', 'k', 'l', 'm'];
const newLetters = arr.concat(letters);
console.log(newLetters);
// console.log(arr, letters);
// we can also use const newArr = [...arr, ...letters], this also returns new array

// join : to join all elements of array using a seperator
// returns a new string
console.log(letters.join('-'));
// console.log(letters);

// ES-2022: At method
const dummy = [23, 11, 64, 50];
console.log(dummy[0]); // traditional approach;
console.log(dummy.at(0));
// whats the difference between [] and at
// to get last element traditional ways
console.log(dummy[dummy.length - 1]);
console.log(dummy.slice(-1)[0]);
// by using at method, no need to calculate arr.length for getting elements from end of the array
console.log(dummy.at(-1));
// at methods also works with string: in same ways
