'use strict';

// like call and apply bind also allows us to manually set this keyword, the difference is that bind doesn't call the function immediately instead it return a new function where this keyword set to whatever value we bind

const indigo = {
    airline: 'Indigo',
    iatacode: 'IN',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
        );
        this.bookings.push(`flight: ${this.iatacode}${flightNum}`, name);
    },
};

const book = indigo.book;

const euroWings = { airline: 'Eurowings', iatacode: 'EW', bookings: [] };

// it returns a new function where this will always be bound to euroWings
const bookEw = book.bind(euroWings);
bookEw(234, 'Vinod patidar');

const swiss = { airline: 'swiss airline', iatacode: 'SA', bookings: [] };

const bookSwiss = book.bind(swiss);
bookSwiss(5786, 'rahul');

// 2nd argument is flight number of the book function, and now this bookEw23 will only book flights of airplane no 23 . here we are setting first argument of book function to 23
const bookEw23 = book.bind(euroWings, 23);
bookEw23('vinod');
bookEw23('person');

// with event listeners
indigo.planes = 300;
// Arrow function does not have this remember
// indigo.buyPlane = () => {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

indigo.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// indigo.buyPlane();

// indigo.buyPlane will use this for window, hence we have to bind  it
document
    .querySelector('.buy')
    .addEventListener('click', indigo.buyPlane.bind(indigo));

// partial application:  we can preset parameter, not using for this
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 400));

// now suppose we have one tax which is always applied
// null as we don't want to bind with any this
const addVat = addTax.bind(null, 0.23);
// addVat = value=>value+value*0.23

console.log(addVat(100));
// if you want to do something like this you must be careful about order of arguments, using bind gives us a new function

// same thing using higher order function
const addVatHof = rate => value => value + value * rate;
const addVat2 = addVatHof(0.23);
console.log(addVat2(100));
