// looping arrays using forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* 
for (const movement of movements) {
    let msg =
        movement < 0
            ? `You withdrew ${Math.abs(movement)}`
            : `You deposited ${movement}`;
    console.log(msg);
}
 */
// forEach is a higher order function
// forEach function gets called for each item as a result the callback function gets the element as argument
// you can also use arrow function for callback function
// just like you can get access to index using movements.entries(), you can get access to indices in forEach loop also
// you can use 1,2,3 argument but order must be same element, index , entire array;
movements.forEach(function (movement, index, arr) {
    let msg =
        movement < 0
            ? `You withdrew ${Math.abs(movement)}`
            : `You deposited ${movement}`;
    console.log(msg);
    console.log(arr);
});

// when to use forEach and for of loop
// the continue and break statements does not work with forEach loop, so if you need to break somewhere use for  of loop , if you know you have to loop over entire array use forEach or for of your preference

// forEach with maps and sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

// on Sets

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// sets don' have keys so in place of key you still get value,
// _ in second argument is a way to throw away argument as it means that there is no use of this argument
currenciesUnique.forEach((value, _, map) => {
    // console.log(`${key}: ${value}`);
    console.log(`${value}: ${value}`);
});
