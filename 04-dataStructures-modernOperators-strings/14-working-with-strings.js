'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);

// strings are immutable
// string methods
// indexof: gives index of first occurence
console.log(airline.indexOf('r'));
// lastIndexOf : returns index of value's last occurence
console.log(airline.lastIndexOf('r'));
// slice : returns a new string original remains unchanged
console.log(airline.slice(4));
// slice(start, end) : end index is not included , so length = end -beginning
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));
// starts counting from the end , -1 is index of last letter so it will return last 2 characters
console.log(airline.slice(-2));
// starts at index 1 and stops at index -3, -2 not included
console.log(airline.slice(1, -2));

const checkMiddleSeat = seat => {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('you got the middle seat');
    else console.log('You got lucky');
};

checkMiddleSeat('11C');
checkMiddleSeat('23B');
checkMiddleSeat('11E');
checkMiddleSeat('11D');

// boxing : whenever we call a string method js behind the scene converts a string to an string object which then have many methods
console.log(new String('Vinod'));

// changing the case of strings : toLowerCase() , toUpperCase()
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'vInOd';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@vinod.io';
const loginEmail = '    Hello@Vinod.io  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();

console.log(normalisedEmail);
console.log(email === normalisedEmail);

// trimStart and trimEnd are also there to trim whitespace from beginning and end

// replacing: replace('what to replace ', 'with what to replace'). Creates a new string instead of replacing the original one
// replaces only first occurence
const priceGB = '2012,121,4#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23, bording door 23';
console.log(announcement);
console.log(announcement.replace('door', 'gate'));
// replaceAll will replace all occurences of door
console.log(announcement.replaceAll('door', 'gate'));

// regular expression: case sensitive
console.log(announcement.replace(/door/g, 'gate'));

// three methods that returns booleans-> includes
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('boeing'));

// startsWith
console.log(plane2.startsWith('Airb'));
// endswith
console.log(plane2.endsWith('neo'));

const checkBaggage = items => {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun'))
        console.log('you are not allowed to board');
    else console.log('welcome aboard');
};

checkBaggage('I have a laptop, some food and a pocket Knife');

checkBaggage('Socks and camera');
checkBaggage('got some snacks and a gun for protection');
// whenever we get input from user we always starts with converting it into lowercase this makes comparison a lot easier

// split : allows us to split string in multiple parts based on a divider string
// returns an array : so you can work in a way you work with array
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'vinod patidar'.split(' ');

// join: to join elements into string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalize = name => {
    const names = name.split(' ');
    const namesUpper = [];
    // take first letter of each word and transform to toUpperCase
};

// const friends = 'vinod patidar , deekshith raya';
// console.log(friends);

// padding a string
const message = 'Go to gate 23';
// makes the length of 25 : so inserts + which are needed to make string length = 25
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '-'));

console.log('vinod'.padStart(20, '+').padEnd(30, '-'));

const maskCreditCard = number => {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(645786237865));

// repeat method : to repeat same string multiple times

const msg = 'Bad weather... All departures delayed...';
console.log(msg.repeat(5));


// there are more methods but these are most commonly used : for more check MDN docs
// cocate, reverse, etc etc
