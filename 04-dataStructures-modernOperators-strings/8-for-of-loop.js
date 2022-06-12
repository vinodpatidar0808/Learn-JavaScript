'use strict';
// ES6- looping arrays using for of looping

const arr = [1, 2, 4, 7, 5, 3];

// you can use break and continue with this loop also
for (const item of arr) {
    console.log(item);
}

// what if we need index of element also
for (const element of arr.entries()) {
    // you get  element as array with 2 values index, and value
    console.log(element);
}

for (const [index, item] of arr.entries()) {
    console.log(index, item);
}
