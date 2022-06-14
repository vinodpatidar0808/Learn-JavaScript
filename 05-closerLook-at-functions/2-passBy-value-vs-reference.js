'use strict';

// passing arguments to function pass by value and pass by reference

const flight = 'IN345';
const vinod = { name: 'Vinod Patidar', passport: 3456327667 };

const checkIn = (flight, passenger) => {
    (flight = 'IN435'), (passenger.name = 'Mr.' + passenger.name);
    if (passenger.passport === 3456327667) console.log('check in');
    else console.log('wrong passport');
};

checkIn(flight, vinod);
// flight name remains same but vinod.name is changed, flight is primitive type while vinod is reference type hence flight name will be copied as different variable but not the passenger
// similar to this -> const flight = flight; const passenger = vinod
console.log(flight, vinod);

//
const newPassport = person => {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

// passport is changed outside of function also, so remember when multiple functions work on same object be careful
newPassport(vinod);
checkIn(flight, vinod);

// in js there is only pass by value and no pass by reference

