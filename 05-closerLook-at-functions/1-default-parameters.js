'use strict';

// default parameters :  if parameters not passed they have a default value
const bookings = [];
// ES6 default parameters, they can contain any expression
// default parameters should be declared in last 
const createBooking = (flightNum, numPassengers = 1, price = 199) => {
    // old way  : ES-5 way
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('GA123');
createBooking('IN45', 2, 800);
createBooking('AI458', 5, 450);
createBooking('AI458', 450);
// we can not skip arguments while calling function
// createBooking('IH6789', ,7879)
// solution
createBooking('IN68', undefined, 789);
