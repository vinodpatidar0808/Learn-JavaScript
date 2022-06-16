'use strict';

// % : returns remainder of a division operation
console.log(5 % 3);
console.log(5 / 3);

console.log(8 % 3);

// useful in cases like checking even or odd numbers
console.log(6 % 2);

const isEven = n => (n % 2 === 0 ? 'even' : 'odd');
console.log(isEven(34));
console.log(isEven(41));
