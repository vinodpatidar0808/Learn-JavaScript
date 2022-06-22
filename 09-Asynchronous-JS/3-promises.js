'use strict';

// before ES6 we have to do like this
/* 
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();
request.addEventListener('load', function ( {
    
})
 */

// NOTE: ES6 and promises way of doing above stuff

// you can pass and Object of options for more options like method, contentheader etc, but for simple get request just fetch('url;)
const request = fetch('https://restcountries.com/v3.1/name/bharat');
// this fetch function returns a promise:  what is a promise and what it does for us :: read notes
console.log(request);

// CONSUMING PROMISES
const getCountryData = function (country) {
    // fetch will return a promise and on each promise we can call then method to consume that promise,
    // then expects a callback function which will be executed as soon as the promise is fulfilled/ result available
    // NOTE: to make this code more shorter and readable you can use arrow function for callbacks 
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            // any data from APIS need to be parsed
            // JSON function is also asynchronous function, this also returns a promise, so we need to return this
            // all of this becomes a new promise
            return response.json();
            // console.log(response);
        })
        .then(function (data) {
            console.log(data);
        });
};

getCountryData('bharat');
