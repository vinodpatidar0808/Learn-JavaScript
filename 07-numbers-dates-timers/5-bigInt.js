'use strict';

// ES-2020
// bigInt : one of primitive data type
// out  of 64 bits only 53 are used to store number themselves rest for decimal and others
// biggest no
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

// sometimes we need such big numbers: bigInt is for integers you can store as large integer as you want
// use n at the end of number for bigInt
console.log(64789253678567238645782637895n);

console.log(BigInt(2834562349562367865727534897));

// operations
console.log(1000n + 1000n);
console.log(3489576789234674563786n * 345435n);

// you can't mix bigInt and regular numbers, you have to convert regular numbers to BigInt
// logical opertors are exception
console.log(20n > 15);
// both have different types
console.log(20n === 20);
console.log(20n == 20);

// Math operations doesnt work also Math.something

// cut off the decimal part
console.log(11n / 3n);
