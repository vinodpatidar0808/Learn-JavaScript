'use strict';

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

indigo.book(345, 'vinod');
indigo.book(654, 'Vinod patidar');
const euroWings = { airline: 'Eurowings', iatacode: 'EW', bookings: [] };

// here book now becomes a regular function
const book = indigo.book;
// book(23, 'vinod patidar');

// how we can use same booking function for other airlines
// how to tell js that we want a booking on euroWings airline
// there are 3 function methods to do this call, apply and bind method
// functions are just an object and objects can have methods so functions also have methods in js
// here we called call method which then calls book method on euroWings object, first argument is where this will work. This allows us to manually and explicitly set this keyword
// call method
book.call(euroWings, 234, 'Vinod');

book.call(indigo, 5768, 'Harry Potter');

// apply method: exactly same as call method except this will recieve array of argument after this(object) keyword

const flightData = [546, 'Frodo'];
book.apply(euroWings, flightData);

// apply method is not used in modern js
book.call(euroWings, ...flightData);

// prefer using call method
