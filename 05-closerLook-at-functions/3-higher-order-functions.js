'use strict';

// functions accepting callback functions

const oneWord = str => {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirst = str => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher order function : takes   a function as argument or returns a function from it or both
// functions also have methods and properties
const transformer = (str, fn) => {
    console.log(str);
    console.log(`transformed string: ${fn(str)}`);
    // fn.name returns the name of function
    console.log(`transformed by: ${fn.name} `);
};

// here 2n argument or (function passed as argument) of the function is called as callback function and the transformer function is known as higher order function
transformer('Javascript is the best', upperFirst);
transformer('Javascript is the best', oneWord);

const high5 = () => {
    console.log('🙏');
};

// document.body.addEventListener('click', high5);

// why callback functions are so much used in Javascript
// makes it easy to split up code
// callback functions allows us to create abstraction
// Abstraction: we hide the detail of some code implementation, we don't care how the implementation, how callback function works not important for higher order function
